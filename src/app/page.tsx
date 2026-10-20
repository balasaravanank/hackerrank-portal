import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIsCrew from "@/components/WhatIsCrew";
import WhatYouGet from "@/components/WhatYouGet";
import Events from "@/components/Events";
import FAQ from "@/components/FAQ";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatIsCrew />
      <WhatYouGet />
      <Events />
      <FAQ />
      <WaitlistForm />
      <Footer />
    </>
  );
}
