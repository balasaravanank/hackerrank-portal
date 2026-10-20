"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const leaders = [
  {
    name: "Bala Saravanan K",
    initials: "BS",
    role: "Campus Co-Lead",
    linkedin: "https://www.linkedin.com/in/bala-saravanan-k/",
  },
  {
    name: "Rakesh Sivan S",
    initials: "RS",
    role: "Campus Co-Lead",
    linkedin: "https://www.linkedin.com/in/rakesh-sivan-s/",
  },
];

export default function CrewLeads() {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-[720px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10"
        >
          Meet the Crew Leads
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {leaders.map((leader, i) => (
            <motion.a
              key={leader.name}
              href={leader.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="group block rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-accent/30 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="size-14 rounded-full bg-accent/10 flex items-center justify-center shrink-0 transition-colors duration-200 group-hover:bg-accent/20">
                  <span className="text-lg font-bold text-accent">{leader.initials}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-base font-semibold text-foreground truncate group-hover:text-accent transition-colors duration-200">
                    {leader.name}
                  </p>
                  <p className="text-sm text-foreground/40 mt-0.5">{leader.role}</p>
                </div>
                <svg
                  className="size-5 shrink-0 text-foreground/15 transition-colors duration-200 group-hover:text-accent"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.a
          href="https://chat.whatsapp.com/Jny6C3ko5MgHo1ENB5ddKj"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="group flex items-center justify-center gap-3 rounded-xl border border-accent/20 bg-accent/[0.05] p-4 mt-4 text-sm font-medium text-accent transition-all duration-200 hover:bg-accent/10 hover:border-accent/30"
        >
          <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Join the WhatsApp group
        </motion.a>
      </div>
    </section>
  );
}
