"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroSplitKpi from "@/components/sections/hero/HeroSplitKpi";
import MetricCardThree from "@/components/sections/metrics/MetricCardThree";
import AboutMetric from "@/components/sections/about/AboutMetric";
import FeatureCardNine from "@/components/sections/feature/FeatureCardNine";
import BlogCardOne from "@/components/sections/blog/BlogCardOne";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import {
  Shield,
  Clock,
  Calendar,
  Moon,
  Zap,
  Droplets,
  Flame,
  Wind,
  Phone,
} from "lucide-react";

const navItems = [
  { name: "Strona główna", id: "/" },
  { name: "Serwis", id: "/serwis" },
  { name: "Usługi", id: "/services" },
  { name: "Nasze certyfikaty", id: "/certificates" },
  { name: "Kontakt", id: "/contact" },
];

export default function HomePage() {
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
            { name: "Nasze certyfikaty", id: "/certificates" },
          ]}
          button={{
            text: "Zadzwoń: 788 595 600",            href: "tel:788595600"}}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          title="Profesjonalne instalacje grzewcze, gazowe i hydrauliczne"
          description="Firma PIO-HYDROP oferuje kompleksowe usługi instalacyjne dla domów jedno- i wielorodzinnych oraz firm. Specjalizujemy się w instalacjach grzewczych, gazowych, wodno-kanalizacyjnych oraz odnawialnych źródłach energii. Naszym priorytetem jest zadowolenie klienta i wysoka jakość usług."
          tag="Autoryzowany Partner Bosch Termotechnika"
          tagIcon={Shield}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          kpis={[
            { value: "15+", label: "Lat doświadczenia" },
            { value: "500+", label: "Zadowolonych klientów" },
            { value: "24/7", label: "Pomoc techniczna" },
          ]}
          enableKpiAnimation={true}
          buttons={[{ text: "Zadzwoń teraz", href: "tel:788595600" }]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AoCNtx7MJ2lPRxPrXpDU1XjnGp/uploaded-1773250554038-1eafreat.webp"
          imageAlt="Profesjonalna instalacja grzewcza"
          mediaAnimation="slide-up"
          imagePosition="right"
          buttonAnimation="slide-up"
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
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="PIO-HYDROP buduje zaufanie klientów dzięki profesjonalnej obsłudze i autoryzowanemu serwisowi. Wieloletnie doświadczenie pozwala na fachowe doradztwo techniczne i estetyczny montaż urządzeń."
          metrics={[
            {
              icon: Zap,
              label: "Kotły gazowe",              value: "Bosch"},
            {
              icon: Droplets,
              label: "Zasobniki",              value: "Profesjonalne"},
            {
              icon: Flame,
              label: "Paliwa stałe",              value: "Ekogroszek"},
            {
              icon: Wind,
              label: "Systemy solarne",              value: "Odnawialne"},
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="services-overview" data-section="services-overview">
        <FeatureCardNine
          title="Nasze usługi instalacyjne"
          description="Kompleksowa oferta dla każdych potrzeb grzewczych, gazowych i hydraulicznych"
          features={[
            {
              id: 1,
              title: "Grzewcze",              description:
                "Montaż kotłów CO, grzejników, ogrzewania podłogowego, pomp ciepła i kolektorów. Budowa dużych kotłowni z kaskadą kotłów oraz modernizacja systemów grzewczych.",              phoneOne: {
                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AoCNtx7MJ2lPRxPrXpDU1XjnGp/uploaded-1773250601198-6ch5m3ws.webp",                imageAlt: "Instalacja grzewcza"},
              phoneTwo: {
                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AoCNtx7MJ2lPRxPrXpDU1XjnGp/uploaded-1773250610220-7l7n6ghi.jpg",                imageAlt: "System grzewczy"},
            },
            {
              id: 2,
              title: "Gazowe",              description:
                "Instalacja gazowa, montaż kotłów gazowych i przepływowych podgrzewaczy CWU. Usuwanie nieszczelności i przeglądy instalacji gazowych z certyfikacją.",              phoneOne: {
                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AoCNtx7MJ2lPRxPrXpDU1XjnGp/uploaded-1773250625728-5n2x8r8p.jpg",                imageAlt: "Instalacja gazowa"},
              phoneTwo: {
                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AoCNtx7MJ2lPRxPrXpDU1XjnGp/uploaded-1773250636319-q3m6tvwy.webp",                imageAlt: "Usługa gazowa"},
            },
            {
              id: 3,
              title: "Wodno-kanalizacyjne",              description:
                "Nowe instalacje wodne i kanalizacyjne, naprawa istniejących instalacji. Montaż wodomierzy, zasobników i przepływowych podgrzewaczy.",              phoneOne: {
                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AoCNtx7MJ2lPRxPrXpDU1XjnGp/uploaded-1773250647710-l276o6ma.jpg",                imageAlt: "Instalacja wodna"},
              phoneTwo: {
                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AoCNtx7MJ2lPRxPrXpDU1XjnGp/uploaded-1773250659047-0fqm2wic.jpg",                imageAlt: "Systemy odnawialne"},
            },
            {
              id: 4,
              title: "Odnawialne źródła energii",              description:
                "Kolektory słoneczne i zasobniki solarne. Rozwiązania ekologiczne zmniejszające koszty ogrzewania wody nawet o 60% i wspomagania centralnego ogrzewania o 30%.",              phoneOne: {
                imageSrc:
                  "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AoCNtx7MJ2lPRxPrXpDU1XjnGp/uploaded-1773250684617-zsswpqdy.jpg",                imageAlt: "Systemy solarne"},
              phoneTwo: {
                imageSrc:
                  "http://img.b2bpic.net/free-photo/man-worker-firld-by-solar-panels_1303-15556.jpg?_wi=1",                imageAlt: "Panele słoneczne"},
            },
          ]}
          showStepNumbers={true}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
        />
      </div>

      <div id="certifications" data-section="certifications">
        <BlogCardOne
          title="Nasze certyfikaty i uprawnienia"
          description="Firma posiada certyfikaty i uprawnienia potwierdzające kwalifikacje w zakresie instalacji grzewczych, gazowych i hydraulicznych."
          blogs={[
            {
              id: "1",              category: "Certyfikat",              title: "Bosch Thermotechnika - Partner Autoryzowany",              excerpt:
                "Autoryzacja do instalacji i serwisu urządzeń grzewczych marki Bosch",              imageSrc:
                "http://img.b2bpic.net/free-photo/business-colleagues-with-papers_74855-1758.jpg",              imageAlt: "Certyfikat Bosch",              authorName: "PIO-HYDROP",              authorAvatar:
                "http://img.b2bpic.net/free-photo/electric-jigsaw-with-saw-wood-hands-carpenter_169016-52838.jpg",              date: "2024"},
            {
              id: "2",              category: "Uprawnienie",              title: "Certyfikat instalacji grzewczych",              excerpt: "Uprawnienia do montażu i naprawy systemów grzewczych i CO",              imageSrc:
                "http://img.b2bpic.net/free-photo/medium-shot-man-working-as-plumber_23-2150746293.jpg",              imageAlt: "Certyfikat instalacji grzewczych",              authorName: "PIO-HYDROP",              authorAvatar:
                "http://img.b2bpic.net/free-photo/electric-jigsaw-with-saw-wood-hands-carpenter_169016-52838.jpg",              date: "2024"},
            {
              id: "3",              category: "Uprawnienie",              title: "Certyfikat instalacji gazowych",              excerpt: "Uprawnienia do montażu i przeglądu instalacji gazowych",              imageSrc:
                "http://img.b2bpic.net/free-photo/auto-repairmen-cooperating-while-working-laptop-car-service-workshop_637285-9428.jpg",              imageAlt: "Certyfikat instalacji gazowych",              authorName: "PIO-HYDROP",              authorAvatar:
                "http://img.b2bpic.net/free-photo/electric-jigsaw-with-saw-wood-hands-carpenter_169016-52838.jpg",              date: "2024"},
            {
              id: "4",              category: "Uprawnienie",              title: "Certyfikat instalacji hydraulicznych",              excerpt: "Uprawnienia do montażu systemów wodno-kanalizacyjnych",              imageSrc:
                "http://img.b2bpic.net/free-photo/distraught-auto-repairman-talking-his-manager-about-problematic-reports-workshop_637285-7578.jpg",              imageAlt: "Certyfikat instalacji hydraulicznych",              authorName: "PIO-HYDROP",              authorAvatar:
                "http://img.b2bpic.net/free-photo/electric-jigsaw-with-saw-wood-hands-carpenter_169016-52838.jpg",              date: "2024"},
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Kontakt"
          title="Skontaktuj się z nami"
          description="Masz pytania? Zadzwoń do nas lub wyślij wiadomość. Jesteśmy zawsze gotowi pomóc w rozwiązaniu Twoich potrzeb grzewczych i hydraulicznych."
          tagIcon={Phone}
          tagAnimation="slide-up"
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
            text: "Polityka Prywatności",            href: "/privacy"}}
          rightLink={{
            text: "Warunki Użytkowania",            href: "/terms"}}
        />
      </div>
    </ThemeProvider>
  );
}