import React from "react";
import InfoCard from "@/components/liquidity/InfoCard";
import TableLiquidityV2 from "@/components/liquidity/standard/TableLiquidityV2";

const StandardPools: React.FC = () => {
  return (
    <div className="container mx-auto ">
      <TableLiquidityV2 />
    </div>
  );
};

export default StandardPools;
