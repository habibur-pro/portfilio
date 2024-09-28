"use client";
import links from "@/assets/navLinks";
import { toggle } from "@/redux/features/navbarSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import cn from "@/utils/cn";
import { X } from "lucide-react";
import Link from "next/link";

const MobileNav = () => {
  const isOpen = useAppSelector((state) => state.navToggle.isOpen);
  const dispatch = useAppDispatch();

  return (
    <div
      className={cn(
        "absolute top-0 w-full transition-all ease-in-out duration-1000 block md:hidden",
        isOpen ? "left-0" : "-left-[100vw]"
      )}
    >
      <div className="bg-black h-screen w-full flex items-center justify-center relative">
        <button
          onClick={() => dispatch(toggle())}
          className="absolute top-5 right-5"
        >
          <X size={30} className="cursor-pointer" />
        </button>
        <div className="flex items-center justify-center text-center ">
          <ul className="space-y-5">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
