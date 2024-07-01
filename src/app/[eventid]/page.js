import { EventCard } from "@/components/event-card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { prisma } from "@/utils/prisma";
import { JoinForm } from "./joinForm";

export default async function Page({ params }) {
  const event = await prisma.event.findFirst({
    where: {
      id: params.eventid,
    },
    include: {
      author: true,
      participants: true,
    },
  });

  return (
    <div className="w-full min-h-screen">
      <Header />
      <main>
        <section className="w-full flex flex-col items-center gap-2 bg-slate-300 pb-2 md:flex-row md:pb-0 h-fit">
          <img src={event.image} className="w-full aspect-video md:w-2/5" />
          <div className="px-4">
            <h1 className="font-bold text-5xl pt-2">{event.title}</h1>
            <p>
              <span className="font-semibold">Author:</span>{" "}
              {event.author.username}
            </p>
            <p className="mt-2 text-sm md:text-base">{event.description}</p>
            <div className="text-sm mt-3 md:text-base">
              <h2 className="font-bold text-xl">Event Information</h2>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <p>Price: {event.price}</p>
            </div>
          </div>
        </section>
        <section className="w-full px-4 mt-2 grid grid-cols-1 md:grid-cols-2">
          <div>
            <JoinForm />
          </div>
          <div>
            <h3 className="font-bold text-lg">Participants</h3>
            <ul>
              {event.participants.map((participant) => {
                {
                  event.participants.length === 0 ? (
                    <p>No one joined</p>
                  ) : (
                    <li key={participant.id} className="pl-4 list-disc ">
                      <div>{participant.name}</div>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
