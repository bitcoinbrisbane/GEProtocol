import React from 'react';
import LiquidityChartV3 from '@/components/liquidity/concentrated/LiquidityChartV3';

const TestChart: React.FC = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Liquidity Pool',
        data: [30, 45, 60, 55, 70, 80],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Liquidity Pool Chart</h1>
      <LiquidityChartV3  />
    </div>
  );
};

export default TestChart;
