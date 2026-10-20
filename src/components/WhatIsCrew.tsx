"use client";

import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const stats = [
  { value: "100+", label: "Colleges worldwide", change: "Global" },
  { value: "50K+", label: "Student community", change: "Growing" },
  { value: "1,500+", label: "AI tools for winners", change: "6 months" },
  { value: "12 mo", label: "Infinity Plan prize", change: "Premium" },
];

const ease = [0.16, 1, 0.3, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2 + i * 0.1, ease },
  }),
};

export default function WhatIsCrew() {
  return (
    <section className="px-6 py-20 sm:py-28 border-t border-border">
      <div className="max-w-[1080px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left -text */}
          <div className="flex gap-5 flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
            >
              <Badge>Campus Crew</Badge>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="flex gap-3 flex-col"
            >
              <h2 className="text-2xl md:text-3xl lg:text-5xl tracking-[-0.025em] lg:max-w-xl font-bold text-left leading-tight text-foreground">
                What is Campus Crew?
              </h2>
              <p className="text-lg lg:max-w-md leading-[1.7] text-foreground/60 text-left">
                HackerRank Campus Crew is a global community of students who bring
                HackerRank&apos;s technology, competitions, and career resources directly
                to their campuses. It exists to close the gap between classroom learning
                and industry-ready skill.
              </p>
              <p className="text-lg lg:max-w-md leading-[1.7] text-foreground/60 text-left">
                As a member, you get access to the same assessment and practice tools
                used in real technical hiring -coding tests, role-based challenges,
                mock interviews, and certifications. Not theory. Actual preparation.
              </p>
            </motion.div>
          </div>

          {/* Right -stat cards */}
          <div className="flex justify-center items-center">
            <div className="grid text-left grid-cols-1 sm:grid-cols-2 w-full gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group flex gap-0 flex-col justify-between p-5 border border-border rounded-lg hover:border-accent/30 hover:shadow-sm transition-all duration-200"
                >
                  <MoveUpRight className="w-4 h-4 mb-8 text-accent" />
                  <h3 className="text-3xl tracking-tight text-left font-bold flex flex-row gap-3 items-end text-foreground">
                    {stat.value}
                    <span className="text-muted-foreground text-sm font-medium tracking-normal">
                      {stat.change}
                    </span>
                  </h3>
                  <p className="text-base leading-relaxed text-foreground/60 max-w-xl text-left mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
