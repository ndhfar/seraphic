import Link from 'next/link';
import React from 'react';

export default function Layout({ children }) {
  return (
    <main className="h-screen flex">
      <aside className="w-[280px] border-r shadow-lg px-10 py-8 space-y-6 flex flex-col h-full">
        <Link href="/">
          <div className="text-xl font-bold tracking-tight">Eventmakers</div>
        </Link>
        <section className="space-y-3 flex-grow">
          <div>Profile</div>
          <div>Events</div>
        </section>
        <section className="flex items-end">
          <button className="btn btn-neutral w-[190px]">Logout</button>
        </section>
      </aside>
      <main className="w-[calc(100%-280px)]">{children}</main>
    </main>
  );
}
