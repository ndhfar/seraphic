import Link from 'next/link';
import React from 'react';

export const EventCard = ({ event }) => {
  return (
    <Link href={`/${event.id}`}>
      <main className="flex justify-center">
        <div className="card bg-base-100 w-96 border shadow-2xl cursor-pointer">
          <div className="card-body pb-3 space-y-2">
            <h1 className="text-lg font-semibold">{event.title}</h1>
            <p className="text-gray-600">{event.location}</p>
            <p className="mt-2 text-sm text-gray-700">{event.description}</p>
          </div>
        </div>
      </main>
    </Link>
  );
};
