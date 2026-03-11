"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroSplitKpi from "@/components/sections/hero/HeroSplitKpi";
import MetricCardThree from "@/components/sections/metrics/MetricCardThree";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import Link from "next/link";
import { Shield, Clock, Calendar, Moon, Phone } from "lucide-react";

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
            { name: "Strona główna", id: "home" },
            { name: "Serwis", id: "service" },
            { name: "Usługi", id: "services" },
            { name: "Nasze certyfikaty", id: "certificates" },
            { name: "Kontakt", id: "contact" }
          ]}
          button={{
            text: "Zadzwoń: 788 595 600",            href: "tel:788595600"
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="Skontaktuj się z PIO-HYDROP"
          description="Gotowi odpowiedzieć na Twoje pytania dotyczące instalacji grzewczych, gazowych, hydraulicznych i odnawialnych źródeł energii. Zadzwoń, wyślij email lub wypełnij formularz poniżej."
          tag="Autoryzowany Partner Bosch Termotechnika"
          tagIcon={Shield}
          background={{ variant: "glowing-orb" }}
          kpis={[
            { value: "788 595 600", label: "Numer telefonu" },
            { value: "24/7", label: "Pomoc techniczna" },
            { value: "15+", label: "Lat doświadczenia" }
          ]}
          enableKpiAnimation={true}
          buttons={[
            { text: "Zadzwoń teraz", href: "tel:788595600" }
          ]}
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
              title: "Pon - Pt",              value: "08:00 - 18:00"
            },
            {
              id: "saturday",              icon: Calendar,
              title: "Sobota",              value: "08:00 - 16:00"
            },
            {
              id: "sunday",              icon: Moon,
              title: "Niedziela",              value: "Zamknięte"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Kontakt"
          title="Skontaktuj się z nami"
          description="Masz pytania? Zadzwoń do nas lub wyślij wiadomość. Jesteśmy zawsze gotowi pomóc w rozwiązaniu Twoich potrzeb grzewczych i hydraulicznych."
          tagIcon={Phone}
          background={{ variant: "rotated-rays-animated" }}
          useInvertedBackground={false}
          inputPlaceholder="Twój email"
          buttonText="Wyślij"
          termsText="Zgadzasz się z naszą polityką prywatności. Możesz się wypisać w każdej chwili."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="PIO-HYDROP"
          leftLink={{
            text: "Polityka Prywatności",            href: "#"
          }}
          rightLink={{
            text: "Warunki Użytkowania",            href: "#"
          }}
        />
      </div>
    </ThemeProvider>
  );
}