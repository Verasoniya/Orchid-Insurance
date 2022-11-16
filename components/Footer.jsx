import React from "react";
import Button from "./Button";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../assets/orchid-insurance-white.png";

function Footer() {
  const router = useRouter();

  return (
    <div className="flex justify-center gap-4 md:gap-8 py-4 bg-[#41444B] text-[#DFD8C8]">
      <Image src={logo} alt="Orchid-Insurance" width="150" />
      <Button label="KLAIM" onClick={() => router.push("klaim")} className="self-end py-1 font-bold border rounded-none border-[#D7EAEA] bg-[#41444B] hover:bg-[#D7EAEA] hover:text-[#41444B]" />
    </div>
  );
}

export default Footer;
