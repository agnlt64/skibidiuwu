import Link from "next/link"

export function Header() {
  return (
    <header className="absolute top-0 left-0 p-6 z-10">
      <Link href="/" className="block">
        <h1 className="text-2xl font-bold">
          <span className="text-white">skibidi</span>
          <span className="text-pink-500">uwu</span>
          <span className="text-white">.org</span>
        </h1>
      </Link>
    </header>
  )
}
