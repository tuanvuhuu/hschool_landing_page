import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hschool.edu.vn"),
  title: "HSchool — Mầm non song ngữ | Greatness Starts From Here",
  description:
    "Mầm non song ngữ HSchool - Greatness Starts From Here. Môi trường giáo dục mầm non song ngữ hiện đại, an toàn và yêu thương cho bé thỏa sức khám phá.",
  icons: { icon: "/assets/logo.jpeg" },
  openGraph: {
    title: "HSchool — Mầm non song ngữ",
    description: "Greatness Starts From Here — nơi ươm mầm những điều lớn lao.",
    images: ["/assets/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
