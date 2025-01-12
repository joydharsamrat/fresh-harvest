import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/shared/navBar/NavBar";
import { rubik } from "./fonts";
import { ModalProvider } from "@/context/modalStateProvider";
import ModalsContainer from "@/components/shared/ModalsContainer";
import { Toaster } from "react-hot-toast";
import UserProvider from "@/context/userProvider";
import { ProductStateProvider } from "@/context/productStateContext";
import Footer from "@/components/shared/Footer";

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
    <html lang="en" className={`${rubik.className}`}>
      <body>
        <UserProvider>
          <ModalProvider>
            <Toaster />
            <NavBar />
            <ProductStateProvider>{children}</ProductStateProvider>
            <Footer />
            <ModalsContainer />
          </ModalProvider>
        </UserProvider>
      </body>
    </html>
  );
}
