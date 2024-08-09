import Image from "next/image";
import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import Coin from "../Coin";

interface NodeData {
  data: {
    label: string;
    image: string;
    description?: string;
  };
  targetPosition?: Position;
  sourcePosition?: Position;
}

function CustomNode({
  data,
  targetPosition = Position.Top,
  sourcePosition = Position.Bottom,
}: NodeData) {
  return (
    <>
      <div className="pt-0 md:pt-4 ">
        <div className="px-4 py-2 shadow-md rounded-lg bg-highlight-dark-500 border-2 border-white">
          <div className="flex items-center">
            <div className="rounded-full w-6 h-6 flex justify-center items-center bg-gray-100">

              <Coin name={data.image} />
            </div>
            <div className="ml-2">
              <div className="text-lg text-white font-bold">{data.label}</div>
            </div>
          </div>

          <Handle
            type="target"
            position={targetPosition}
            className="w-1 !bg-primary-gold-500"
          />
          <Handle
            type="source"
            position={sourcePosition}
            className="w-1 !bg-primary-gold-500"
          />
        </div>
        <div className="flex items-center justify-center w-full">
          <span className="text-gray-400 text-xs ">{data.description}</span>
        </div>
      </div>
    </>
  );
}

export default memo(CustomNode);
