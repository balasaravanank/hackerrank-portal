"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
      <div className="max-w-[1080px] mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <Image
            src="/hackerrank-logo.svg"
            alt="HackerRank"
            width={140}
            height={16}
            priority
          />
          <span className="w-px h-4 bg-border hidden sm:block" />
          <span className="text-sm text-muted hidden sm:block">Campus Crew</span>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/saveetha-logo.webp"
            alt="Saveetha Engineering College"
            width={180}
            height={40}
            className="h-10 w-auto object-contain hidden sm:block"
          />
          <a
            href="#waitlist"
            className="h-9 px-5 rounded-full bg-accent text-white text-sm font-medium flex items-center cursor-pointer transition-colors duration-150 hover:bg-accent-hover active:scale-[0.97]"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
}
