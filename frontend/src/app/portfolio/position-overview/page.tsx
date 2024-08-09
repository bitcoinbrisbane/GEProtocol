import React from "react";
import InfoCard from "@/components/liquidity/InfoCard";
import TableCardPortfolio from "@/components/portfolio/position-overview/TableCardPortfolio";
import TableCreatedFarm from "@/components/portfolio/position-overview/TableCreatedFarm";

const PositionOverview: React.FC = () => {
  return (
    <div className="container mx-auto ">
      <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-4">
        <InfoCard title="$45,858" description="Net Value" />
        <InfoCard title="$38,6" description="Fees" />
        <InfoCard title="3" description="Position" />
      </div>

      <div className="flex flex-wrap space-y-5">
        <TableCardPortfolio />

        <TableCreatedFarm/>
      </div>
    </div>
  );
};

export default PositionOverview;
