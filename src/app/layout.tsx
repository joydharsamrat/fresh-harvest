import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fresh Harvests - Fresh Fruits & Vegetables Online",
  description:
    "Shop fresh fruits and organic vegetables online. Fresh Harvests delivers farm-fresh produce to your doorstep quickly and conveniently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` `}>{children}</body>
    </html>
  );
}
// antialiased
