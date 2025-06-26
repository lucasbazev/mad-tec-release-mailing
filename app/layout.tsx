import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SideMenu } from "@/components/app/Menu";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MAD.tec - Release & Mailing",
  description: "Ferramenta de gerenciamento de releases e mailing - MAD.tec",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.variable} flex min-h-screen`}>
        <SideMenu />

        <div className="bg-gray-100 min-h-screen w-full overflow-auto">
          {children}
        </div>

        <Toaster />
      </body>
    </html>
  );
}
