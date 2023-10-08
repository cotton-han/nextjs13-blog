import Link from "next/link";

export default function Header() {
  return (
    <header className="h-16 px-4 flex justify-between items-center">
      <Link href="/">
        <h1>{"Cotton's Blog"}</h1>
      </Link>
      <nav className="flex space-x-3">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
