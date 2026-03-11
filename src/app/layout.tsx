import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PIO-HYDROP | Instalacje grzewcze, gazowe i hydrauliczne",
  description: "Profesjonalne instalacje grzewcze, gazowe i hydrauliczne. Autoryzowany partner Bosch Thermotechnika. Serwis 24/7 dla Mińska Mazowieckiego.",
  keywords: "instalacje grzewcze, instalacje gazowe, hydraulika, serwis grzewczy, Bosch, Mińsk Mazowiecki",
  openGraph: {
    title: "PIO-HYDROP | Profesjonalne Instalacje",
    description: "Kompleksowe usługi instalacyjne grzewczych, gazowych i hydraulicznych. Partner Bosch Thermotechnika.",
    siteName: "PIO-HYDROP",
    type: "website",
    images: [
      {
        url: "http://img.b2bpic.net/free-photo/man-drinking-hot-beverage-energy-crisis_23-2150061899.jpg",
        alt: "PIO-HYDROP profesjonalne instalacje"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "PIO-HYDROP | Instalacje Grzewcze",
    description: "Profesjonalne usługi instalacyjne dla domów i firm",
    images: ["http://img.b2bpic.net/free-photo/man-drinking-hot-beverage-energy-crisis_23-2150061899.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} ${sourceSans3.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}