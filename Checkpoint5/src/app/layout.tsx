import type { Metadata } from "next";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

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
<<<<<<< HEAD
        
=======
        <Header/>
>>>>>>> f39c977592db969a2327a4e96e62bec922b29fd7
        {children}
        <Footer/>
      </body>
    </html>
  );
}
