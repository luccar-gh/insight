import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/MainLayout";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Insight — Holistic Design for Engineering Systems · DTU",
  description: "N-Model analysis of Denmark's socio-technical support system for blind and visually impaired citizens. Course material for DTU 41639.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={inter.variable}>
        <LanguageProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
