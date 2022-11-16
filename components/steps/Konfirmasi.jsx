import React from "react";
import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

function Konfirmasi() {
  const { userData, setUserData } = useContext(StepperContext);
  console.log(userData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col place-items-center">
        <p className="font-semibold mb-4">Konfirmasi Data</p>
        <div className="w-full">
          <p>Apakah sudah yakin dengan data yang dimasukkan?</p>
          <div className="border p-6 bg-white">
            {Object.keys(userData).map((keyName, i) => (
              <div className="py-1 border-[#D7EAEA] border-b" key={i}>
                <p className="font-semibold">{keyName.charAt(0).toUpperCase() + keyName.slice(1).split("-").join(" ")}</p>
                <p className="text-sm">{userData[keyName]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Konfirmasi;
