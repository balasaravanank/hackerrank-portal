"use client"

import * as React from "react"

export interface HalftonePalette {
  background: string
  ink: string
  warm: string
}

export type HalftonePreset = "night" | "paper" | "ember" | "cobalt"

export interface FooterLink {
  label: string
  href?: string
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export interface HalftoneWordmarkFooterProps {
  wordmark?: string
  label?: string
  meta?: string
  columns?: FooterColumn[]
  backToTop?: boolean
  preset?: HalftonePreset
  palette?: { background?: string; ink?: string; warm?: string }
  dotGap?: number
  radius?: number
  crop?: number
  grain?: number
  interactive?: boolean
  fontFamily?: string
  fontWeight?: number
  monoFamily?: string
  height?: string
  className?: string
}

const PRESETS: { [K in HalftonePreset]: HalftonePalette } = {
  night: { background: "#0c0c0b", ink: "#e9e4da", warm: "#e9762b" },
  paper: { background: "#efebe3", ink: "#17150f", warm: "#c2361c" },
  ember: { background: "#160a06", ink: "#f2c48c", warm: "#ff5a1f" },
  cobalt: { background: "#0d1b4d", ink: "#dfe7ff", warm: "#ffcd3c" },
}

const SANS_STACK = '"Inter Tight", "Inter Variable", "Inter", "Helvetica Neue", Arial, system-ui, sans-serif'
const MONO_STACK = '"JetBrains Mono", "SF Mono", ui-monospace, Menlo, Consolas, monospace'

export function hwfHex(hex: string) {
  const m = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec((hex || "").trim())
  if (!m) return null
  const h = m[1].length === 3 ? m[1].split("").map((c) => c + c).join("") : m[1]
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]
}

export function hwfRadius(coverage: number, gap: number) {
  const c = coverage < 0 ? 0 : coverage > 1 ? 1 : coverage
  return Math.sqrt(c) * gap * 0.56
}

export function hwfStep(
  x: number, y: number, vx: number, vy: number,
  hx: number, hy: number, px: number, py: number, r: number,
) {
  const dx = x - px
  const dy = y - py
  const d2 = dx * dx + dy * dy
  if (r > 0 && d2 < r * r) {
    const d = Math.sqrt(d2) + 0.001
    const f = (1 - d / r) * 2.6
    vx += (dx / d) * f
    vy += (dy / d) * f
  }
  vx = (vx + (hx - x) * 0.05) * 0.84
  vy = (vy + (hy - y) * 0.05) * 0.84
  return [x + vx, y + vy, vx, vy]
}

export function hwfWarmth(x: number, y: number, hx: number, hy: number, span: number) {
  const d = Math.hypot(x - hx, y - hy)
  return span > 0 ? Math.min(1, d / span) : 0
}

export function hwfFitSize(measured: number, width: number) {
  return measured > 0 ? (width / measured) * 100 : 0
}

