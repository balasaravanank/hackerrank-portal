"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import KineticGrid from "@/components/ui/kinetic-grid";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <KineticGrid>
      <section className="relative min-h-[calc(100vh-5rem)] sm:min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-16 sm:py-32 overflow-hidden text-center">

        {/* Big prominent logo with proper padding so it's never cut off */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
          className="mb-6 sm:mb-8"
        >
          <div className="relative size-24 sm:size-28 md:size-32 rounded-2xl bg-white p-2 shadow-xl shadow-accent/20 border border-border/80 mx-auto">
            <Image
              src="/hackerrank-icon.png"
              alt="HackerRank"
              fill
              className="object-contain rounded-xl"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.035em] leading-[1.08] text-foreground"
        >
          HackerRank
          <br />
          Campus Crew
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
          className="mt-4 text-xl sm:text-2xl font-semibold leading-relaxed text-foreground/80"
        >
          at Saveetha Engineering College
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease }}
          className="mt-5 text-base sm:text-lg leading-[1.7] text-foreground/75 max-w-[520px]"
        >
          Monthly coding contests, hackathons, and workshops powered by the same
          platform companies use to hire engineers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
            className="h-12 px-8 rounded-full bg-accent text-white text-base font-semibold shadow-lg shadow-accent/30 cursor-pointer transition-all duration-150 hover:bg-accent-hover hover:shadow-xl hover:shadow-accent/40 active:scale-[0.98] inline-flex items-center"
          >
            Join the waitlist
          </button>
          <div className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-foreground/75 bg-black/[0.04] px-3.5 py-1.5 rounded-full border border-border/70">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            200+ students signed up
          </div>
        </motion.div>
      </section>
    </KineticGrid>
  );
}
