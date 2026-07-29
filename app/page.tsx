import { site } from "@/content/site";

import { About } from "@/components/About";
import { Course } from "@/components/Course";
import { FaqList } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Problem } from "@/components/Problem";
import { Section } from "@/components/Section";
import { Solution } from "@/components/Solution";
import { Testimonials } from "@/components/Testimonials";
import { WhyThisWorks } from "@/components/WhyThisWorks";

export default function Page() {
  return (
    <main id="main">
      <Hero />
      <Problem />
      <Solution />
      <Course />
      <WhyThisWorks />
      <About />
      <Testimonials />
      <Pricing />
      <Section id="faq" heading={site.faq.heading}>
        <FaqList />
      </Section>
      <FinalCta />
    </main>
  );
}
