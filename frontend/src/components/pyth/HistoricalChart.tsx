// components/pyth/HistoricalChart.tsx
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

interface HistoricalChartProps {
  symbol: string;
  days: number;
  onSymbolChange: (symbol: string) => void;
  onDaysChange: (days: number) => void;
}

const HistoricalChart: React.FC<HistoricalChartProps> = ({ symbol, days, onSymbolChange, onDaysChange }) => {
  const [chartData, setChartData] = useState<any>(null);
  const [search, setSearch] = useState<string>('');
  const [symbols, setSymbols] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSymbols = async () => {
      try {
        const response = await fetch('https://benchmarks.pyth.network/v1/shims/tradingview/symbol_info');
        const data = await response.json();
        setSymbols(data.symbol);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching symbols:', error);
      }
    };

    fetchSymbols();
  }, []);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      const now = Math.floor(Date.now() / 1000);
      const start = now - days * 24 * 60 * 60;

      let resolution = 'D';
      if (days <= 1) {
        resolution = '5';
      } else if (days <= 7) {
        resolution = 'D';
      } else if (days <= 30) {
        resolution = 'D';
      } else if (days <= 90) {
        resolution = 'D';
      }

      try {
        const response = await fetch(
          `https://benchmarks.pyth.network/v1/shims/tradingview/history?symbol=${symbol}&resolution=${resolution}&from=${start}&to=${now}`
        );
        const data = await response.json();

        if (data.s === 'ok') {
          const labels = data.t.map((timestamp: number) =>
            days === 1 
              ? new Date(timestamp * 1000).toLocaleTimeString() 
              : new Date(timestamp * 1000).toLocaleDateString()
          );
          const prices = data.c;

          setChartData({
            labels,
            datasets: [
              {
                label: `${symbol} Price`,
                data: prices,
                borderColor: 'rgba(255, 171, 0, 1)',
                backgroundColor: 'rgba(255, 171, 0, 0.2)',
              },
            ],
          });
        } else {
          console.error('Error fetching historical data:', data);
        }
      } catch (error) {
        console.error('Error fetching historical data:', error);
      }
    };

    fetchHistoricalData();
  }, [symbol, days]);

  const options = {
    scales: {
      x: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
      },
      y: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
    },
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div className="flex justify-between mb-4">
        <select
          value={symbol}
          onChange={(e) => onSymbolChange(e.target.value)}
          className="p-2 border rounded bg-secondary-dark-500"
        >
          {loading ? (
            <option>Loading symbols...</option>
          ) : (
            symbols.map((sym) => (
              <option key={sym} value={sym}>
                {sym}
              </option>
            ))
          )}
        </select>
        <div className="flex space-x-0">
          <button onClick={() => onDaysChange(1)} className="p-2 bg-highlight-dark-500 rounded-l">
            24H
          </button>
          <button onClick={() => onDaysChange(7)} className="p-2 bg-highlight-dark-500 ">
            7D
          </button>
          <button onClick={() => onDaysChange(30)} className="p-2 bg-highlight-dark-500 ">
            30D
          </button>
          <button onClick={() => onDaysChange(90)} className="p-2 bg-highlight-dark-500 rounded-r">
            90D
          </button>
        </div>
      </div>
      {chartData ? (
        <Line data={chartData} options={options} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HistoricalChart;
