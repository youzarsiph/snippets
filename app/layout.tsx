import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://snippets-gamma.vercel.app"),
  title: "Sippets",
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
      <body>{children}</body>
    </html>
  );
}
