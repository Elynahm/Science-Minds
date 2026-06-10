import "./globals.css";
import Nav from "../components/Nav";

export const metadata = {
  title: "Science Minds",
  description: "Science Minds Learning Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}