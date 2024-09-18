import "@styles/globals.css";
import Nav from "@components/Nav";
import { Poppins, Fredoka } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-fredoka",
});

export const metadata = {
  title: "AI Architecture and Design Generator",
  description:
    "Unlock the future of design with our AI Architecture and Design Generator.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`${poppins.variable} ${fredoka.variable}`}>
      <body className="font-poppins bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Nav />
        <main className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
