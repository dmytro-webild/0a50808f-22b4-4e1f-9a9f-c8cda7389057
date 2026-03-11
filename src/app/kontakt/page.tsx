"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroSplitKpi from "@/components/sections/hero/HeroSplitKpi";
import MetricCardThree from "@/components/sections/metrics/MetricCardThree";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Shield, Clock, Calendar, Moon } from "lucide-react";

export default function ContactPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="largeSmall"
      background="circleGradient"
      cardStyle="gradient-radial"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="PIO-HYDROP"
          navItems={[
            { name: "Strona główna", id: "/" },
            { name: "Serwis", id: "/serwis" },
            { name: "Usługi", id: "/services" },
            { name: "Nasze certyfikaty", id: "/certyfikaty" },
          ]}
          button={{
            text: "Zadzwoń: 788 595 600",            href: "tel:788595600"}}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="Skontaktuj się z PIO-HYDROP"
          description="Gotowi odpowiedzieć na Twoje pytania dotyczące instalacji grzewczych, gazowych, hydraulicznych i odnawialnych źródłach energii. Zadzwoń, wyślij email lub wypełnij formularz poniżej."
          tag="Autoryzowany Partner Bosch Termotechnika"
          tagIcon={Shield}
          background={{ variant: "glowing-orb" }}
          kpis={[
            { value: "788 595 600", label: "Numer telefonu" },
            { value: "24/7", label: "Pomoc techniczna" },
            { value: "15+", label: "Lat doświadczenia" },
          ]}
          enableKpiAnimation={true}
          buttons={[{ text: "Zadzwoń teraz", href: "tel:788595600" }]}
          imageSrc="http://img.b2bpic.net/free-photo/man-drinking-hot-beverage-energy-crisis_23-2150061899.jpg?_wi=2"
          imageAlt="Profesjonalna instalacja grzewcza"
          mediaAnimation="slide-up"
          imagePosition="right"
          buttonAnimation="slide-up"
          tagAnimation="slide-up"
        />
      </div>

      <div id="hours" data-section="hours">
        <MetricCardThree
          title="Godziny pracy"
          description="Zawsze dostępni dla naszych klientów"
          metrics={[
            {
              id: "weekday",              icon: Clock,
              title: "Pon - Pt",              value: "08:00 - 18:00"},
            {
              id: "saturday",              icon: Calendar,
              title: "Sobota",              value: "08:00 - 16:00"},
            {
              id: "sunday",              icon: Moon,
              title: "Niedziela",              value: "Zamknięte"},
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          valueClassName="text-xs md:text-sm"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="PIO-HYDROP"
          leftLink={{
            text: "Polityka Prywatności",            href: "#"}}
          rightLink={{
            text: "Warunki Użytkowania",            href: "#"}}
        />
      </div>
    </ThemeProvider>
  );
}