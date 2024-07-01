import Link from "next/link"; // ensure you have this import

export const Footer = async () => {
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
          <div className="text-gray-400 text-sm">
            This product is made for Devscale Assignment | 2024.{" "}
          </div>
        </>
      </div>
    </header>
  );
};
