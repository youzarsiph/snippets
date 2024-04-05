import { Noto_Sans } from "next/font/google";
import "@/app/globals.css";

const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://snippets-gamma.vercel.app"),
  title: "Snippets",
  description: " Create beautiful images of your code snippets",
  openGraph: {
    images: "/og-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={noto.className}>{children}</body>
    </html>
  );
}
