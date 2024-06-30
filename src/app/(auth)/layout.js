export default function Layout({ children }) {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="w-[300px] px-6 py-3  md:border border-slate-300 rounded-xl md:px-8 md:py-4 md:w-[340px]">
        {children}
      </div>
    </main>
  );
}
