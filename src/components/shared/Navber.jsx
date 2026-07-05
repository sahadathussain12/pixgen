"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png"

const Navbar = () => {
  return (
    <div className="border-b px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src={logo}
            alt="logo"
            width={30}
            height={30}
            priority
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        {/* Navigation */}
        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all-photos">All Photos</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center  gap-3">
           <Link href={'/signup'}>
            <Button className="bg-purple-400 p-2  rounded-full text-white" variant="outline">SignUp</Button>
           </Link>

          <Link href={'/signin'}>
          <Button>
            Sign In
          </Button>
          </Link>
            
       
        </div>
      </nav>
    </div>
  );
};

export default Navbar;