import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "My Portfolio | Code & Rhythm",
  description: "Developer & Dancer – where logic meets movement.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
        {children}
      </body>
    </html>
  );
}