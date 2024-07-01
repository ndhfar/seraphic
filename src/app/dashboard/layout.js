import Link from "next/link";

export default function Layout({ children }) {
  return (
    <main className="h-screen flex">
      <aside className="w-[240px] bg-gray-900 p-4 flex flex-col font-normal text-gray-200">
        <section className="flex-grow space-y-4">
          <Link href="/dashboard" legacyBehavior>
            <a className="block py-2 px-4 rounded hover:bg-indigo-800 hover:text-white">
              Dashboard
            </a>
          </Link>
          <Link href="/dashboard/profile" legacyBehavior>
            <a className="block py-2 px-4 rounded hover:bg-indigo-800 hover:text-white">
              Profile
            </a>
          </Link>
          <Link href="/dashboard/settings" legacyBehavior>
            <a className="block py-2 px-4 rounded hover:bg-indigo-800 hover:text-white">
              Setting
            </a>
          </Link>
        </section>

        <section>
          <Link href="/" legacyBehavior>
            <a className="block py-2 px-4 rounded hover:bg-indigo-800 hover:text-white mt-auto">
              Logout
            </a>
          </Link>
        </section>
      </aside>
      <section className="w-[calc(100%-240px)] p-8 text-white">
        {children}
      </section>
    </main>
  );
}
