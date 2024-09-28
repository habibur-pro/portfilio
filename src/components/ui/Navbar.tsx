"use client";
import links from "@/assets/navLinks";
import { toggle } from "@/redux/features/navbarSlice";
import { useAppDispatch } from "@/redux/hook";
import { Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const dispatch = useAppDispatch();
  return (
    <header className=" ">
      <nav className="">
        <div className="h-16 flex justify-between items-center container mx-auto px-5">
          <span className="text-highlight font-bold font-outfit text-2xl">
            Habibur
          </span>
          <ul className="hidden md:flex gap-5 text-md items-center">
            {links.map((link) => (
              <li key={link.href} className="hover:text-highlight">
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <span onClick={() => dispatch(toggle())} className="block md:hidden">
            <Menu
              size={30}
              className="cursor-pointer text-white dark:text-black"
            />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
