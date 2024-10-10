import type { Metadata } from "next";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import './reset.css';

export const metadata: Metadata = {
  title: "Checkpoint-5 PetShop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
