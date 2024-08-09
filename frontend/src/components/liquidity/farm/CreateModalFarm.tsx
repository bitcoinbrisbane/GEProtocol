import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CustomRadioButton from "@/components/CustomRadioButton";
import Modal from "@/components/Modal";

const CreateModalPoolFarm: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>("option1");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleSubmit = () => {
    if (selectedValue) {
      if (selectedValue === "option1") {
        router.push("/liquidity/standard-pools/create");
      } else if (selectedValue === "option2") {
        router.push("/liquidity/farms/create-farms");
      }
    }
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-primary-gold-500 text-white py-2 px-2 rounded text-[12px] md:text-sm font-bold  md:py-2 md:px-4 text-center"
      >
        + CREATE 
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="font-bold text-white mt-2 mb-4"> I want to start from...</div>
        <div className="flex flex-col gap-4 mb-4 text-white">
          <CustomRadioButton
            value="option1"
            checked={selectedValue === "option1"}
            onChange={handleChange}
            label="Standard Pools"
            description="Create a liquidity pool for any token pair. For detailed instructions, read the guide for CLMM or Standard Pools"
          />
          <CustomRadioButton
            value="option2"
            checked={selectedValue === "option2"}
            onChange={handleChange}
            label="Create Farms"
            description="A farm can be created for any pool that is already live. For detailed instructions, read the guide for CLMM or Standard Pools"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="font-bold px-4 py-2 w-full bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-300"
        >
          CONTINUE
        </button>
      </Modal>
    </>
  );
};

export default CreateModalPoolFarm;
