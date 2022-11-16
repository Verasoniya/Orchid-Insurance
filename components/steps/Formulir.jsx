import { useContext } from "react";
import React, { Fragment, useState } from "react";
import { StepperContext } from "../../contexts/StepperContext";
import { Combobox, Transition } from "@headlessui/react";

const gender = [
  { id: 1, name: "Laki-laki" },
  { id: 2, name: "Perempuan" },
];

function Formulir() {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const [selectedGender, setSelectedGender] = useState(gender[0]);
  const [query, setQuery] = useState("");

  const filteredGender =
    query === ""
      ? gender
      : gender.filter((genders) => {
          return genders;
        });

  return (
    <div className="flex flex-col">
      <div className="flex flex-col place-items-center">
        <p className="font-semibold mb-4">Formulir Klaim Asuransi Kerusakan Kendaraan</p>
        <div className="w-full">
          <p>Penanggung Jawab</p>
          <div className="border p-4 bg-white">
            <label className="font-normal text-sm">No Polisi</label>
            <input
              onChange={handleChange}
              value={userData["no-polisi"] || ""}
              name="no-polisi"
              placeholder="cth. B 1234 EFG"
              type="text"
              className="w-full mb-3 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
            />

            <label className="font-normal text-sm">Nama Tertanggung</label>
            <input
              onChange={handleChange}
              value={userData["nama-tertanggung"] || ""}
              name="nama-tertanggung"
              placeholder="cth. Budi Raharjo"
              type="text"
              className="w-full mb-3 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
            />

            <label className="font-normal text-sm">No Polis</label>
            <input
              onChange={handleChange}
              value={userData["no-polis"] || ""}
              name="no-polis"
              placeholder="cth. VCL2007001"
              type="text"
              className="w-full mb-3 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
            />

            <label className="font-normal text-sm">Periode</label>
            <input
              onChange={handleChange}
              value={userData["periode"] || ""}
              name="periode"
              type="date"
              className="w-full mb-3 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
            />

            <label className="font-normal text-sm">Nilai Pertanggungan</label>
            <input
              onChange={handleChange}
              value={userData["nilai-pertanggungan"] || ""}
              name="nilai-pertanggungan"
              placeholder="cth. 120 000 000"
              type="text"
              className="w-full mb-3 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
            />

            <label className="font-normal text-sm">Buatan/Merek</label>
            <input
              onChange={handleChange}
              value={userData["merek"] || ""}
              name="merek"
              placeholder="cth. Jepang/Honda"
              type="text"
              className="w-full mb-3 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
            />

            <label className="font-normal text-sm">Tahun Pembuatan</label>
            <input
              onChange={handleChange}
              value={userData["tahun-buat"] || ""}
              name="tahun-buat"
              placeholder="cth. 2019"
              type="text"
              className="w-full mb-3 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
            />

            <label className="font-normal text-sm">No. Mesin</label>
            <input
              onChange={handleChange}
              value={userData["no-mesin"] || ""}
              name="no-mesin"
              placeholder="cth. NHX120000"
              type="text"
              className="w-full mb-3 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
            />

            <label className="font-normal text-sm">No. Rangka</label>
            <input
              onChange={handleChange}
              value={userData["no-rangka"] || ""}
              name="no-rangka"
              placeholder="cth. MCN24000"
              type="text"
              className="w-full mb-3 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
            />
          </div>
          <p className="mt-6">Pengemudi & Kejadian</p>
          <div className="border p-4 bg-white">
            <label className="font-normal text-sm">Nama Pengemudi</label>
            <input
              onChange={handleChange}
              value={userData["nama-pengemudi"] || ""}
              name="nama-pengemudi"
              placeholder="cth. Wijayanto"
              type="text"
              className="w-full mb-3 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
            />

            {/* Dropdown */}
            <label className="font-normal text-sm">Jenis Kelamin</label>

            <Combobox value={selectedGender} onChange={setSelectedGender}>
              <div className="relative mt-1">
                <Combobox.Input
                  className="w-full mb-3 p-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
                  displayValue={(genders) => genders.name}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">:::</Combobox.Button>

                <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0" afterLeave={() => setQuery("")}>
                  <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-sm bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredGender.length === 0 && query !== "" ? (
                      <div className="relative cursor-default select-none py-2 px-4 text-gray-700">Nothing found.</div>
                    ) : (
                      filteredGender.map((genders) => (
                        <Combobox.Option key={genders.id} className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-[#69779B] text-white" : "text-gray-900"}`} value={genders}>
                          {({ selectedGender, active }) => (
                            <>
                              <span className={`block truncate ${selectedGender ? "font-medium" : "font-normal"}`}>{genders.name}</span>
                              {selectedGender ? <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-[#69779B]"}`}>{/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}</span> : null}
                            </>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>

            <label className="font-normal text-sm">Hubungan dengan Tertanggung</label>
            <input
              onChange={handleChange}
              value={userData["hubungan-dengan-tertanggung"] || ""}
              name="hubungan-dengan-tertanggung"
              placeholder="cth. Saudara Kandung"
              type="text"
              className="w-full mb-3 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
            />

            <label className="font-normal text-sm">Tanggal Kejadian</label>
            <input
              onChange={handleChange}
              value={userData["tanggal-kejadian"] || ""}
              name="tanggal-kejadian"
              type="date"
              className="w-full mb-3 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
            />

            <label className="font-normal text-sm">Waktu Kejadian</label>
            <input
              onChange={handleChange}
              value={userData["waktu-kejadian"] || ""}
              name="waktu-kejadian"
              type="time"
              className="w-full mb-3 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
            />

            <label className="font-normal text-sm">Penyebab Kejadian</label>
            <input
              onChange={handleChange}
              value={userData["penyebab-kejadian"] || ""}
              name="penyebab-kejadian"
              placeholder="cth. Lelah berkendara"
              type="text"
              className="w-full mb-3 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
            />

            <label className="font-normal text-sm">Tempat Kejadian</label>
            <input
              onChange={handleChange}
              value={userData["tempat-kejadian"] || ""}
              name="tempat-kejadian"
              placeholder="cth. Jl. Merah Putih No. 2"
              type="text"
              className="w-full mb-3 py-1 px-2 text-sm rounded-sm border  bg-white placeholder:text-sm placeholder:text-[#69779B] placeholder:text-opacity-40 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulir;
