import React from "react";
import RemoveLiquidityV2 from "@/components/liquidity/standard/RemoveLiquidityV2";

const StandardPools: React.FC = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex-1 flex flex-col items-center px-1 md:px-3">
        <div className="mt-10 md:mt-20 w-full max-w-lg z-10">
          <RemoveLiquidityV2 />
        </div>
      </div>
    </div>
  );
};

export default StandardPools;
