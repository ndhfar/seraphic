import Link from "next/link"; // ensure you have this import

export const Header = async () => {
  return (
    <header className="flex items-center justify-between bg-black p-4">
      <div className="text-lg font-bold tracking-tighter">
        <img
          src="https://i.ibb.co.com/3kMPj5Y/logo.png"
          alt="logo"
          border="12"
        ></img>
      </div>
      <div className="flex items-center font-normal gap-8">
        <>
          <Link href="/login">
            <div>Log in</div>
          </Link>
          <Link href="/register">
            <button className="rounded-full font-semibold bg-gray-900 px-4 py-2 text-white">
              Register
            </button>
          </Link>
        </>
      </div>
    </header>
  );
};
