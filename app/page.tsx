// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="text-center">
      <Image
        src="/profile.jpg"
        alt="Profile"
        width={120}
        height={120}
        className="rounded-full mx-auto"
      />
      <h2 className="text-3xl font-semibold mt-4">Hello, I’m Yvette </h2>
      <p className="mt-2 text-gray-600">
        I’m a full-stack developer passionate about building modern web apps.
      </p>

      <div className="mt-6 space-x-4">
        <Link href="/projects" className="bg-blue-500 text-white px-4 py-2 rounded">
          View My Work
        </Link>
        <Link href="/contact" className="border px-4 py-2 rounded">
          Contact Me
        </Link>
      </div>
    </section>
  );
}
