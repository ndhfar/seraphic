"use client";

import Link from "next/link";
import { useActionState } from "react";
import LoginAction from "./action";

export default function Page() {
  const [state, formAction, pending] = useActionState(LoginAction, null);

  return (
    <main className="space-y-4 ">
      <h1 className="text-2xl font-semibold text-center">Hello Again!</h1>
      <form action={formAction} className="space-y-2">
        <InputTemplate
          label="Email"
          name="email"
          type="email"
          icon="bx-envelope"
          value={state?.data?.email}
        />
        <InputTemplate
          label="Password"
          name="password"
          type="password"
          icon="bx-lock"
          value={state?.data?.password}
        />
        <div>
          <button
            className="mt-2 w-full btn btn-neutral btn-sm"
            disabled={pending}
          >
            Log In
          </button>
        </div>

        {state?.status === "failed" ? (
          <StatusTemplate status="failed" message={state.message} />
        ) : null}
        {state?.status === "success" ? (
          <StatusTemplate status="success" message={state.message} />
        ) : null}
      </form>
      <p className="text-xs text-center">
        Don&apos;t have an account? {""}
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

const InputTemplate = ({ label, name, type, icon, value }) => {
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
          defaultValue={value}
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
