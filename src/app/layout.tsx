import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/common/navbar";
import icons from "@/styles/icons";
import Header from "@/components/layout/common/header";

const roboto = Roboto({
  subsets: ["vietnamese", "latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "DigiSale",
  description: "DigiSale - Phần mềm quản trị tùy chỉnh",
  icons: {
    icon: {
      url: icons.logoDigiSaleMini,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans flex`}>
        <Navbar />
        <div className="w-full">
          <Header />
          <div className="w-full h-full px-5 py-3 bg-[#F4F7FC]">{children}</div>
        </div>
      </body>
    </html>
  );
}
