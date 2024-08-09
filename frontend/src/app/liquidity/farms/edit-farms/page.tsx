"use client";
import EditReward from "@/components/liquidity/farm/RewardToken";
import { useState } from "react";

const Farms = () => {
    const [initialStep, setInitialStep] = useState<number>(0);

    const handleEditFarmReward = (value: number) => {
        setInitialStep(value);
      };
	return (
        <>
        <EditReward handleEditFarmReward={handleEditFarmReward}/>
        </>
    );
};

export default Farms;