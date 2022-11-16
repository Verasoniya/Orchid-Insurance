import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Layout from "../components/Layout";
import Stepper from "../components/Stepper";
import logo from "../assets/orchid-insurance.png";
import Selesai from "../components/steps/Selesai";
import Formulir from "../components/steps/Formulir";
import Konfirmasi from "../components/steps/Konfirmasi";
import StepperControl from "../components/StepperControl";
import FotoSimStnk from "../components/steps/FotoSimStnk";
import { StepperContext } from "../contexts/StepperContext";
import KlaimKerusakan from "../components/steps/KlaimKerusakan";

function Klaim() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);

  const steps = ["Formulir Klaim", "Foto SIM & STNK", "Klaim Kerusakan Kendaraan", "Konfirmasi", "Selesai"];
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Formulir />;
      case 2:
        return <FotoSimStnk />;
      case 3:
        return <KlaimKerusakan />;
      case 4:
        return <Konfirmasi />;
      case 5:
        return <Selesai />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;

    //check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <>
      <Head>
        <title>Orchid Insurance - Klaim</title>
        <link rel="shortcut icon" type="image/png" sizes="16x16" href="/icon-orchid.png" />
      </Head>
      <Layout>
        <div className="flex flex-col my-6 gap-6 px-4">
          <div className="self-center flex flex-col md:flex-row gap-2 md:gap-8 w-full lg:w-7/12 p-6 shadow-md rounded-md bg-white">
            <Image src={logo} alt="Orchid Insurance" height="50" />
            <p className="text-sm md:text-xl text-left">Ikuti langkah berikut, untuk melakukan klaim asuransi kerusakan kendaraan anda.</p>
          </div>
          {/* Stepper */}

          <div className="w-full lg:w-7/12 mx-auto shadow-md rounded-md pb-2 bg-white px-3 lg:px-6">
            <Stepper steps={steps} currentStep={currentStep} />
            {/* Display Components */}
            <div className="my-10 px-4 lg:px-10 py-10 bg-[#F9F9F9]">
              <StepperContext.Provider value={{ userData, setUserData, finalData, setFinalData }}>{displayStep(currentStep)}</StepperContext.Provider>
            </div>

            {/* Navigation Control */}
            {currentStep !== steps.length && <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Klaim;
