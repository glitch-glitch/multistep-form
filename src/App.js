import { useState } from "react";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import { UseContextProvider } from "./contexts/StepperContext";

import Resources from "./components/steps/Resources";
import Details from "./components/steps/Details";
import Cost from "./components/steps/Cost";
import Final from "./components/steps/Final";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Resources",
    "Details",
    "Cost",
    "Complete",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Resources />;
      case 2:
        return <Details />;
      case 3:
        return <Cost />;
      case 4:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10 ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default App;
