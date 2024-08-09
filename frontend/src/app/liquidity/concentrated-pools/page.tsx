import React from "react";
import TableLiquidityV3 from "@/components/liquidity/concentrated/TableLiquidityV3";

const ConcentratedPools: React.FC = () => {
  return (
    <div className="container mx-auto ">
      <TableLiquidityV3 />
    </div>
  );
};

export default ConcentratedPools;
