import CreateLiquidityV2 from "@/components/liquidity/standard/CreateLiquidityV2";
import React from "react";


const StandardPools: React.FC = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex-1 flex flex-col items-center px-1 md:px-3">
        <div className="mt-0 md:mt-20 w-full max-w-lg z-10">
          <CreateLiquidityV2 />
        </div>
      </div>
    </div>
  );
};

export default StandardPools;
