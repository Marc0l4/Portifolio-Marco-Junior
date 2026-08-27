import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marco Junior — Backend Developer",
  description:
    "Portfólio de Marco Francisco de Oliveira Junior, desenvolvedor backend em formação — Python, C#, SQL e integrações de API.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
