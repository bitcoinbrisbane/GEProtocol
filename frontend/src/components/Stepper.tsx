import { useState, useEffect } from 'react';
import { FiCheck } from 'react-icons/fi';

interface Step {
  content: React.ReactNode;
}

interface StepperProps {
  steps: Step[];
  onFinish: () => void;
  initialStep?: number;  // Menambahkan properti ini
  onStepChange?: (step: number) => void;  // Menambahkan properti ini
}

const Stepper: React.FC<StepperProps> = ({ steps, onFinish, initialStep = 0, onStepChange }) => {
  const [currentStep, setCurrentStep] = useState<number>(initialStep);
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    setCurrentStep(initialStep);
  }, [initialStep]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      const newStep = currentStep + 1;
      setCurrentStep(newStep);
      onStepChange?.(newStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      const newStep = currentStep - 1;
      setCurrentStep(newStep);
      onStepChange?.(newStep);
    }
  };

  const handleStepClick = (step: number) => {
    if (step >= 0 && step < steps.length) {
      setCurrentStep(step);
      onStepChange?.(step);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        {/* STEP NUMBER */}
        {steps.map((_, index) => (
          <div
            key={index}
            className={`flex items-center ${index <= currentStep ? 'text-primary-gold-500' : 'text-gray-400'}`}
          >
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border ${
                index < currentStep ? 'border-primary-gold-500' : index === currentStep ? 'border-primary-gold-500' : 'border-gray-400'
              } cursor-pointer`}
              onClick={() => handleStepClick(index)}
            >
              {index < currentStep ? (
                <FiCheck className="w-5 h-5 text-primary-gold-500" />
              ) : (
                <span className={`text-xl ${index === currentStep ? 'text-primary-gold-500' : 'text-gray-400'}`}>
                  {index + 1}
                </span>
              )}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 ${
                  index < currentStep ? 'bg-primary-gold-500' : 'bg-gray-400'
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
      {/* STEP CONTENT */}
      <div className="mb-4">
        {steps[currentStep].content}
      </div>
      {/* STEP NAVIGATION */}
      <div className="flex justify-between space-x-2">
        {currentStep > 0 && (
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-highlight-dark-500 text-white rounded"
          >
            Back
          </button>
        )}
        {currentStep < steps.length - 1 ? (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-primary-gold-500 text-white rounded"
          >
            Next
          </button>
        ) : (
          <button
            onClick={onFinish}
            className="px-4 py-2 bg-primary-gold-500 text-white rounded"
          >
            Finish
          </button>
        )}
      </div>
    </>
  );
};

export default Stepper;
