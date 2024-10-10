import type { Metadata } from "next";

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
        
        {children}
      </body>
    </html>
  );
}
