'use client';
import React, { useState } from 'react';
import { AgCharts } from 'ag-charts-react';

const ChartComponent = () => {
  const [options, setOptions] = useState({
    // 1. Data
    data: [
      { date: 'Mar 28', balance: 1500 },
      { date: 'Mar 20', balance: 5100 },
      { date: 'Mar 21', balance: 8100 },
      { date: 'Mar 22', balance: 4500 },
      { date: 'Mar 23', balance: 8800 },
      { date: 'Mar 24', balance: 11000 },
      { date: 'Mar 25', balance: 13200 },
      { date: 'Mar 30', balance: 10500 },
      { date: 'Oct 15', balance: 12000 },
    ],
    // 2. Chart Type & Styling
    series: [
      {
        type: 'area',
        xKey: 'date',
        yKey: 'balance',
        yName: 'Balance',
        interpolation: { type: 'smooth' }, // This creates the wave look
        fill: '#4ade80',
        fillOpacity: 0.3,
        stroke: '#16a34a',
        strokeWidth: 3,
        marker: { enabled: false }, // Hides the dots on the line
      },
    ],
    // 3. Axes & Titles
    axes: [
      {
        type: 'category',
        position: 'bottom',
      },
      {
        type: 'number',
        position: 'left',
        label: {
          formatter: (params) => `$${params.value.toLocaleString()}`,
        },
      },
    ],
    title: {
      text: 'Balance Trend (Last 30 Days)',
    },
  });

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <AgCharts options={options} />
    </div>
  );
};

export default ChartComponent;