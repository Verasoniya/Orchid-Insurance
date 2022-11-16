import React from "react";

function Button({ className, label, onClick }) {
  return (
    <button className={`px-4 py-1 rounded-lg font-work-sans text-sm md:text-lg bg-[#69779B] text-[#F9F9F9] hover:bg-[#F9F9F9] hover:text-[#69779B] hover:border hover:border-[#69779B]  ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
