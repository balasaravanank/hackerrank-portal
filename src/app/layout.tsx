import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HackerRank Campus Crew -Saveetha Engineering College",
  description:
    "HackerRank's campus ambassador program at Saveetha Engineering College. Coding contests, hackathons, workshops, and career resources. Join the waitlist.",
  icons: {
    icon: "/hackerrank-icon.png",
    apple: "/hackerrank-icon.png",
  },
  openGraph: {
    title: "HackerRank Campus Crew -Saveetha Engineering College",
    description:
      "Coding contests, hackathons, workshops, and career resources. Join the waitlist.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="icon" href="/hackerrank-icon.png" type="image/png" />
        <link rel="shortcut icon" href="/hackerrank-icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/hackerrank-icon.png" />
        <script dangerouslySetInnerHTML={{ __html: `if(window.location.hash){history.replaceState(null,"",window.location.pathname);window.scrollTo(0,0);}` }} />
      </head>
      <body className="bg-background text-foreground font-sans">{children}</body>
    </html>
  );
}
