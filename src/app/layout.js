import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/shared/Navbar";
import Footer from "@/component/shared/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "News24",
  description: "using Next.js and shadcn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header>
          <Navbar/>
        </header>
       <main className="w-10/12 mx-auto min-h-screen">
         {children}
       </main>
       <footer>
        <Footer/>
       </footer>
      </body>
    </html>
  );
}
