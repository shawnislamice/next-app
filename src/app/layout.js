import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Heading from "@/components/Heading";
import NavBar from "@/components/NavBar";

const SpaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Next Hero",
    template: "%s | Next Hero",
  },
  description: "Super Powerful",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={SpaceGrotesk.className}>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
