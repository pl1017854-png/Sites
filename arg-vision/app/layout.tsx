import type { Metadata } from "next";
import { Cinzel_Decorative, Lora } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel_Decorative({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cinzel",
});

const lora = Lora({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "ARG Vision — Websites Premium para Negócios Locais | Itu/SP",
  description:
    "Agência de websites premium de Itu/SP. Sites cinematográficos que transformam visitantes em clientes. Site Premium R$797, Landing Page Pro R$1.497, Completo R$2.497. Fale pelo WhatsApp.",
  openGraph: {
    title: "ARG Vision — Websites Premium",
    description:
      "Seu negócio merece mais que um perfil no Instagram. Websites cinematográficos que convertem.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${cinzel.variable} ${lora.variable} font-body bg-black text-mist antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
