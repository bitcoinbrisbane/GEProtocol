import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiEye, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Card from "../../Card";

interface Asset {
  name: string;
  image: string;
  amount: number;
}

interface PositionData {
  position: string;
  assets: Asset[];
  totalValue: string;
  feesAPY: string;
  totalFees: string;
  pnl: string;
  action: string;
  category: string;
}

interface TableConcentratedPoolsProps {
  data: PositionData[];
  setSelectedRow: React.Dispatch<React.SetStateAction<PositionData | null>>;
  setSelectedCategory?: React.Dispatch<React.SetStateAction<string>>;
}

const TableConcentratedPools: React.FC<TableConcentratedPoolsProps> = ({
  data,
  setSelectedRow,
  setSelectedCategory,
}) => {
  const [openRows, setOpenRows] = useState<Set<number>>(new Set());
  const filteredData = data.filter(
    (item) => item.category === "concentrated-pools"
  );

  const toggleRow = (index: number) => {
    setOpenRows((prev) => {
      const newOpenRows = new Set(prev);
      if (newOpenRows.has(index)) {
        newOpenRows.delete(index);
      } else {
        newOpenRows.add(index);
      }
      return newOpenRows;
    });
  };

  return (
    <Card className="w-full mt-2 md:mt-4">
      <div className="dark:text-white p-1">
        <table className="min-w-full border-collapse dark:text-white/80">
          <thead>
            <tr className="border-y dark:border-highlight-dark-500 text-[12px] md:text-md lg:text-lg">
              <th className="py-4 px-2 text-start">Position</th>
              <th className="py-4 px-2 text-center hidden md:table-cell">
                Assets
              </th>
              <th className="py-4 px-2 text-center hidden md:table-cell">
                Total Value
              </th>
              <th className="py-4 px-2 text-center hidden md:table-cell">
                Fees APY
              </th>
              <th className="py-4 px-2 text-center hidden md:table-cell">
                Total Fees
              </th>
              <th className="py-4 px-2 text-center">PnL</th>
              <th className="py-4 px-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <React.Fragment key={index}>
                <tr className="text-[12px] md:text-md lg:text-lg">
                  <td className="py-4 px-2 flex items-center text-center">
                    <div className="flex items-center mr-1">
                      <Image
                        width={32}
                        height={32}
                        src={item.assets[0].image}
                        alt={item.assets[0].name}
                        className="w-6 h-6 -mr-[3px] md:w-8 md:h-8 md:-mr-[4px]"
                      />
                      <Image
                        width={32}
                        height={32}
                        src={item.assets[1].image}
                        alt={item.assets[1].name}
                        className="w-6 h-6 -ml-[3px] md:w-8 md:h-8 md:-ml-[4px]"
                      />
                      {item.assets[0].name} - {item.assets[1].name}
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center hidden md:table-cell">
                    <div className="flex items-center mr-1 text-sm">
                      {item.assets[0].amount / 1000}K
                      <Image
                        width={32}
                        height={32}
                        src={item.assets[0].image}
                        alt={item.assets[0].name}
                        className="w-2 h-2 md:w-4 md:h-4"
                      />
                      {item.assets[1].amount / 1000}K
                      <Image
                        width={32}
                        height={32}
                        src={item.assets[1].image}
                        alt={item.assets[1].name}
                        className="w-2 h-2 md:w-4 md:h-4"
                      />
                    </div>
                  </td>
                  <td className="py-4 px-2 text-center hidden md:table-cell">
                    {item.totalValue}
                  </td>
                  <td className="py-4 px-2 text-center hidden md:table-cell">
                    {item.feesAPY}
                  </td>
                  <td className="py-4 px-2 text-center hidden md:table-cell">
                    {item.totalFees}
                  </td>
                  <td className="py-4 px-2 text-center text-green-500">
                    {item.pnl}
                  </td>
                  <td className="py-4 px-2 text-center">
                    <Link
                      href={"/liquidity/concentrated-pools/remove"}
                      className="w-[40px] justify-center bg-primary-gold-500/20 text-primary-gold-500 p-2 mr-1 rounded text-xs font-semibold hidden md:inline-flex"
                    >
                      -
                    </Link>
                    <Link
                      href={item.action}
                      className="w-[40px] justify-center bg-primary-gold-500/20 text-primary-gold-500 p-2 mr-1 rounded text-xs font-semibold hidden md:inline-flex"
                    >
                      +
                    </Link>
                    <button
                      onClick={() => setSelectedRow(item)}
                      className="inline md:hidden bg-primary-gold-500/20 text-primary-gold-500 px-4 py-2 rounded text-xs font-semibold"
                    >
                      <FiEye />
                    </button>
                    <button
                      onClick={() => toggleRow(index)}
                      className="hidden md:inline bg-primary-gold-500/20 text-primary-gold-500 px-4 py-2 rounded text-xs font-semibold"
                    >
                      {openRows.has(index) ? (
                        <div className="flex">
                          LESS <FiChevronUp className="ml-2" />
                        </div>
                      ) : (
                        <div className="flex">
                          MORE <FiChevronDown className="ml-2" />
                        </div>
                      )}
                    </button>
                  </td>
                </tr>
                {openRows.has(index) && (
                  <tr>
                    <td colSpan={7} className="pb-4 px-2">
                      <div className="w-full">
                        {/* Content for the expanded view */}
                        <div className="flex flex-wrap gap-4">
                          <div className="bg-primary-dark-500 flex-1 p-4 rounded">
                            Additional details for position {item.position}...
                          </div>
                          <div className="flex-1 flex flex-col  gap-2 ">
                            <div className="bg-primary-dark-500 flex-1 p-4 rounded">
                              Additional details for position {item.position}...
                            </div>
                            <div className="bg-primary-dark-500 flex-1 p-4 rounded">
                              Additional details for position {item.position}...
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default TableConcentratedPools;
