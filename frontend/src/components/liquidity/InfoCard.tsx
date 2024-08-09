// src/components/InfoCard.tsx
import React from "react";
import Card from "../Card";

interface InfoCardProps {
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
  return (
    <Card>
      <div className=" text-center">
        <p className="text-[10px] md:text-sm">{description}</p>
        <h3 className="text-sm md:text-[20px] lg:text-[30px] font-semibold  md:my-2">
          {title}
        </h3>
      </div>
    </Card>
  );
};

export default InfoCard;
