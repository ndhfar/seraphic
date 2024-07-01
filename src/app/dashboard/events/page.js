import { prisma } from '@/utils/prisma';
import { auth } from '@/lib/auth';
import { EventCard } from '@/components/eventCard';
import React from 'react';

export default async function Page() {
  const user = await auth();

  const events = await prisma.event.findMany({
    where: {
      authorId: user.id,
    },
    include: {
      author: true,
      participants: {
        select: {
          id: true,
        },
      },
    },
  });

  console.log(events);

  return (
    <main className="space-y-12">
      <section className="flex items-center px-14 py-6 justify-between">
        <div className="text-xl font-bold">My Events</div>
        <button className="btn btn-neutral">Create Event</button>
      </section>
      <section className="grid grid-cols-3 gap-5">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
    </main>
  );
}