const HWF_CSS = `
.hwf-root {
  position: relative; width: 100%; overflow: hidden; isolation: isolate;
  height: var(--hwf-height, 560px);
  min-height: 440px;
  background: var(--hwf-bg); color: var(--hwf-ink); -webkit-font-smoothing: antialiased;
}
.hwf-root canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; max-width: none; pointer-events: none; }
.hwf-top {
  position: relative; z-index: 2; display: grid; grid-template-columns: minmax(0, 1.25fr) repeat(var(--hwf-cols, 3), minmax(0, 1fr));
  gap: 24px; padding: clamp(28px, 3.4vw, 44px) clamp(20px, 3.4vw, 44px) 0;
  font-family: var(--hwf-mono); font-size: 11px; letter-spacing: .15em; text-transform: uppercase; line-height: 1.75;
}
.hwf-brand strong { display: block; font-weight: 600; font-size: 13px; color: #ffffff; letter-spacing: 0.05em; }
.hwf-brand span { opacity: .65; font-size: 11px; margin-top: 3px; display: block; }
.hwf-col h3 { margin: 0; font: inherit; opacity: .75; font-weight: 600; color: var(--hwf-warm); font-size: 11px; }
.hwf-col ul { list-style: none; margin: 8px 0 0; padding: 0; }
.hwf-col li { margin-bottom: 4px; }
.hwf-col a, .hwf-up {
  color: inherit; text-decoration: none; opacity: .85; background: none; border: 0; padding: 4px 0;
  font: inherit; letter-spacing: inherit; text-transform: inherit; cursor: pointer; display: inline-block;
  background-image: linear-gradient(currentColor, currentColor); background-size: 0% 1px;
  background-repeat: no-repeat; background-position: 0 100%; transition: opacity .25s ease, background-size .35s cubic-bezier(.2,.7,.1,1);
}
.hwf-col a:hover, .hwf-up:hover { opacity: 1; background-size: 100% 1px; }
.hwf-col a:focus-visible, .hwf-up:focus-visible { outline: 1px solid currentColor; outline-offset: 3px; opacity: 1; }
.hwf-rule {
  position: relative; z-index: 2; display: flex; justify-content: flex-end; align-items: center; gap: 16px;
  margin: clamp(20px, 2.6vw, 32px) clamp(20px, 3.4vw, 44px) 0; padding-top: 14px;
  border-top: 0.5px solid color-mix(in srgb, var(--hwf-ink) 20%, transparent);
  font-family: var(--hwf-mono); font-size: 11px; letter-spacing: .15em; text-transform: uppercase;
}
.hwf-sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

@media (max-width: 720px) {
  .hwf-root {
    height: auto !important;
    min-height: 480px;
    padding-bottom: 28px;
  }
  .hwf-top {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 22px 18px;
    padding: 32px 20px 0;
    font-size: 12px;
    line-height: 1.8;
  }
  .hwf-brand {
    grid-column: 1 / -1;
    margin-bottom: 6px;
  }
  .hwf-brand strong {
    font-size: 15px;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: 0.03em;
  }
  .hwf-brand span {
    opacity: 0.75;
    font-size: 12px;
  }
  .hwf-col h3 {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: var(--hwf-warm);
    opacity: 0.95;
    margin-bottom: 6px;
  }
  .hwf-col li {
    margin-bottom: 6px;
  }
  .hwf-col a {
    font-size: 13px;
    opacity: 0.9;
    padding: 6px 0;
  }
  .hwf-rule {
    margin: 28px 20px 0;
    padding-top: 16px;
  }
  .hwf-up {
    font-size: 12px;
    padding: 6px 12px;
    border-radius: 6px;
    background: rgba(255,255,255,0.08);
    opacity: 0.95;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hwf-col a, .hwf-up { transition: none; }
}
`

type PointerEv = PointerEvent

