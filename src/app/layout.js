import "./globals.css";
import Link from 'next/link';

export const metadata = {
  title: "React",
  description: "Trabalhando com páginas React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
