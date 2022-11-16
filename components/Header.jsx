import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/orchid-insurance.png";

function Header() {
  return (
    <header className="z-20 sticky top-0 flex justify-end py-2 pr-10 lg:pr-28 gap-8 font-bold shadow-md bg-[#F9F9F9] ">
      <Link id="to-klaim" href="klaim" className="self-center hover:text-[#69779B] hover:border-b-2 hover:border-[#69779B] text-sm md:text-base">
        KLAIM
      </Link>
      <Link id="to-home" href="/">
        <Image src={logo} alt="Orchid Insurance" height="40" className="hover:border-b-2 hover:border-[#69779B]" />
      </Link>
    </header>
  );
}

export default Header;
