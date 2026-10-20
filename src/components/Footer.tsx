"use client";

import HalftoneWordmarkFooter from "@/components/ui/halftone-wordmark-footer";

export default function Footer() {
  return (
    <HalftoneWordmarkFooter
      wordmark={"HackerRank\ncampus crew"}
      label="HackerRank Campus Crew"
      meta="©2025 · Saveetha Engineering College"
      columns={[
        {
          title: "Platform",
          links: [
            { label: "HackerRank", href: "https://www.hackerrank.com" },
            { label: "SkillUp", href: "https://www.hackerrank.com/skills-verification" },
            { label: "Certifications", href: "https://www.hackerrank.com/skills-verification" },
          ],
        },
        {
          title: "Community",
          links: [
            { label: "WhatsApp Group", href: "https://chat.whatsapp.com/Jny6C3ko5MgHo1ENB5ddKj" },
          ],
        },
        {
          title: "College",
          links: [
            { label: "Saveetha SEC", href: "https://www.saveetha.ac.in" },
            { label: "Join Waitlist", href: "#waitlist" },
          ],
        },
      ]}
      backToTop
      preset="night"
      palette={{ background: "#141419", ink: "#e9e4da", warm: "#05C770" }}
      height="600px"
      crop={0.15}
      dotGap={6}
      radius={90}
      grain={0.4}
      fontFamily='"Inter", "Inter Variable", system-ui, sans-serif'
      monoFamily='"Inter", "Inter Variable", system-ui, sans-serif'
    />
  );
}
