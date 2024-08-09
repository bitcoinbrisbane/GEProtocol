// components/trade/swap/SimpleChart.tsx
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

interface SimpleChartProps {
  generic_symbol: string;
}

const SimpleChart: React.FC<SimpleChartProps> = ({ generic_symbol }) => {
  const [chartData, setChartData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      // setLoading(true);
      const now = Math.floor(Date.now() / 1000);
      const start = now - 24 * 60 * 60; // 24 hours ago

      try {
        const response = await fetch(
          `https://benchmarks.pyth.network/v1/shims/tradingview/history?symbol=${generic_symbol}&resolution=5&from=${start}&to=${now}`
        );
        const data = await response.json();

        if (data.s === "ok") {
          const labels = data.t.map((timestamp: number) =>
            new Date(timestamp * 1000).toLocaleTimeString()
          );
          const prices = data.c;

          setChartData({
            labels,
            datasets: [
              {
                label: generic_symbol, // Adding a label to the dataset
                data: prices,
                borderColor: "rgba(255, 171, 0, 1)",
                backgroundColor: "rgba(255, 171, 0, 0.2)",
                borderWidth: 1,
                pointRadius: 0, // Hide points
              },
            ],
          });
        } else {
          console.error("Error fetching historical data:", data);
        }
      } catch (error) {
        console.error("Error fetching historical data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistoricalData();
  }, [generic_symbol]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false, // Hide x-axis
      },
      y: {
        display: false, // Hide y-axis
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: true, // Show tooltips
        callbacks: {
          label: (tooltipItem: any) => {
            return `Price: $${tooltipItem.raw}`; // Format tooltip label
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-full">
      {loading ? (
        <div className="h-full flex items-center justify-center">
          <div className="h-2/3 w-full animate-pulse bg-gray-200 dark:bg-highlight-dark-500 rounded-md">
          </div>
        </div>
      ) : (
        chartData && <Line data={chartData} options={options} />
      )}
    </div>
  );
};

export default SimpleChart;
