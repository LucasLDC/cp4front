import type { Metadata } from "next";
import Header from "./Header/Header";

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
      </body>
    </html>
  );
}
