'use client';

import Link from 'next/link';

export default function Page() {
  return (
    <main className="space-y-4 ">
      <h1 className="text-2xl font-semibold text-center">Hello Again!</h1>
      <form action="" className="space-y-2">
        <InputTemplate
          label="Email"
          name="email"
          type="email"
          icon="bx-envelope"
        />
        <InputTemplate
          label="Password"
          name="password"
          type="password"
          icon="bx-lock"
        />
        <div>
          <button className="mt-2 w-full btn btn-neutral btn-sm">Login</button>
        </div>
      </form>
      <p className="text-xs text-center">
        Don&apos;t have an account? {''}
        <Link
          href="/register"
          className="text-[#0075c2] hover:text-[#004877] font-semibold"
        >
          Register
        </Link>
      </p>
    </main>
  );
}

const InputTemplate = ({ label, name, type, icon }) => {
  return (
    <div>
      <label className="text-sm">{label}</label>
      <div className="border border-slate-400 rounded-md flex items-center p-2">
        <i className={`bx ${icon} text-xl`}></i>
        <input
          name={name}
          placeholder={name}
          type={type}
          className="outline-none pl-2 text-inherit placeholder: text-sm  placeholder: text-slate-400"
        />
      </div>
    </div>
  );
};
