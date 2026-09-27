import "./globals.css";

export const metadata = {
  title: "Minhazul Islam Rikat",
  description: "Frontend & CMS Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
