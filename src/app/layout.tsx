import "./globals.css";
import Link from 'next/link';

export const metadata = {
  title: "Next.js",
  description: "Just a simple Next.js project.",
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
