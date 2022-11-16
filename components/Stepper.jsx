import React, { useEffect, useState, useRef } from "react";

function Stepper({ steps, currentStep }) {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.length) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;

        //step completed
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;

        //step pending
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );
    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div key={index} className={index !== newStep.length - 1 ? "w-full flex items-center" : "flex items-center"}>
        <div className="relative flex flex-col items-center font-bold text-xs lg:text-xl text-[#69779B]">
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-[#b4c0dd] h-8 lg:h-12 w-8 lg:w-12 flex items-center justify-center py-3 ${
              step.selected ? "bg-[#69779B] text-[#F9F9F9] font-bold border border-[#69779B]" : ""
            }`}
          >
            {/* Display number */}

            {step.completed ? <span className="text-[#F9F9F9] font-bold text-xs lg:text-xl">&#10003;</span> : index + 1}
          </div>

          <div className={`absolute top-0 text-center mt-8 lg:mt-14 w-12 lg:w-32 text-[0.5rem] lg:text-xs font-medium uppercase ${step.highlighted ? "text-[#69779B]" : "text-[#b4c0dd]"}`}>
            {/* Display description */}
            {step.description}
          </div>
        </div>
        <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${step.completed ? "border-[#69779B]" : "border-[#b4c0dd]"}`}>{/* Display line */}</div>
      </div>
    );
  });

  return <div className="flex justify-between items-center mx-4 p-4">{displaySteps}</div>;
}

export default Stepper;
