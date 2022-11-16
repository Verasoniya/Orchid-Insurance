import React from "react";
import { useContext } from "react";
import Zoom from "next-image-zoom";
import { StepperContext } from "../../contexts/StepperContext";

function KlaimKerusakan() {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const [kerusakan1, setKerusakan1] = React.useState(null);
  const [kerusakan2, setKerusakan2] = React.useState(null);
  const [kerusakan3, setKerusakan3] = React.useState(null);
  const [kerusakan4, setKerusakan4] = React.useState(null);
  const [kerusakan5, setKerusakan5] = React.useState(null);

  const fileHandlerKerusakan1 = (e) => {
    setKerusakan1(e.target.files[0]);
  };
  const fileHandlerKerusakan2 = (e) => {
    setKerusakan2(e.target.files[0]);
  };
  const fileHandlerKerusakan3 = (e) => {
    setKerusakan3(e.target.files[0]);
  };
  const fileHandlerKerusakan4 = (e) => {
    setKerusakan4(e.target.files[0]);
  };
  const fileHandlerKerusakan5 = (e) => {
    setKerusakan5(e.target.files[0]);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col place-items-center">
        <p className="font-semibold mb-4">Bukti Kerusakan</p>
        <div className="w-full">
          <div className="border p-4 bg-white">
            <label className="font-normal text-sm">Masukkan Foto Kerusakan 1</label>
            <input
              onChange={fileHandlerKerusakan1}
              name="foto-kerusakan-1"
              type="file"
              className="w-full mb-1 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
              accept="image/*"
            />
            <div className="flex mb-4 border">
              <div style={{ flex: "1" }} className="cursor-pointer h-64">
                <Zoom src={kerusakan1 ? URL.createObjectURL(kerusakan1) : ""} alt="Kerusakan 1" layout={"fill"} objectFit={"contain"} />
              </div>
            </div>
            <textarea
              onChange={handleChange}
              value={userData["kerusakan-1"] || ""}
              placeholder="Deskripsi Kerusakan"
              name="kerusakan-1"
              type="date"
              className="w-full h-28 mb-3 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
            />

            <label className="font-normal text-sm">Masukkan Foto Kerusakan 2</label>
            <input
              onChange={fileHandlerKerusakan2}
              name="foto-kerusakan-2"
              type="file"
              className="w-full mb-1 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
              accept="image/*"
            />
            <div className="flex mb-4 border">
              <div style={{ flex: "1" }} className="cursor-pointer h-64">
                <Zoom src={kerusakan2 ? URL.createObjectURL(kerusakan2) : ""} alt="Kerusakan 2" layout={"fill"} objectFit={"contain"} />
              </div>
            </div>
            <textarea
              onChange={handleChange}
              value={userData["kerusakan-2"] || ""}
              placeholder="Deskripsi Kerusakan"
              name="kerusakan-2"
              type="date"
              className="w-full h-28 mb-3 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
            />

            <label className="font-normal text-sm">Masukkan Foto Kerusakan 3</label>
            <input
              onChange={fileHandlerKerusakan3}
              name="foto-kerusakan-3"
              type="file"
              className="w-full mb-1 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
              accept="image/*"
            />
            <div className="flex mb-4 border">
              <div style={{ flex: "1", height: 200 }} className="cursor-pointer">
                <Zoom src={kerusakan3 ? URL.createObjectURL(kerusakan3) : ""} alt="Kerusakan 3" layout={"fill"} objectFit={"contain"} />
              </div>
            </div>
            <textarea
              onChange={handleChange}
              value={userData["kerusakan-3"] || ""}
              placeholder="Deskripsi Kerusakan"
              name="kerusakan-3"
              type="date"
              className="w-full h-28 mb-3 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
            />

            <label className="font-normal text-sm">Masukkan Foto Kerusakan 4</label>
            <input
              onChange={fileHandlerKerusakan4}
              name="foto-kerusakan-4"
              type="file"
              className="w-full mb-1 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
              accept="image/*"
            />
            <div className="flex mb-4 border">
              <div style={{ flex: "1", height: 200 }} className="cursor-pointer">
                <Zoom src={kerusakan4 ? URL.createObjectURL(kerusakan4) : ""} alt="Kerusakan 4" layout={"fill"} objectFit={"contain"} />
              </div>
            </div>
            <textarea
              onChange={handleChange}
              value={userData["kerusakan-4"] || ""}
              placeholder="Deskripsi Kerusakan"
              name="kerusakan-4"
              type="date"
              className="w-full h-28 mb-3 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
            />

            <label className="font-normal text-sm">Masukkan Foto Kerusakan 5</label>
            <input
              onChange={fileHandlerKerusakan5}
              name="foto-kerusakan-5"
              type="file"
              className="w-full mb-1 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
              accept="image/*"
            />
            <div className="flex mb-4 border">
              <div style={{ flex: "1", height: 200 }} className="cursor-pointer">
                <Zoom src={kerusakan5 ? URL.createObjectURL(kerusakan5) : ""} alt="Kerusakan 5" layout={"fill"} objectFit={"contain"} />
              </div>
            </div>
            <textarea
              onChange={handleChange}
              value={userData["kerusakan-5"] || ""}
              placeholder="Deskripsi Kerusakan"
              name="kerusakan-5"
              type="date"
              className="w-full h-28 mb-3 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KlaimKerusakan;
