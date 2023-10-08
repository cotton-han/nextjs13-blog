import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl font-bold">{"Cotton's Blog"}</h1>
      </Link>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
