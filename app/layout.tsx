import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  viewport: "width=device-width, initial-scale=1.0",
  title: "Sippets: Create beautiful images of your code snippets",
  description:
    "An app that allows users to create beautiful images of their code snippets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
