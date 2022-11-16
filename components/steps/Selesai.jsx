import React from "react";
import Button from "../Button";
import { useRouter } from "next/router";

function Selesai() {
  const router = useRouter();

  return (
    <div className="my-4 flex flex-col justify-center items-center">
      <div className="text-[#a7b2ca]">
        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      </div>
      <p className="font-bold text-2xl text-[#69779B]">Selamat!</p>
      <p>Data telah berhasil dikirimkan.</p>
      <p className="mb-4">Silahkan menunggu hasil yang akan kami kirimkan.</p>
      <div>
        <Button label="Close" onClick={() => router.push("/")} />
      </div>
    </div>
  );
}

export default Selesai;
