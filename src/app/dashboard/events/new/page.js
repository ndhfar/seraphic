'use client';

import { useActionState } from 'react';
import { createEventAction } from './action';
import React from 'react';

export default function Page() {
  const [formAction, pending, state] = useActionState(createEventAction, null);

  return (
    <main className="h-screen flex justify-center items-center">
      <section className="flex items-center">
        <div className="card bg-base-100 w-96 border shadow-2xl">
          <div className="card-body">
            <div className="pb-3 space-y-2">
              <h2 className="card-title">Create Event</h2>
            </div>
            <form action={formAction} className="space-y-5">
              <div>
                <p className="text-sm text-slate-700">Title</p>
                <input
                  name="title"
                  placeholder="title"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <p className="text-sm text-slate-700">Location</p>
                <select
                  name="location"
                  className="select select-bordered w-full"
                >
                  <option>Malang</option>
                  <option>Jakarta</option>
                  <option>Yogyakarta</option>
                  <option>Bali</option>
                  <option>Bandung</option>
                  <option>Surabaya</option>
                  <option>NTB</option>
                  <option>NTT</option>
                </select>
              </div>
              <div>
                <p className="text-sm text-slate-700">Description</p>
                <textarea
                  name="description"
                  placeholder="description"
                  rows={4}
                  className="textarea textarea-bordered w-full"
                />
              </div>
              <div className="pt-3 flex justify-end">
                <button disabled={pending} className="btn btn-neutral">
                  Create
                </button>
              </div>
              <div className="pt-3">
                {!state?.success && state?.message && (
                  <p className="text-red-500">{state?.message}</p>
                )}
                {state?.success && (
                  <p className="text-green-500">{state?.message}</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
