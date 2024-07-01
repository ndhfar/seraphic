import Link from "next/link"; // ensure you have this import

export const Header = async () => {
  return (
    <header className="flex items-center justify-between bg-gray-950 p-4">
      <div className="text-lg font-bold tracking-tighter">
        <img
          src="https://i.ibb.co.com/3kMPj5Y/logo.png"
          alt="logo"
          border="12"
        ></img>
      </div>
      <div className="flex items-center font-normal gap-8">
        <>
          <Link href="../dashboard/">
            <div className="text-gray-200">Dashboard</div>
          </Link>
          <Link href="/login">
            <div className="text-gray-200">Log in</div>
          </Link>
          <Link href="/register">
            <button className="rounded-full font-semibold bg-black px-4 py-2 text-white">
              Register
            </button>
          </Link>
        </>
      </div>
    </header>
  );
};
