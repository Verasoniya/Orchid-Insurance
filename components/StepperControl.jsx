import React from "react";
import Button from "./Button";

function StepperControl({ handleClick, currentStep, steps }) {
  return (
    <div className="w-full flex justify-around mt-4 mb-8">
      {/* Back button */}
      <button
        className={`px-4 py-1 rounded-lg font-work-sans text-sm md:text-lg border border-[#69779B] text-[#69779B] bg-[#F9F9F9] hover:border-0 hover:bg-[#69779C] hover:text-[#F9F9F9] ${currentStep === 1 ? "cursor-not-allowed" : ""}`}
        onClick={() => handleClick()}
      >
        Kembali
      </button>

      {/* Next button */}
      <Button label={`${currentStep === steps.length - 1 ? "Kirim" : "Lanjut"}`} onClick={() => handleClick("next")} />
    </div>
  );
}

export default StepperControl;
