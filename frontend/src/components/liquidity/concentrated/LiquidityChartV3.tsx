import React, { useState, useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    fill: boolean;
  }[];
}

const LiquidityChartV3: React.FC = () => {
  const [selection, setSelection] = useState<{ min: number; max: number }>({
    min: 105,
    max: 107,
  });
  const [minBarPosition, setMinBarPosition] = useState<number>(20);
  const [maxBarPosition, setMaxBarPosition] = useState<number>(80);
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    datasets: [
      {
        label: "Liquidity Pool",
        data: [],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  });
  const chartRef = useRef<any>(null);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      const response = {
        "id": "e58bccd9-803d-4e72-9b2e-7658e33279bd",
        "success": true,
        "data": {
          "count": 1909,
          "line": [
            { "price": 103.94568170864581, "liquidity": "10511213885307", "tick": -22640 },
            { "price": 104.04967417838685, "liquidity": "10513207490218", "tick": -22630 },
            { "price": 104.46668549152125, "liquidity": "10588203064204", "tick": -22590 },
            { "price": 104.5711991995594, "liquidity": "10588199170475", "tick": -22580 },
            { "price": 104.67581746834931, "liquidity": "10588210799696", "tick": -22570 },
            { "price": 104.78054040249879, "liquidity": "10588179082136", "tick": -22560 },
            { "price": 104.88536810672028, "liquidity": "10587827331754", "tick": -22550 },
            { "price": 104.99030068583109, "liquidity": "11436497064851", "tick": -22540 },
            { "price": 105.30572872224496, "liquidity": "11433235804715", "tick": -22510 },
            { "price": 105.41108185118401, "liquidity": "11540123888739", "tick": -22500 },
            { "price": 105.62210441616152, "liquidity": "11485177577806", "tick": -22480 },
            { "price": 105.72777406320152, "liquidity": "11878231745692", "tick": -22470 },
            { "price": 105.8335494274526, "liquidity": "11888734989467", "tick": -22460 },
            { "price": 106.04541773075289, "liquidity": "11899316118979", "tick": -22440 },
            { "price": 106.25771017345116, "liquidity": "11898747937977", "tick": -22420 },
            { "price": 106.47042760463262, "liquidity": "11902285595856", "tick": -22400 },
            { "price": 106.5769459567083, "liquidity": "11902364173807", "tick": -22390 },
            { "price": 106.79030246636835, "liquidity": "11885028927305", "tick": -22370 },
            { "price": 106.89714083728786, "liquidity": "12293602949123", "tick": -22360 },
            { "price": 107.11113834544452, "liquidity": "12327032711586", "tick": -22340 }
          ]
        }
      };

      // Convert data into chart format
      const prices = response.data.line.map(item => item.price);
      const liquidity = response.data.line.map(item => parseFloat(item.liquidity) / 1e12); // Normalize liquidity
      const labels = prices.map(price => price.toFixed(0));

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Liquidity Pool",
            data: liquidity,
            borderColor: "rgba(255, 171, 0,1)",
            backgroundColor: "rgba(255, 171, 0, 0.2)",
            fill: true,
          },
        ],
      });
    };

    fetchData();
  }, []);

  const chartOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `${context.dataset.label}: ${context.raw.toFixed(2)}`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        borderColor: "rgba(255, 171, 0, 1)",
        borderWidth: 2,
      },
      point: {
        radius: 0,
      },
    },
    scales: {
      x: {
        ticks: {
          callback: function (value: any) {
            return `${value}`;
          },
        },
      },
      y: {
        display: false, // Hide y-axis labels
      },
    },
  };

  const handleBarDrag = (
    event: React.MouseEvent<HTMLDivElement>,
    isLeftBar: boolean
  ) => {
    const canvas = chartRef.current.canvas;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = Math.min(Math.max(x / canvas.clientWidth, 0), 1);
    const minPrice = Math.min(...chartData.labels.map(Number));
    const maxPrice = Math.max(...chartData.labels.map(Number));
    const priceRange = maxPrice - minPrice;
    const newPrice = minPrice + priceRange * percentage;

    if (isLeftBar) {
      setSelection((prev) => ({ ...prev, min: newPrice }));
      setMinBarPosition(percentage * 100);
    } else {
      setSelection((prev) => ({ ...prev, max: newPrice }));
      setMaxBarPosition(percentage * 100);
    }
  };

  return (
    <>
      <div className="relative">
        <Line data={chartData} options={chartOptions} ref={chartRef} />
        <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col items-center">
          <div className="relative w-full h-96">
            <div
              className="absolute bg-red-500"
              style={{
                height: "100%", // Set height to match chart
                width: "20px",
                left: `${minBarPosition}%`,
                cursor: "pointer",
              }}
              onMouseDown={(e) => handleBarDrag(e, true)}
            />
            <div
              className="absolute bg-blue-500"
              style={{
                height: "100%", // Set height to match chart
                width: "20px",
                left: `${maxBarPosition}%`,
                cursor: "pointer",
              }}
              onMouseDown={(e) => handleBarDrag(e, false)}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        <input
          type="number"
          value={selection.min.toFixed(2)}
          onChange={(e) =>
            setSelection({ ...selection, min: Number(e.target.value) })
          }
          className="p-2 border border-gray-300 rounded bg-primary-dark-500"
        />
        <input
          type="number"
          value={selection.max.toFixed(2)}
          onChange={(e) =>
            setSelection({ ...selection, max: Number(e.target.value) })
          }
          className="p-2 border border-gray-300 rounded bg-primary-dark-500"
        />
      </div>
    </>
  );
};

export default LiquidityChartV3;
