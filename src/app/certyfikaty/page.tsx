"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
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
      contentWidth="mediumLarge"
      sizing="largeSizeMediumTitles"
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
        <div className="w-full py-16 md:py-24 px-4 md:px-0 bg-gradient-to-br from-background to-card rounded-lg">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Nasze certyfikaty i uprawnienia</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">Firma posiada certyfikaty i uprawnienia potwierdzające kwalifikacje w zakresie instalacji grzewczych, gazowych i hydraulicznych.</p>
            </div>

            {/* 12 Certificate Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Certificate 1 */}
              <div className="bg-card border border-accent/10 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-primary-cta/10 to-primary-cta/5 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">📜</div>
                    <p className="text-sm text-foreground/60">Certyfikat Bosch</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Bosch Thermotechnika</h3>
                <p className="text-foreground/70 text-sm">Autoryzacja do instalacji i serwisu urządzeń grzewczych marki Bosch.</p>
              </div>

              {/* Certificate 2 */}
              <div className="bg-card border border-accent/10 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-primary-cta/10 to-primary-cta/5 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">🔥</div>
                    <p className="text-sm text-foreground/60">Uprawnienie</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Instalacje grzewcze</h3>
                <p className="text-foreground/70 text-sm">Uprawnienia do montażu i naprawy systemów grzewczych i CO.</p>
              </div>

              {/* Certificate 3 */}
              <div className="bg-card border border-accent/10 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-primary-cta/10 to-primary-cta/5 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">⚙️</div>
                    <p className="text-sm text-foreground/60">Uprawnienie</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Instalacje gazowe</h3>
                <p className="text-foreground/70 text-sm">Uprawnienia do montażu i przeglądu instalacji gazowych.</p>
              </div>

              {/* Certificate 4 */}
              <div className="bg-card border border-accent/10 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-primary-cta/10 to-primary-cta/5 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">💧</div>
                    <p className="text-sm text-foreground/60">Uprawnienie</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Instalacje hydrauliczne</h3>
                <p className="text-foreground/70 text-sm">Uprawnienia do montażu systemów wodno-kanalizacyjnych.</p>
              </div>

              {/* Certificate 5 */}
              <div className="bg-card border border-accent/10 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-primary-cta/10 to-primary-cta/5 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">☀️</div>
                    <p className="text-sm text-foreground/60">Uprawnienie</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Systemy solarne</h3>
                <p className="text-foreground/70 text-sm">Certyfikat do montażu i uruchamiania instalacji kolektorów słonecznych.</p>
              </div>

              {/* Certificate 6 */}
              <div className="bg-card border border-accent/10 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-primary-cta/10 to-primary-cta/5 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">❄️</div>
                    <p className="text-sm text-foreground/60">Uprawnienie</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Pompy ciepła</h3>
                <p className="text-foreground/70 text-sm">Szkolenie zaawansowane w doboru, montażu i uruchamianiu pomp ciepła.</p>
              </div>

              {/* Certificate 7 */}
              <div className="bg-card border border-accent/10 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-primary-cta/10 to-primary-cta/5 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">🏢</div>
                    <p className="text-sm text-foreground/60">Certyfikat</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">UDT dla Przedsiębiorców</h3>
                <p className="text-foreground/70 text-sm">Certyfikat z Urzędu Dozoru Technicznego dla wykonawców prac.</p>
              </div>

              {/* Certificate 8 */}
              <div className="bg-card border border-accent/10 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-primary-cta/10 to-primary-cta/5 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">⚡</div>
                    <p className="text-sm text-foreground/60">Uprawnienie</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Instalacje elektryczne</h3>
                <p className="text-foreground/70 text-sm">Oświadczenie instalatora z uprawnieniami elektrycznymi i gazowymi.</p>
              </div>

              {/* Certificate 9 */}
              <div className="bg-card border border-accent/10 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-primary-cta/10 to-primary-cta/5 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">🔬</div>
                    <p className="text-sm text-foreground/60">Uprawnienie</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Analizator spalin</h3>
                <p className="text-foreground/70 text-sm">Uprawnienia do przeprowadzania pomiarów spalin urządzeń grzewczych.</p>
              </div>

              {/* Certificate 10 */}
              <div className="bg-card border border-accent/10 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-primary-cta/10 to-primary-cta/5 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">📋</div>
                    <p className="text-sm text-foreground/60">Certyfikat</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Przeglądy okresowe</h3>
                <p className="text-foreground/70 text-sm">Uprawnienia do przeprowadzania przeglądów okresowych urządzeń grzewczych.</p>
              </div>

              {/* Certificate 11 */}
              <div className="bg-card border border-accent/10 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-primary-cta/10 to-primary-cta/5 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">🛠️</div>
                    <p className="text-sm text-foreground/60">Uprawnienie</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Serwis specjalistyczny</h3>
                <p className="text-foreground/70 text-sm">Certyfikat do wykonywania prac serwisowych i konserwacyjnych.</p>
              </div>

              {/* Certificate 12 */}
              <div className="bg-card border border-accent/10 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-primary-cta/10 to-primary-cta/5 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">✓</div>
                    <p className="text-sm text-foreground/60">Uprawnienie</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Gwarancja jakości</h3>
                <p className="text-foreground/70 text-sm">Poświadczenie profesjonalizmu i gwarancji jakości wszystkich usług.</p>
              </div>
            </div>
          </div>
        </div>
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