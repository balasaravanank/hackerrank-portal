"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Rocket, BookOpen, Mic, BrainCircuit, Clock, Users, Video } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease },
  }),
};

export default function Events() {
  return (
    <section className="px-6 py-20 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-3xl lg:max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="text-2xl sm:text-3xl font-bold tracking-[-0.025em] leading-tight text-foreground"
        >
          Events we run
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-3 text-lg text-foreground/60 leading-relaxed max-w-[520px]"
        >
          At least one event every month. Formats that build skill, not attendance numbers.
        </motion.p>

        <div className="relative mt-10">
          <div className="relative z-10 grid grid-cols-6 gap-3">

            {/* ── Coding Contests ── */}
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="col-span-full lg:col-span-2"
            >
              <Card className="group relative flex h-full overflow-hidden transition-shadow duration-300 hover:shadow-md">
                <CardContent className="relative m-auto w-full pt-6">
                  <div className="relative mx-auto w-56">
                    <svg className="w-full" viewBox="0 0 240 140" fill="none">
                      <rect x="4" y="4" width="232" height="132" rx="8" fill="currentColor" className="text-foreground/[0.03]" />
                      <rect x="4" y="4" width="232" height="24" rx="8" fill="currentColor" className="text-foreground/[0.05]" />
                      <rect x="4" y="20" width="232" height="8" fill="currentColor" className="text-foreground/[0.05]" />
                      <circle cx="18" cy="16" r="3" fill="currentColor" className="text-foreground/15" />
                      <circle cx="28" cy="16" r="3" fill="currentColor" className="text-foreground/15" />
                      <circle cx="38" cy="16" r="3" fill="currentColor" className="text-foreground/15" />
                      <text x="120" y="18" textAnchor="middle" fontSize="9" fontFamily="monospace" fontWeight="600" fill="currentColor" className="text-accent">
                        02:45:30
                        <animate attributeName="opacity" values="1;0.4;1" dur="1s" repeatCount="indefinite" />
                      </text>
                      <text x="16" y="46" fontSize="8" fontFamily="monospace" fill="currentColor" className="text-foreground/20">1</text>
                      <rect x="30" y="39" width="50" height="8" rx="2" fill="currentColor" className="text-accent/30">
                        <animate attributeName="width" from="0" to="50" dur="0.6s" fill="freeze" />
                      </rect>
                      <rect x="84" y="39" width="30" height="8" rx="2" fill="currentColor" className="text-foreground/10">
                        <animate attributeName="width" from="0" to="30" dur="0.6s" begin="0.1s" fill="freeze" />
                      </rect>
                      <text x="16" y="62" fontSize="8" fontFamily="monospace" fill="currentColor" className="text-foreground/20">2</text>
                      <rect x="42" y="55" width="70" height="8" rx="2" fill="currentColor" className="text-accent/20">
                        <animate attributeName="width" from="0" to="70" dur="0.6s" begin="0.2s" fill="freeze" />
                      </rect>
                      <text x="16" y="78" fontSize="8" fontFamily="monospace" fill="currentColor" className="text-foreground/20">3</text>
                      <rect x="42" y="71" width="90" height="8" rx="2" fill="currentColor" className="text-foreground/8">
                        <animate attributeName="width" from="0" to="90" dur="0.6s" begin="0.3s" fill="freeze" />
                      </rect>
                      <rect x="136" y="71" width="40" height="8" rx="2" fill="currentColor" className="text-accent/25">
                        <animate attributeName="width" from="0" to="40" dur="0.6s" begin="0.35s" fill="freeze" />
                      </rect>
                      <text x="16" y="94" fontSize="8" fontFamily="monospace" fill="currentColor" className="text-foreground/20">4</text>
                      <rect x="30" y="87" width="60" height="8" rx="2" fill="currentColor" className="text-foreground/8">
                        <animate attributeName="width" from="0" to="60" dur="0.6s" begin="0.4s" fill="freeze" />
                      </rect>
                      <text x="16" y="110" fontSize="8" fontFamily="monospace" fill="currentColor" className="text-foreground/20">5</text>
                      <rect x="30" y="103" width="45" height="8" rx="2" fill="currentColor" className="text-accent/30">
                        <animate attributeName="width" from="0" to="45" dur="0.6s" begin="0.5s" fill="freeze" />
                      </rect>
                      <rect x="79" y="103" width="2" height="10" fill="currentColor" className="text-accent">
                        <animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite" />
                      </rect>
                      <circle cx="214" cy="120" r="12" fill="currentColor" className="text-accent/15" />
                    </svg>
                    <Trophy className="absolute bottom-2 right-5 size-5 text-accent transition-transform duration-300 group-hover:scale-125" strokeWidth={1.5} />
                  </div>
                  <h2 className="mt-6 text-center text-xl font-semibold">Coding Contests</h2>
                  <p className="mt-2 text-center text-base text-foreground/60">Timed DSA and competitive programming on HackerRank.</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* ── Hackathons -kanban + team + countdown ── */}
            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="col-span-full sm:col-span-3 lg:col-span-2"
            >
              <Card className="group relative h-full overflow-hidden transition-shadow duration-300 hover:shadow-md">
                <CardContent className="pt-6 flex flex-col items-center">
                  {/* Hero illustration */}
                  <div className="relative w-full px-2">
                    {/* Glow behind the project */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-24 bg-accent/[0.06] blur-2xl rounded-full transition-all duration-700 group-hover:h-32 group-hover:bg-accent/[0.1]"></div>

                    {/* Project showcase -browser mockup */}
                    <div className="relative mx-auto w-full max-w-[220px] rounded-xl border border-border bg-card shadow-sm transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-lg">
                      {/* Browser chrome */}
                      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
                        <div className="flex gap-1">
                          <span className="block size-2 rounded-full bg-red-400/60"></span>
                          <span className="block size-2 rounded-full bg-yellow-400/60"></span>
                          <span className="block size-2 rounded-full bg-green-400/60"></span>
                        </div>
                        <div className="flex-1 mx-2 h-3.5 rounded-full bg-foreground/[0.05] flex items-center px-2">
                          <div className="h-1 w-14 rounded bg-foreground/10"></div>
                        </div>
                      </div>
                      {/* App content */}
                      <div className="p-3 space-y-2.5">
                        {/* Nav */}
                        <div className="flex items-center justify-between">
                          <div className="h-2 w-12 rounded bg-foreground/10"></div>
                          <div className="flex gap-1.5">
                            <div className="h-2 w-6 rounded bg-foreground/6"></div>
                            <div className="h-2 w-6 rounded bg-foreground/6"></div>
                            <div className="h-2 w-8 rounded-full bg-accent/25"></div>
                          </div>
                        </div>
                        {/* Hero area */}
                        <div className="rounded-lg bg-accent/[0.07] p-2.5 text-center">
                          <div className="h-2.5 w-20 mx-auto rounded bg-foreground/10 mb-1.5"></div>
                          <div className="h-1.5 w-28 mx-auto rounded bg-foreground/6"></div>
                          <div className="mt-2 h-4 w-14 mx-auto rounded-full bg-accent/20 flex items-center justify-center">
                            <div className="h-1 w-8 rounded bg-accent/40"></div>
                          </div>
                        </div>
                        {/* Cards grid */}
                        <div className="grid grid-cols-3 gap-1.5">
                          <div className="h-8 rounded bg-foreground/[0.04] border border-foreground/[0.05]"></div>
                          <div className="h-8 rounded bg-accent/[0.08] border border-accent/15"></div>
                          <div className="h-8 rounded bg-foreground/[0.04] border border-foreground/[0.05]"></div>
                        </div>
                      </div>
                    </div>

                    {/* 48h countdown */}
                    <div className="absolute -right-1 top-3 flex items-center gap-1 rounded-lg bg-card border border-border px-2 py-1 shadow-sm transition-transform duration-500 group-hover:translate-x-1">
                      <Clock className="size-3 text-accent" strokeWidth={2} />
                      <span className="text-[10px] font-bold text-accent tabular-nums">48:00</span>
                    </div>

                    {/* Shipped badge */}
                    <motion.div
                      className="absolute -right-2 bottom-0 flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 shadow-md"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8, type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <Rocket className="size-3 text-white" strokeWidth={2} />
                      <span className="text-[9px] font-bold text-white uppercase tracking-wide">Shipped</span>
                    </motion.div>
                  </div>

                  <div className="relative z-10 mt-6 space-y-2 text-center">
                    <h2 className="text-lg font-semibold">Hackathons</h2>
                    <p className="text-base text-foreground/60">Build something real, solo or team. Present and ship it.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ── Workshops -live session split ── */}
            <motion.div
              custom={2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="col-span-full sm:col-span-3 lg:col-span-2"
            >
              <Card className="group relative h-full overflow-hidden transition-shadow duration-300 hover:shadow-md">
                <CardContent className="pt-6 flex flex-col items-center">
                  <div className="relative w-full px-2">
                    {/* Glow */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-24 bg-accent/[0.06] blur-2xl rounded-full transition-all duration-700 group-hover:h-32 group-hover:bg-accent/[0.1]"></div>

                    {/* Split-screen: slide + terminal */}
                    <div className="relative mx-auto w-full max-w-[220px] rounded-xl border border-border bg-card shadow-sm transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-lg overflow-hidden">
                      {/* Browser chrome */}
                      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
                        <div className="flex gap-1">
                          <span className="block size-2 rounded-full bg-red-400/60"></span>
                          <span className="block size-2 rounded-full bg-yellow-400/60"></span>
                          <span className="block size-2 rounded-full bg-green-400/60"></span>
                        </div>
                        <div className="flex-1 mx-2 h-3.5 rounded-full bg-foreground/[0.05] flex items-center justify-center">
                          <span className="text-[6px] text-foreground/25 font-medium">Workshop -DSA Basics</span>
                        </div>
                      </div>
                      {/* Slide area */}
                      <div className="p-3 border-b border-border">
                        <div className="rounded-md bg-accent/[0.05] p-2.5">
                          <div className="h-2.5 w-24 rounded bg-foreground/10 mb-2"></div>
                          <div className="space-y-1.5 pl-1.5">
                            <div className="flex items-center gap-1.5">
                              <div className="size-1.5 rounded-full bg-accent/50 shrink-0"></div>
                              <div className="h-1.5 w-28 rounded bg-foreground/8"></div>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="size-1.5 rounded-full bg-accent/50 shrink-0"></div>
                              <div className="h-1.5 w-20 rounded bg-foreground/8"></div>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="size-1.5 rounded-full bg-accent/50 shrink-0"></div>
                              <div className="h-1.5 w-24 rounded bg-accent/15"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Terminal area */}
                      <div className="p-3 bg-foreground/[0.02]">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <span className="text-[7px] font-mono font-bold text-accent">$</span>
                          <div className="h-1.5 w-24 rounded bg-foreground/8"></div>
                          <div className="w-[2px] h-3 bg-accent rounded-full">
                            <svg viewBox="0 0 2 12" className="w-full h-full"><rect width="2" height="12" fill="currentColor" className="text-accent"><animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite" /></rect></svg>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[7px] font-mono text-accent/40">~</span>
                          <div className="h-1.5 w-16 rounded bg-accent/10"></div>
                          <span className="text-[6px] text-accent/50 font-mono">OK</span>
                        </div>
                      </div>
                    </div>

                    {/* LIVE floating badge */}
                    <div className="absolute -left-1 top-3 flex items-center gap-1.5 rounded-lg bg-card border border-border px-2 py-1 shadow-sm transition-transform duration-500 group-hover:-translate-x-1">
                      <span className="relative flex size-2">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex size-2 rounded-full bg-accent"></span>
                      </span>
                      <span className="text-[9px] font-bold text-accent uppercase">Live</span>
                    </div>

                    {/* Follow along badge */}
                    <motion.div
                      className="absolute -right-2 bottom-0 flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 shadow-md"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9, type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <BookOpen className="size-3 text-white" strokeWidth={2} />
                      <span className="text-[9px] font-bold text-white uppercase tracking-wide">Hands-on</span>
                    </motion.div>
                  </div>

                  <div className="relative z-10 mt-6 space-y-2 text-center">
                    <h2 className="text-lg font-semibold">Workshops</h2>
                    <p className="text-base text-foreground/60">Instructor-led sessions on DSA, web dev, AI/ML, and interview prep.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ── Tech Talks -webinar mockup ── */}
            <motion.div
              custom={3}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="col-span-full lg:col-span-3"
            >
              <Card className="group relative h-full overflow-hidden transition-shadow duration-300 hover:shadow-md">
                <CardContent className="grid pt-6 sm:grid-cols-2">
                  <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                    <div className="relative flex aspect-square size-12 rounded-full border border-border transition-colors duration-300 group-hover:border-accent/40 before:absolute before:-inset-2 before:rounded-full before:border before:border-border before:transition-colors before:duration-300 group-hover:before:border-accent/20">
                      <Mic className="m-auto size-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-lg font-semibold">Tech Talks</h2>
                      <p className="text-base text-foreground/60">Industry sessions with HackerRank engineers and guest speakers.</p>
                    </div>
                  </div>
                  <div className="relative -mb-6 -mr-6 mt-6 sm:ml-6">
                    <div className="relative">
                      {/* Glow */}
                      <div className="absolute inset-0 bg-accent/[0.04] blur-2xl rounded-full transition-all duration-700 group-hover:bg-accent/[0.08]"></div>

                      {/* Webinar app mockup */}
                      <div className="relative rounded-tl-xl border-l border-t border-border bg-card shadow-sm transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:shadow-lg overflow-hidden">
                        {/* Chrome */}
                        <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
                          <div className="flex gap-1">
                            <span className="block size-1.5 rounded-full bg-red-400/60"></span>
                            <span className="block size-1.5 rounded-full bg-yellow-400/60"></span>
                            <span className="block size-1.5 rounded-full bg-green-400/60"></span>
                          </div>
                          <div className="flex-1 mx-2 h-3 rounded-full bg-foreground/[0.05] flex items-center justify-center">
                            <span className="text-[5px] text-foreground/25 font-medium">HackerRank Tech Talk</span>
                          </div>
                        </div>

                        {/* Video area */}
                        <div className="relative aspect-[16/10] bg-foreground/[0.03] flex items-center justify-center">
                          <svg className="size-20 text-foreground/[0.07]" viewBox="0 0 80 80" fill="none">
                            <circle cx="40" cy="26" r="14" fill="currentColor" />
                            <path d="M12 72c0-16 12-28 28-28s28 12 28 28" fill="currentColor" />
                          </svg>
                          {/* LIVE pill */}
                          <div className="absolute top-2 left-2 flex items-center gap-1 rounded-full bg-accent px-2 py-0.5 shadow-sm">
                            <span className="relative flex size-1.5">
                              <span className="absolute inline-flex size-full animate-ping rounded-full bg-white opacity-75"></span>
                              <span className="relative inline-flex size-1.5 rounded-full bg-white"></span>
                            </span>
                            <span className="text-[7px] font-bold text-white uppercase">Live</span>
                          </div>
                          {/* Viewer count */}
                          <div className="absolute top-2 right-2 flex items-center gap-1 rounded-full bg-card/80 border border-border px-1.5 py-0.5 backdrop-blur-sm">
                            <Users className="size-2.5 text-foreground/40" strokeWidth={2} />
                            <span className="text-[7px] text-foreground/40 font-semibold">124</span>
                          </div>
                          {/* Speaker name bar */}
                          <div className="absolute bottom-2 left-2 rounded bg-card/80 border border-border px-2 py-1 backdrop-blur-sm">
                            <div className="h-1.5 w-16 rounded bg-foreground/10"></div>
                          </div>
                        </div>

                        {/* Chat panel */}
                        <div className="border-t border-border p-2.5 space-y-1.5">
                          <div className="flex items-center gap-1.5">
                            <div className="size-3.5 rounded-full bg-accent/25 shrink-0"></div>
                            <div className="rounded-lg bg-foreground/[0.04] px-2 py-1 flex-1">
                              <div className="h-1 w-20 rounded bg-foreground/8"></div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="size-3.5 rounded-full bg-accent/35 shrink-0"></div>
                            <div className="rounded-lg bg-accent/[0.06] px-2 py-1 flex-1">
                              <div className="h-1 w-14 rounded bg-accent/12"></div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="size-3.5 rounded-full bg-accent/20 shrink-0"></div>
                            <div className="rounded-lg bg-foreground/[0.04] px-2 py-1 flex-1">
                              <div className="h-1 w-24 rounded bg-foreground/8"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Q&A floating badge */}
                      <motion.div
                        className="absolute -left-3 bottom-12 flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 shadow-md z-10"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1, type: "spring", stiffness: 400, damping: 15 }}
                      >
                        <Mic className="size-3 text-white" strokeWidth={2} />
                        <span className="text-[9px] font-bold text-white uppercase tracking-wide">Q&A</span>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* ── Mock Interviews -split-screen coding interview ── */}
            <motion.div
              custom={4}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="col-span-full lg:col-span-3"
            >
              <Card className="group relative h-full overflow-hidden transition-shadow duration-300 hover:shadow-md">
                <CardContent className="grid h-full pt-6 sm:grid-cols-2">
                  <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                    <div className="relative flex aspect-square size-12 rounded-full border border-border transition-colors duration-300 group-hover:border-accent/40 before:absolute before:-inset-2 before:rounded-full before:border before:border-border before:transition-colors before:duration-300 group-hover:before:border-accent/20">
                      <BrainCircuit className="m-auto size-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-lg font-semibold">Mock Interviews</h2>
                      <p className="text-base text-foreground/60">AI-powered practice sessions using HackerRank interview credits.</p>
                    </div>
                  </div>
                  <div className="relative -mb-6 -mr-6 mt-6 sm:ml-6">
                    <div className="relative">
                      {/* Glow */}
                      <div className="absolute inset-0 bg-accent/[0.04] blur-2xl rounded-full transition-all duration-700 group-hover:bg-accent/[0.08]"></div>

                      {/* Interview platform mockup */}
                      <div className="relative rounded-tl-xl border-l border-t border-border bg-card shadow-sm transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:shadow-lg overflow-hidden">
                        {/* Chrome */}
                        <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
                          <div className="flex gap-1">
                            <span className="block size-1.5 rounded-full bg-red-400/60"></span>
                            <span className="block size-1.5 rounded-full bg-yellow-400/60"></span>
                            <span className="block size-1.5 rounded-full bg-green-400/60"></span>
                          </div>
                          <div className="flex-1 mx-2 h-3 rounded-full bg-foreground/[0.05] flex items-center justify-center">
                            <span className="text-[5px] text-foreground/25 font-medium">HackerRank Interview</span>
                          </div>
                        </div>

                        {/* Split screen */}
                        <div className="flex">
                          {/* Video side */}
                          <div className="w-[38%] border-r border-border p-2 bg-foreground/[0.02]">
                            {/* Interviewer */}
                            <div className="relative rounded-md bg-foreground/[0.04] aspect-[4/3] flex items-center justify-center mb-1.5">
                              <svg className="size-10 text-foreground/[0.08]" viewBox="0 0 80 80" fill="none">
                                <circle cx="40" cy="26" r="14" fill="currentColor" />
                                <path d="M12 72c0-16 12-28 28-28s28 12 28 28" fill="currentColor" />
                              </svg>
                              <div className="absolute bottom-1 left-1 rounded bg-card/80 px-1 py-0.5 backdrop-blur-sm">
                                <span className="text-[5px] text-foreground/30 font-medium">Interviewer</span>
                              </div>
                            </div>
                            {/* You */}
                            <div className="relative rounded-md bg-foreground/[0.04] aspect-[4/3] flex items-center justify-center">
                              <svg className="size-8 text-foreground/[0.06]" viewBox="0 0 80 80" fill="none">
                                <circle cx="40" cy="26" r="14" fill="currentColor" />
                                <path d="M12 72c0-16 12-28 28-28s28 12 28 28" fill="currentColor" />
                              </svg>
                              <div className="absolute bottom-1 left-1 rounded bg-card/80 px-1 py-0.5 backdrop-blur-sm">
                                <span className="text-[5px] text-foreground/30 font-medium">You</span>
                              </div>
                              <Video className="absolute bottom-1 right-1 size-2.5 text-accent/40" strokeWidth={2} />
                            </div>
                          </div>

                          {/* Code editor side */}
                          <div className="w-[62%] flex flex-col">
                            {/* Problem header */}
                            <div className="flex items-center gap-1.5 border-b border-border px-2.5 py-1.5">
                              <div className="h-1.5 w-14 rounded bg-foreground/10"></div>
                              <div className="rounded-full bg-accent/15 px-1.5 py-0.5">
                                <span className="text-[5px] font-bold text-accent">Medium</span>
                              </div>
                            </div>
                            {/* Code area */}
                            <div className="flex-1 p-2 space-y-1.5">
                              <div className="flex items-center gap-1">
                                <span className="text-[6px] text-foreground/20 font-mono w-2.5 text-right shrink-0">1</span>
                                <div className="h-1.5 w-12 rounded bg-accent/30"></div>
                                <div className="h-1.5 w-8 rounded bg-foreground/10"></div>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-[6px] text-foreground/20 font-mono w-2.5 text-right shrink-0">2</span>
                                <div className="ml-2 h-1.5 w-16 rounded bg-foreground/8"></div>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-[6px] text-foreground/20 font-mono w-2.5 text-right shrink-0">3</span>
                                <div className="ml-2 h-1.5 w-20 rounded bg-accent/15"></div>
                                <div className="h-1.5 w-6 rounded bg-foreground/6"></div>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-[6px] text-foreground/20 font-mono w-2.5 text-right shrink-0">4</span>
                                <div className="ml-4 h-1.5 w-10 rounded bg-foreground/8"></div>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-[6px] text-foreground/20 font-mono w-2.5 text-right shrink-0">5</span>
                                <div className="ml-2 h-1.5 w-8 rounded bg-accent/20"></div>
                                <div className="w-[2px] h-2.5 bg-accent rounded-full">
                                  <svg viewBox="0 0 2 10" className="w-full h-full"><rect width="2" height="10" fill="currentColor" className="text-accent"><animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite" /></rect></svg>
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-[6px] text-foreground/20 font-mono w-2.5 text-right shrink-0">6</span>
                                <div className="h-1.5 w-6 rounded bg-accent/25"></div>
                              </div>
                            </div>
                            {/* Bottom bar */}
                            <div className="border-t border-border px-2.5 py-1.5 flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <Clock className="size-2.5 text-foreground/30" strokeWidth={2} />
                                <span className="text-[7px] font-mono text-foreground/30 font-medium">32:15</span>
                              </div>
                              <div className="rounded-full bg-accent/15 px-2 py-0.5">
                                <span className="text-[6px] font-bold text-accent">Run Code</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* AI badge */}
                      <motion.div
                        className="absolute -left-3 bottom-8 flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 shadow-md z-10"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.1, type: "spring", stiffness: 400, damping: 15 }}
                      >
                        <BrainCircuit className="size-3 text-white" strokeWidth={2} />
                        <span className="text-[9px] font-bold text-white uppercase tracking-wide">AI-Powered</span>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
