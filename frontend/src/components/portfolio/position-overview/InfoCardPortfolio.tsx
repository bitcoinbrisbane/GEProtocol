// src/components/portfolio/InfoCardPortfolio.tsx

import React from "react";
import Card from "../../Card";

interface InfoCardPortfolioProps {
  title: string;
  description: string;
  coinValue: string;
}

const InfoCardPortfolio: React.FC<InfoCardPortfolioProps> = ({
  title,
  description,
  coinValue,
}) => {
  return (
    <div
      className={`bg-white/80 text-black dark:text-white rounded-lg md:rounded-xl py-2 md:py-6 dark:bg-primary-dark-500 `}
    >
      <div className=" text-center">
        <p className="text-[10px] md:text-sm">{description}</p>
        <h3 className="text-sm md:text-[20px] lg:text-[30px] font-semibold  md:my-2">
          {title}
        </h3>
        <p className="text-[10px] md:text-sm">{coinValue}</p>
      </div>
    </div>
  );
};

export default InfoCardPortfolio;
