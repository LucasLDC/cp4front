import AgendamentosList from './components/AgendamentosList';
import type { Metadata } from "next";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import './reset.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        <AgendamentosList />
        {children}
        <AgendamentosList />
        <Footer />
      </body>
    </html>
  );
}
