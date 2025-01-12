import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  weight:["400", "500", "600", "700"],
  subsets: ["latin"],
});

const ovo = Ovo({
  weight:["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Portofolio-KojoCode",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