export default function HalftoneWordmarkFooter({
  wordmark = "halden",
  label = "Halden Studio",
  meta = "©2026 · Oslo / Lisbon",
  columns,
  backToTop = true,
  preset = "night",
  palette,
  dotGap = 6,
  radius = 80,
  crop = 0.2,
  grain = 0.5,
  interactive = true,
  fontFamily = SANS_STACK,
  fontWeight = 800,
  monoFamily = MONO_STACK,
  height = "560px",
  className = "",
}: HalftoneWordmarkFooterProps) {
  const DEFAULT_COLUMNS: FooterColumn[] = [
    { title: "Work", links: [{ label: "Index" }, { label: "Archive" }, { label: "Journal" }] },
    { title: "Studio", links: [{ label: "About" }, { label: "Process" }, { label: "Careers" }] },
    { title: "Contact", links: [{ label: "hello@halden.co" }, { label: "+47 22 00 41 00" }] },
  ]
  const cols = columns || DEFAULT_COLUMNS

  const colors = { ...(PRESETS[preset] || PRESETS.night), ...(palette || {}) }
  const rootRef = React.useRef(null as HTMLElement | null)
  const canvasRef = React.useRef(null as HTMLCanvasElement | null)
  const opts = React.useRef({ colors, dotGap, radius, crop, grain, interactive, fontFamily, fontWeight, wordmark })
  opts.current = { colors, dotGap, radius, crop, grain, interactive, fontFamily, fontWeight, wordmark }
  const key = [wordmark, dotGap, crop, grain, fontFamily, fontWeight, colors.background, colors.ink, colors.warm].join("|")

  React.useEffect(() => {
    const root = rootRef.current
    const canvas = canvasRef.current
    if (!root || !canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let w = 0
    let h = 0
    let dpr = 1
    let px = -1e5
    let py = -1e5
    let raf = 0
    let visible = true
    let awake = true
    let ring = { x: 0, y: 0, t: -1 }
    let dots = new Float32Array(0)
    let count = 0
    let grainTile = null as HTMLCanvasElement | null
    const ink = hwfHex(opts.current.colors.ink) || [233, 228, 218]
    const warm = hwfHex(opts.current.colors.warm) || [5, 199, 112]

    const layout = () => {
      const o = opts.current
      const rect = root.getBoundingClientRect()
      w = Math.max(1, Math.round(rect.width))
      h = Math.max(1, Math.round(rect.height))
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)

      const isMobile = w < 720

      const mask = document.createElement("canvas")
      mask.width = w
      mask.height = h
      const m = mask.getContext("2d", { willReadFrequently: true })
      if (!m) return

      const lines = (o.wordmark || " ").split("\n")
      const c = isMobile ? 0.04 : Math.max(0, Math.min(0.6, o.crop))
      m.fillStyle = "#000"
      m.textBaseline = "alphabetic"

      if (lines.length > 1) {
        const face = o.fontWeight + " 100px " + o.fontFamily
        m.font = face
        let maxMeasured = 0
        for (const line of lines) {
          const mw = m.measureText(line).width
          if (mw > maxMeasured) maxMeasured = mw
        }
        const fit = hwfFitSize(maxMeasured, w * (isMobile ? 0.94 : 1.02))
        m.font = o.fontWeight + " " + fit + "px " + o.fontFamily
        const sampleBox = m.measureText(lines[0])
        const cap = sampleBox.actualBoundingBoxAscent || fit * 0.72
        const lineHeight = cap * 1.08
        const totalHeight = lineHeight * lines.length
        
        // On mobile, position so the wordmark sits inside the footer with clean padding
        const baseY = isMobile
          ? h - 14
          : h + totalHeight * c - lineHeight * (lines.length - 1) * 0.05

        for (let i = 0; i < lines.length; i++) {
          const lineBox = m.measureText(lines[i])
          const lx = (w - lineBox.width) / 2
          const ly = baseY - (lines.length - 1 - i) * lineHeight
          m.fillText(lines[i], lx, ly)
        }
      } else {
        const face = o.fontWeight + " 100px " + o.fontFamily
        m.font = face
        const word = lines[0]
        const fit = hwfFitSize(m.measureText(word).width, w * (isMobile ? 0.94 : 1.02))
        m.font = o.fontWeight + " " + fit + "px " + o.fontFamily
        const box = m.measureText(word)
        const cap = box.actualBoundingBoxAscent || fit * 0.72
        const baseY = isMobile ? h - 14 : h + cap * c
        m.fillText(word, (w - box.width) / 2, baseY)
      }

      const img = m.getImageData(0, 0, w, h).data

      // Dynamic gap on mobile so text has enough resolution to be clearly legible
      const gap = isMobile ? Math.max(3, Math.min(o.dotGap, 4)) : Math.max(3, o.dotGap)
      const gapCols = Math.ceil(w / gap)
      const rows = Math.ceil(h / gap)
      const tmp = []
      for (let gy = 0; gy < rows; gy++) {
        for (let gx = 0; gx < gapCols; gx++) {
          let sum = 0
          for (let sy = 0; sy < 3; sy++) {
            for (let sx = 0; sx < 3; sx++) {
              const xx = Math.min(w - 1, Math.floor(gx * gap + ((sx + 0.5) * gap) / 3))
              const yy = Math.min(h - 1, Math.floor(gy * gap + ((sy + 0.5) * gap) / 3))
              sum += img[(yy * w + xx) * 4 + 3]
            }
          }
          const cov = sum / (9 * 255)
          if (cov < 0.06) continue
          const hxx = gx * gap + gap / 2
          const hyy = gy * gap + gap / 2
          tmp.push(hxx, hyy, 0, 0, hxx, hyy, hwfRadius(cov, gap))
        }
      }
      dots = new Float32Array(tmp)
      count = tmp.length / 7

      grainTile = document.createElement("canvas")
      grainTile.width = 256
      grainTile.height = 256
      const g = grainTile.getContext("2d")
      if (g) {
        const id = g.createImageData(256, 256)
        for (let i = 0; i < id.data.length; i += 4) {
          const v = Math.random() * 255
          id.data[i] = id.data[i + 1] = id.data[i + 2] = v
          id.data[i + 3] = Math.random() < 0.5 ? 0 : 255
        }
        g.putImageData(id, 0, 0)
      }
      awake = true
    }

    const draw = (now: number) => {
      const o = opts.current
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.fillStyle = o.colors.background
      ctx.fillRect(0, 0, w, h)

      const r = o.interactive && !reduced ? Math.max(0, o.radius) : 0
      const ringAge = ring.t < 0 ? 1e9 : now - ring.t
      const ringR = ringAge * 0.9
      let moving = false
      for (let i = 0; i < count; i++) {
        const j = i * 7
        let x = dots[j]
        let y = dots[j + 1]
        let vx = dots[j + 2]
        let vy = dots[j + 3]
        const hx = dots[j + 4]
        const hy = dots[j + 5]
        if (!reduced) {
          if (ringAge < 900) {
            const dx = hx - ring.x
            const dy = hy - ring.y
            const d = Math.sqrt(dx * dx + dy * dy) + 0.001
            const band = 1 - Math.min(1, Math.abs(d - ringR) / 26)
            if (band > 0) {
              const f = band * 3.2 * (1 - ringAge / 900)
              vx += (dx / d) * f
              vy += (dy / d) * f
            }
          }
          const s = hwfStep(x, y, vx, vy, hx, hy, px, py, r)
          x = s[0]
          y = s[1]
          vx = s[2]
          vy = s[3]
          if (Math.abs(vx) + Math.abs(vy) > 0.02 || Math.abs(x - hx) + Math.abs(y - hy) > 0.05) moving = true
          else { x = hx; y = hy; vx = 0; vy = 0 }
          dots[j] = x
          dots[j + 1] = y
          dots[j + 2] = vx
          dots[j + 3] = vy
        }
        const k = hwfWarmth(x, y, hx, hy, 28)
        ctx.fillStyle = k > 0.02
          ? "rgb(" + Math.round(ink[0] + (warm[0] - ink[0]) * k) + "," + Math.round(ink[1] + (warm[1] - ink[1]) * k) + "," + Math.round(ink[2] + (warm[2] - ink[2]) * k) + ")"
          : o.colors.ink
        ctx.beginPath()
        ctx.arc(x, y, dots[j + 6], 0, 6.2832)
        ctx.fill()
      }

      if (grainTile && o.grain > 0) {
        ctx.globalAlpha = Math.min(1, o.grain) * 0.09
        ctx.globalCompositeOperation = "overlay"
        const pattern = ctx.createPattern(grainTile, "repeat")
        if (pattern) { ctx.fillStyle = pattern; ctx.fillRect(0, 0, w, h) }
        ctx.globalAlpha = 1
        ctx.globalCompositeOperation = "source-over"
      }
      awake = moving || ringAge < 900 || px > -1e4
    }

    const loop = (now: number) => {
      raf = 0
      if (!visible) return
      draw(now)
      if (awake) raf = requestAnimationFrame(loop)
    }
    const wake = () => { awake = true; if (!raf && visible) raf = requestAnimationFrame(loop) }

    const toLocal = (e: PointerEv) => {
      const b = root.getBoundingClientRect()
      return [e.clientX - b.left, e.clientY - b.top]
    }
    const onMove = (e: PointerEv) => { if (!opts.current.interactive) return; const p = toLocal(e); px = p[0]; py = p[1]; wake() }
    const onLeave = () => { px = -1e5; py = -1e5; wake() }
    const onDown = (e: PointerEv) => {
      if (!opts.current.interactive || reduced) return
      if ((e.target as HTMLElement).closest("a,button")) return
      const p = toLocal(e)
      ring = { x: p[0], y: p[1], t: performance.now() }
      wake()
    }

    layout()
    draw(performance.now())
    wake()

    root.addEventListener("pointermove", onMove)
    root.addEventListener("pointerleave", onLeave)
    root.addEventListener("pointerdown", onDown)
    const ro = new ResizeObserver(() => { layout(); wake() })
    ro.observe(root)
    const io = new IntersectionObserver((entries) => { visible = entries[0] ? entries[0].isIntersecting : true; if (visible) wake() })
    io.observe(root)
    let alive = true
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => { if (!alive) return; layout(); wake() })
    }

    return () => {
      alive = false
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      root.removeEventListener("pointermove", onMove)
      root.removeEventListener("pointerleave", onLeave)
      root.removeEventListener("pointerdown", onDown)
    }
  }, [key])

  const toTop = () => { window.scrollTo({ top: 0, behavior: "smooth" }) }

  return (
    <footer
      ref={rootRef}
      className={"hwf-root " + className}
      style={{
        "--hwf-height": height,
        "--hwf-bg": colors.background,
        "--hwf-ink": colors.ink,
        "--hwf-warm": colors.warm,
        "--hwf-mono": monoFamily,
        "--hwf-cols": cols.length || 0,
      } as React.CSSProperties}
    >
      <style>{HWF_CSS}</style>
      <canvas ref={canvasRef} aria-hidden="true" />
      <span className="hwf-sr">{wordmark}</span>
      <div className="hwf-top">
        <div className="hwf-brand">
          <strong>{label}</strong>
          <span>{meta}</span>
        </div>
        {cols.map((col) => (
          <nav className="hwf-col" key={col.title} aria-label={col.title}>
            <h3>{col.title}</h3>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href || "#"}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="hwf-rule">
        {backToTop ? (
          <button type="button" className="hwf-up" onClick={toTop}>
            Back to top ↑
          </button>
        ) : null}
      </div>
    </footer>
  )
}
