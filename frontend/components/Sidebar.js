import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4">
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/">Dashboard</Link>
          </li>
          <li className="mb-4">
            <Link href="/upload">Upload</Link>
          </li>
          <li className="mb-4">
            <Link href="/history">History</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
