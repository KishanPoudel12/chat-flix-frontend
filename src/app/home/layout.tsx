// src/app/home/layout.tsx
import Navbar from "./../../components/Navbar";
export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-yellow-500 dark:bg-black font-sans">
      <Navbar />
      <main className="flex-1 flex">{children}</main>
    </div>
  );
}
