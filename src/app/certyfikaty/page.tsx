"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import BlogCardOne from "@/components/sections/blog/BlogCardOne";
import AboutMetric from "@/components/sections/about/AboutMetric";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Zap, Droplets, Flame, Wind } from "lucide-react";

export default function CertificatesPage() {
  const navItems = [
    { name: "Strona główna", id: "/" },
    { name: "Serwis", id: "/serwis" },
    { name: "Usługi", id: "/services" },
    { name: "Nasze certyfikaty", id: "/certyfikaty" },
  ];

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
          navItems={navItems}
          button={{
            text: "Zadzwoń: 788 595 600",            href: "tel:788595600"
          }}
          animateOnLoad={true}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="PIO-HYDROP buduje zaufanie klientów dzięki profesjonalnej obsłudze i autoryzowanemu serwisowi. Wieloletnie doświadczenie pozwala na fachowe doradztwo techniczne i estetyczny montaż urządzeń."
          metrics={[
            {
              icon: Zap,
              label: "Kotły gazowe",              value: "Bosch"
            },
            {
              icon: Droplets,
              label: "Zasobniki",              value: "Profesjonalne"
            },
            {
              icon: Flame,
              label: "Paliwa stałe",              value: "Ekogroszek"
            },
            {
              icon: Wind,
              label: "Systemy solarne",              value: "Odnawialne"
            },
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="certifications" data-section="certifications">
        <BlogCardOne
          blogs={[
            {
              id: "1",              category: "Certyfikat",              title: "Bosch Thermotechnika - Partner Autoryzowany",              excerpt: "Autoryzacja do instalacji i serwisu urządzeń grzewczych marki Bosch",              imageSrc: "http://img.b2bpic.net/free-photo/business-colleagues-with-papers_74855-1758.jpg?_wi=2",              imageAlt: "Certyfikat Bosch",              authorName: "PIO-HYDROP",              authorAvatar: "http://img.b2bpic.net/free-photo/electric-jigsaw-with-saw-wood-hands-carpenter_169016-52838.jpg",              date: "2024"
            },
            {
              id: "2",              category: "Uprawnienie",              title: "Certyfikat instalacji grzewczych",              excerpt: "Uprawnienia do montażu i naprawy systemów grzewczych i CO",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-working-as-plumber_23-2150746293.jpg?_wi=2",              imageAlt: "Certyfikat instalacji grzewczych",              authorName: "PIO-HYDROP",              authorAvatar: "http://img.b2bpic.net/free-photo/electric-jigsaw-with-saw-wood-hands-carpenter_169016-52838.jpg",              date: "2024"
            },
            {
              id: "3",              category: "Uprawnienie",              title: "Certyfikat instalacji gazowych",              excerpt: "Uprawnienia do montażu i przeglądu instalacji gazowych",              imageSrc: "http://img.b2bpic.net/free-photo/auto-repairmen-cooperating-while-working-laptop-car-service-workshop_637285-9428.jpg?_wi=2",              imageAlt: "Certyfikat instalacji gazowych",              authorName: "PIO-HYDROP",              authorAvatar: "http://img.b2bpic.net/free-photo/electric-jigsaw-with-saw-wood-hands-carpenter_169016-52838.jpg",              date: "2024"
            },
            {
              id: "4",              category: "Uprawnienie",              title: "Certyfikat instalacji hydraulicznych",              excerpt: "Uprawnienia do montażu systemów wodno-kanalizacyjnych",              imageSrc: "http://img.b2bpic.net/free-photo/distraught-auto-repairman-talking-his-manager-about-problematic-reports-workshop_637285-7578.jpg?_wi=2",              imageAlt: "Certyfikat instalacji hydraulicznych",              authorName: "PIO-HYDROP",              authorAvatar: "http://img.b2bpic.net/free-photo/electric-jigsaw-with-saw-wood-hands-carpenter_169016-52838.jpg",              date: "2024"
            },
            {
              id: "5",              category: "Certyfikat",              title: "Certyfikat 5",              excerpt: "Opis certyfikatu 5",              imageSrc: "http://img.b2bpic.net/free-photo/business-colleagues-with-papers_74855-1758.jpg?_wi=2",              imageAlt: "Certyfikat 5",              authorName: "PIO-HYDROP",              authorAvatar: "http://img.b2bpic.net/free-photo/electric-jigsaw-with-saw-wood-hands-carpenter_169016-52838.jpg",              date: "2024"
            },
            {
              id: "6",              category: "Uprawnienie",              title: "Certyfikat 6",              excerpt: "Opis certyfikatu 6",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-working-as-plumber_23-2150746293.jpg?_wi=2",              imageAlt: "Certyfikat 6",              authorName: "PIO-HYDROP",              authorAvatar: "http://img.b2bpic.net/free-photo/electric-jigsaw-with-saw-wood-hands-carpenter_169016-52838.jpg",              date: "2024"
            },
            {
              id: "7",              category: "Uprawnienie",              title: "Certyfikat 7",              excerpt: "Opis certyfikatu 7",              imageSrc: "http://img.b2bpic.net/free-photo/auto-repairmen-cooperating-while-working-laptop-car-service-workshop_637285-9428.jpg?_wi=2",              imageAlt: "Certyfikat 7",              authorName: "PIO-HYDROP",              authorAvatar: "http://img.b2bpic.net/free-photo/electric-jigsaw-with-saw-wood-hands-carpenter_169016-52838.jpg",              date: "2024"
            },
            {
              id: "8",              category: "Certyfikat",              title: "Certyfikat 8",              excerpt: "Opis certyfikatu 8",              imageSrc: "http://img.b2bpic.net/free-photo/distraught-auto-repairman-talking-his-manager-about-problematic-reports-workshop_637285-7578.jpg?_wi=2",              imageAlt: "Certyfikat 8",              authorName: "PIO-HYDROP",              authorAvatar: "http://img.b2bpic.net/free-photo/electric-jigsaw-with-saw-wood-hands-carpenter_169016-52838.jpg",              date: "2024"
            },
            {
              id: "9",              category: "Uprawnienie",              title: "Certyfikat 9",              excerpt: "Opis certyfikatu 9",              imageSrc: "http://img.b2bpic.net/free-photo/business-colleagues-with-papers_74855-1758.jpg?_wi=2",              imageAlt: "Certyfikat 9",              authorName: "PIO-HYDROP",              authorAvatar: "http://img.b2bpic.net/free-photo/electric-jigsaw-with-saw-wood-hands-carpenter_169016-52838.jpg",              date: "2024"
            },
            {
              id: "10",              category: "Certyfikat",              title: "Certyfikat 10",              excerpt: "Opis certyfikatu 10",              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-working-as-plumber_23-2150746293.jpg?_wi=2",              imageAlt: "Certyfikat 10",              authorName: "PIO-HYDROP",              authorAvatar: "http://img.b2bpic.net/free-photo/electric-jigsaw-with-saw-wood-hands-carpenter_169016-52838.jpg",              date: "2024"
            },
            {
              id: "11",              category: "Uprawnienie",              title: "Certyfikat 11",              excerpt: "Opis certyfikatu 11",              imageSrc: "http://img.b2bpic.net/free-photo/auto-repairmen-cooperating-while-working-laptop-car-service-workshop_637285-9428.jpg?_wi=2",              imageAlt: "Certyfikat 11",              authorName: "PIO-HYDROP",              authorAvatar: "http://img.b2bpic.net/free-photo/electric-jigsaw-with-saw-wood-hands-carpenter_169016-52838.jpg",              date: "2024"
            },
            {
              id: "12",              category: "Uprawnienie",              title: "Certyfikat 12",              excerpt: "Opis certyfikatu 12",              imageSrc: "http://img.b2bpic.net/free-photo/distraught-auto-repairman-talking-his-manager-about-problematic-reports-workshop_637285-7578.jpg?_wi=2",              imageAlt: "Certyfikat 12",              authorName: "PIO-HYDROP",              authorAvatar: "http://img.b2bpic.net/free-photo/electric-jigsaw-with-saw-wood-hands-carpenter_169016-52838.jpg",              date: "2024"
            }
          ]}
          title="Nasze certyfikaty i uprawnienia"
          description="Firma posiada certyfikaty i uprawnienia potwierdzające kwalifikacje w zakresie instalacji grzewczych, gazowych i hydraulicznych."
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          carouselMode="buttons"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="PIO-HYDROP"
          leftLink={{ text: "Polityka Prywatności", href: "#" }}
          rightLink={{ text: "Warunki Użytkowania", href: "#" }}
        />
      </div>
    </ThemeProvider>
  );
}