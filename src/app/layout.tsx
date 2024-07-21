import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/NavBar";

export const metadata: Metadata = {
  title: "That Colombia Trip",
  description: "Yes, I have too much free time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  );
}