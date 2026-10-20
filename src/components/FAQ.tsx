"use client";

import { motion } from "framer-motion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "1",
    q: "What exactly is HackerRank Campus Crew?",
    a: "It's a global community of student ambassadors who bring HackerRank's coding competitions, career tools, and industry connections directly to their campuses. Think of it as your bridge between college and real tech hiring.",
  },
  {
    id: "2",
    q: "Who can join?",
    a: "Any student currently enrolled at Saveetha Engineering College — any year, any department. Whether you're a competitive programmer or just getting started, there's a place for you.",
  },
  {
    id: "3",
    q: "Is there a cost to participate?",
    a: "No. Everything — the platform access, tools, competitions, certifications, and premium subscriptions for winners — is provided free through HackerRank.",
  },
  {
    id: "4",
    q: "What kind of events will you run?",
    a: "Monthly coding contests, hackathons, workshops on DSA and web development, tech talks with HackerRank engineers, AI-powered mock interviews, and inter-college competitions.",
  },
  {
    id: "5",
    q: "What do I get by joining the waitlist now?",
    a: "Priority access when we officially launch, early invitations to our first events, and a spot in the founding group of Campus Crew members at Saveetha.",
  },
  {
    id: "6",
    q: "When does Campus Crew launch at Saveetha?",
    a: "Very soon. Waitlist members will be the first to know — we'll notify you by email the moment we go live.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function FAQ() {
  return (
    <section className="px-6 py-20 sm:py-28 border-t border-border">
      <div className="max-w-[680px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="text-2xl sm:text-3xl font-bold tracking-[-0.025em] leading-tight text-foreground text-center"
        >
          Frequently asked questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-3 text-lg text-foreground/60 leading-relaxed text-center"
        >
          Everything you need to know about Campus Crew at Saveetha.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease }}
          className="mt-10"
        >
          <Accordion type="single" collapsible className="w-full" defaultValue="1">
            {faqs.map((faq) => (
              <AccordionItem value={faq.id} key={faq.id} className="py-2">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-base font-semibold leading-7 transition-all hover:text-accent [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                    {faq.q}
                    <Plus
                      size={16}
                      strokeWidth={2}
                      className="shrink-0 opacity-60 transition-transform duration-200"
                      aria-hidden="true"
                    />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="pb-2 text-base text-muted-foreground leading-[1.7]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
