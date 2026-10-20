"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden">
      <DotPattern
        cy={1}
        cr={1}
        cx={1}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
        )}
      />
      <div className="max-w-[720px] mx-auto w-full py-32 sm:py-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="flex justify-center"
        >
          <Image
            src="/hackerrank-icon.png"
            alt=""
            width={52}
            height={52}
            className="w-13 h-13 rounded-lg mb-8"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[1.1] text-foreground"
        >
          HackerRank
          <br />
          Campus Crew
          <br />
          <span className="text-foreground/40 font-normal text-3xl sm:text-4xl lg:text-5xl">
            at Saveetha Engineering College
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="mt-6 text-xl leading-relaxed text-foreground/60 max-w-[540px] mx-auto"
        >
          Monthly coding contests, hackathons, and workshops
          powered by the same platform companies use to hire
          engineers. We&apos;re building the crew now.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#waitlist"
            className="h-12 px-8 rounded-full bg-accent text-white text-base font-medium cursor-pointer transition-colors duration-150 hover:bg-accent-hover active:scale-[0.98] flex items-center"
          >
            Join the waitlist
          </a>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-base text-accent font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            200+ students signed up
          </div>
        </motion.div>
      </div>
    </section>
  );
}
