'use client';


import Link from "next/link";
import RegisterAction from "./action";
import { useActionState } from "react";

export default function Page() {
  const [state, formAction, pending] = useActionState(RegisterAction, null);

  return (
    <main className="space-y-4 ">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Create an account.</h1>
        <p className="text-xs">
          Already have an account? {''}
          <Link
            href="/login"
            className="text-[#0075c2] hover:text-[#004877] font-semibold"
          >
            Log In
          </Link>
        </p>
      </div>
      <form action={formAction} className="space-y-2">
        <InputTemplate
          label="Username"
          name="username"
          type="text"
          icon="bx-user"
        />
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
          <button
            disabled={pending}
            className="my-2 w-full btn btn-neutral btn-sm"
          >
            Register
          </button>
        </div>

        {state?.status === "failed" ? (
          <StatusTemplate status="failed" message={state.message} />
        ) : null}
        {state?.status === "success" ? (
          <StatusTemplate status="success" message={state.message} />
        ) : null}
      </form>
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
          required
        />
      </div>
    </div>
  );
};

const StatusTemplate = ({ status, message }) => {
  if (status === "failed") {
    return (
      <p className="bg-red-100 text-red-500 text-center py-1 text-sm">
        {message}
      </p>
    );
  } else if (status === "success") {
    return (
      <p className="bg-green-100 text-green-500 text-center py-1 text-sm">
        {message}
      </p>
    );
  }
};
