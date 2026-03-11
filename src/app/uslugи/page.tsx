"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroSplitKpi from "@/components/sections/hero/HeroSplitKpi";
import FeatureCardNine from "@/components/sections/feature/FeatureCardNine";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Shield } from "lucide-react";

export default function ServicesPage() {
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
          title="Nasze usługi instalacyjne"
          description="Kompleksowa oferta dla każdych potrzeb grzewczych, gazowych i hydraulicznych"
          tag="Autoryzowany Partner Bosch Termotechnika"
          tagIcon={Shield}
          background={{ variant: "glowing-orb" }}
          kpis={[
            { value: "15+", label: "Lat doświadczenia" },
            { value: "500+", label: "Zadowolonych klientów" },
            { value: "24/7", label: "Pomoc techniczna" },
          ]}
          enableKpiAnimation={true}
          buttons={[{ text: "Zadzwoń teraz", href: "tel:788595600" }]}
          imageSrc="http://img.b2bpic.net/free-photo/man-drinking-hot-beverage-energy-crisis_23-2150061899.jpg?_wi=3"
          imageAlt="Profesjonalna instalacja grzewcza"
          mediaAnimation="slide-up"
          imagePosition="right"
          buttonAnimation="slide-up"
          tagAnimation="slide-up"
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
                  "http://img.b2bpic.net/free-photo/view-exposed-plumbing-pipes_23-2150990679.jpg?_wi=2",                imageAlt: "Instalacja grzewcza"},
              phoneTwo: {
                imageSrc:
                  "http://img.b2bpic.net/free-photo/close-up-person-near-heater_23-2149284074.jpg?_wi=3",                imageAlt: "System grzewczy"},
            },
            {
              id: 2,
              title: "Gazowe",              description:
                "Instalacja gazowa, montaż kotłów gazowych i przepływowych podgrzewaczy CWU. Usuwanie nieszczelności i przeglądy instalacji gazowych z certyfikacją.",              phoneOne: {
                imageSrc:
                  "http://img.b2bpic.net/free-photo/close-up-person-near-heater_23-2149284074.jpg?_wi=4",                imageAlt: "Instalacja gazowa"},
              phoneTwo: {
                imageSrc:
                  "http://img.b2bpic.net/free-photo/female-mechanic-smiling-while-repairing-car_1170-1227.jpg?_wi=3",                imageAlt: "Usługa gazowa"},
            },
            {
              id: 3,
              title: "Wodno-kanalizacyjne",              description:
                "Nowe instalacje wodne i kanalizacyjne, naprawa istniejących instalacji. Montaż wodomierzy, zasobników i przepływowych podgrzewaczy.",              phoneOne: {
                imageSrc:
                  "http://img.b2bpic.net/free-photo/female-mechanic-smiling-while-repairing-car_1170-1227.jpg?_wi=4",                imageAlt: "Instalacja wodna"},
              phoneTwo: {
                imageSrc:
                  "http://img.b2bpic.net/free-photo/man-worker-firld-by-solar-panels_1303-15560.jpg?_wi=3",                imageAlt: "Systemy odnawialne"},
            },
            {
              id: 4,
              title: "Odnawialne źródła energii",              description:
                "Kolektory słoneczne i zasobniki solarne. Rozwiązania ekologiczne zmniejszające koszty ogrzewania wody nawet o 60% i wspomagania centralnego ogrzewania o 30%.",              phoneOne: {
                imageSrc:
                  "http://img.b2bpic.net/free-photo/man-worker-firld-by-solar-panels_1303-15560.jpg?_wi=4",                imageAlt: "Systemy solarne"},
              phoneTwo: {
                imageSrc:
                  "http://img.b2bpic.net/free-photo/man-worker-firld-by-solar-panels_1303-15556.jpg?_wi=2",                imageAlt: "Panele słoneczne"},
            },
          ]}
          showStepNumbers={true}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
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