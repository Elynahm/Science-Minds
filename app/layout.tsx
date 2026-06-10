import "./globals.css";
import type { Metadata } from "next";
import Nav from "./components/Nav";

export const metadata: Metadata = {
  title: "Science Minds",
  description:
    "Mathematics, Physics and Chemistry Learning Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          background:
            "linear-gradient(135deg,#02122e 0%,#052b78 35%,#041a45 70%,#010814 100%)",
        }}
      >
        <Nav />

        <main>{children}</main>
      </body>
    </html>
  );
}