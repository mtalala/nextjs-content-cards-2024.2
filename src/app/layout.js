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
        <h1 className="titulo">Folha da Inovação</h1>
        <header>
          <nav>
              <ol>
                  <li>
                      <Link href="/">| Home |</Link>
                  </li>
              </ol>
          </nav>
        </header>
        <hr></hr>
        {children}
      </body>
    </html>
  );
}
