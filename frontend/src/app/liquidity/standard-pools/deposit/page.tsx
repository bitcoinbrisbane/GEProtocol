import DepositV2 from "@/components/liquidity/standard/DepositV2";
import React from "react";


const StandardPools: React.FC = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex-1 flex flex-col items-center px-1 md:px-3">
        <div className="mt-10 md:mt-20 w-full max-w-lg z-10">
          <DepositV2 />
        </div>
      </div>
    </div>
  );
};

export default StandardPools;
