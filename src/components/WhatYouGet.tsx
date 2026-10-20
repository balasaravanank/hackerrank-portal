"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const resources = [
  {
    name: "HackerRank for Work",
    desc: "Enterprise-grade coding tests, MCQs, and role-based assessments -the same platform companies use to hire.",
  },
  {
    name: "SkillUp",
    desc: "Self-paced learning paths, hands-on practice, and certifications to build your profile.",
  },
  {
    name: "Infinity Plan",
    desc: "1-year premium HackerRank subscription awarded to event winners. Access the full platform -unlimited practice, advanced tracks, certifications, and priority support -all unlocked for 12 months.",
  },
  {
    name: "Mock Interviews",
    desc: "AI-powered mock interview credits so you can practice before the real thing.",
  },
  {
    name: "1,500+ AI Tools",
    desc: "A curated bundle of AI tools, awarded to event winners for 6 months.",
  },
  {
    name: "Resource Persons",
    desc: "HackerRank engineers available for tech talks, workshops, and hackathon judging.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease },
  }),
};

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      strokeWidth="1"
      stroke="currentColor"
      className={cn("size-6 text-foreground/40", className)}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
}

function CornerPlusIcons() {
  return (
    <>
      <PlusIcon className="absolute -top-3 -left-3" />
      <PlusIcon className="absolute -top-3 -right-3" />
      <PlusIcon className="absolute -bottom-3 -left-3" />
      <PlusIcon className="absolute -bottom-3 -right-3" />
    </>
  );
}

function BentoCard({
  name,
  desc,
  className,
  index,
}: {
  name: string;
  desc: string;
  className?: string;
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(
        "group relative rounded-lg border border-dashed border-foreground/25 p-6 bg-card min-h-[180px]",
        "flex flex-col justify-between transition-all duration-300 hover:border-accent/40 hover:shadow-sm",
        className
      )}
    >
      <CornerPlusIcons />
      <div className="relative z-10 space-y-2">
        <h3 className="text-lg font-bold text-foreground">{name}</h3>
        <p className="text-base leading-[1.7] text-foreground/60">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function WhatYouGet() {
  return (
    <section className="px-6 py-20 sm:py-28 border-t border-border">
      <div className="max-w-[1080px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="text-2xl sm:text-3xl font-bold tracking-[-0.025em] leading-tight text-foreground"
        >
          What members get access to
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-3 text-lg text-foreground/60 leading-relaxed max-w-[520px]"
        >
          Platforms, rewards, and support designed to make it easy to run credible, valuable events.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-4">
          <BentoCard {...resources[0]} index={0} className="lg:col-span-3 lg:row-span-2" />
          <BentoCard {...resources[1]} index={1} className="lg:col-span-2 lg:row-span-2" />
          <BentoCard {...resources[2]} index={2} className="lg:col-span-4 lg:row-span-1" />
          <BentoCard {...resources[3]} index={3} className="lg:col-span-2 lg:row-span-1" />
          <BentoCard {...resources[4]} index={4} className="lg:col-span-2 lg:row-span-1" />
        </div>

        {/* Section footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="max-w-2xl ml-auto text-right px-4 mt-8 lg:-mt-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3 tracking-[-0.025em]">
            Real tools. Real support. Free access.
          </h2>
          <p className="text-foreground/50 text-base leading-relaxed">
            {resources[5].name} -{resources[5].desc}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
