// app/layout.tsx
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'My Portfolio',
  description: 'Built with Next.js App Router',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <header className="p-4 bg-white shadow-md flex justify-between items-center">
          <h1 className="font-bold text-xl">My Portfolio</h1>
          <nav className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <main className="p-8">{children}</main>

        <footer className="p-4 bg-white text-center text-sm border-t">
          © 2025 My Portfolio. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
