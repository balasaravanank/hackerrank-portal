"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
      <div className="max-w-[1080px] mx-auto px-6 flex items-center justify-between h-20">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-5 cursor-pointer">
          <Image
            src="/hackerrank-logo.svg"
            alt="HackerRank"
            width={160}
            height={20}
            priority
          />
          <span className="w-px h-5 bg-border hidden sm:block" />
          <span className="text-base text-muted font-medium hidden sm:block">Campus Crew</span>
        </a>
        <div className="flex items-center gap-5">
          <Image
            src="/saveetha-logo.png"
            alt="Saveetha Engineering College"
            width={240}
            height={52}
            className="h-12 w-auto object-contain hidden sm:block"
          />
          <button
            type="button"
            onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
            className="h-11 px-6 rounded-full bg-accent text-white text-base font-medium flex items-center cursor-pointer transition-colors duration-150 hover:bg-accent-hover active:scale-[0.97]"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
}
