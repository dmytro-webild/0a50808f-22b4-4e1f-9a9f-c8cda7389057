"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import MetricCardThree from "@/components/sections/metrics/MetricCardThree";
import BlogCardOne from "@/components/sections/blog/BlogCardOne";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import {
  Wrench,
  Clock,
  Hammer,
  CheckCircle,
} from "lucide-react";

export default function ServicePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="largeSmall"
      background="blurBottom"
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

      <div id="service-features" data-section="service-features">
        <MetricCardThree
          title="Usługi serwisowe"
          description="Pełna gama usług serwisowych dla systemów grzewczych, gazowych i hydraulicznych"
          metrics={[
            {
              id: "inspection",              icon: CheckCircle,
              title: "Przeglądy",              value: "Regularne"},
            {
              id: "repair",              icon: Wrench,
              title: "Naprawy",              value: "Awaryjne"},
            {
              id: "maintenance",              icon: Hammer,
              title: "Konserwacja",              value: "Ciągła"},
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="service-offerings" data-section="service-offerings">
        <BlogCardOne
          title="Oferowane usługi"
          description="Kompleksowy zakres serwisu i obsługi systemów instalacyjnych"
          blogs={[
            {
              id: "1",              category: "Serwis",              title: "Przeglądy okresowe",              excerpt: "Konserwacja i przeglądy systemów grzewczych i gazowych z certyfikacją",              imageSrc:
                "http://img.b2bpic.net/free-photo/view-exposed-plumbing-pipes_23-2150990679.jpg?_wi=2",              imageAlt: "Przeglądy systemów",              authorName: "PIO-HYDROP",              authorAvatar:
                "http://img.b2bpic.net/free-photo/electric-jigsaw-with-saw-wood-hands-carpenter_169016-52838.jpg",              date: "2024"},
            {
              id: "2",              category: "Serwis",              title: "Naprawy awaryjne",              excerpt: "Szybka react na awarie - serwis 24/7 dla pilnych spraw",              imageSrc:
                "http://img.b2bpic.net/free-photo/close-up-person-near-heater_23-2149284074.jpg?_wi=3",              imageAlt: "Naprawy awaryjne",              authorName: "PIO-HYDROP",              authorAvatar:
                "http://img.b2bpic.net/free-photo/electric-jigsaw-with-saw-wood-hands-carpenter_169016-52838.jpg",              date: "2024"},
            {
              id: "3",              category: "Serwis",              title: "Modernizacja systemów",              excerpt: "Ulepszanie istniejących systemów grzewczych i hydraulicznych",              imageSrc:
                "http://img.b2bpic.net/free-photo/female-mechanic-smiling-while-repairing-car_1170-1227.jpg?_wi=3",              imageAlt: "Modernizacja systemów",              authorName: "PIO-HYDROP",              authorAvatar:
                "http://img.b2bpic.net/free-photo/electric-jigsaw-with-saw-wood-hands-carpenter_169016-52838.jpg",              date: "2024"},
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
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