import React from "react";
import Zoom from "next-image-zoom";

function FotoSimStnk() {
  const [sim, setSim] = React.useState(null);
  const [stnk, setStnk] = React.useState(null);
  const [ktp, setKtp] = React.useState(null);

  const fileHandlerSim = (e) => {
    setSim(e.target.files[0]);
  };
  const fileHandlerStnk = (e) => {
    setStnk(e.target.files[0]);
  };
  const fileHandlerKtp = (e) => {
    setKtp(e.target.files[0]);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col place-items-center">
        <p className="font-semibold mb-4">Bukti Identitas</p>
        <div className="w-full">
          <div className="border p-4 bg-white">
            <label className="font-normal text-sm">Masukkan Foto SIM</label>
            <input onChange={fileHandlerSim} name="foto-sim" type="file" className="w-full mb-1 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 " accept="image/*" />
            <div className="flex mb-4 border">
              <div style={{ flex: "1" }} className="cursor-pointer h-64">
                <Zoom src={sim ? URL.createObjectURL(sim) : ""} layout={"fill"} objectFit={"contain"} alt="Foto-SIM" />
              </div>
            </div>

            <label className="font-normal text-sm">Masukkan Foto STNK</label>
            <input onChange={fileHandlerStnk} name="foto-stnk" type="file" className="w-full mb-1 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 " accept="image/*" />
            <div className="flex mb-4 border">
              <div style={{ flex: "1" }} className="cursor-pointer h-64">
                <Zoom src={stnk ? URL.createObjectURL(stnk) : ""} layout={"fill"} objectFit={"contain"} alt="Foto-STNK" />
              </div>
            </div>

            <label className="font-normal text-sm">Masukkan Foto KTP Tertanggung</label>
            <input onChange={fileHandlerKtp} name="foto-ktp" type="file" className="w-full mb-1 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 " accept="image/*" />
            <div className="flex mb-4 border">
              <div style={{ flex: "1" }} className="cursor-pointer h-64">
                <Zoom src={ktp ? URL.createObjectURL(ktp) : ""} layout={"fill"} objectFit={"contain"} alt="Foto-KTP" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FotoSimStnk;
