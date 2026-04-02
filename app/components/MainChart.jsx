"use client"
import React from 'react';
import AreaChart from '../data/AreaChart';
import { Area, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { date: 'Mar 28', balance: 1500 },
  { date: 'Mar 20', balance: 5100 },
  { date: 'Mar 21', balance: 8100 },
  { date: 'Mar 22', balance: 4500 },
  { date: 'Mar 23', balance: 8800 },
  { date: 'Mar 24', balance: 11000 },
  { date: 'Mar 25', balance: 13200 },
  { date: 'Mar 30', balance: 10500 },
  { date: 'Oct 15', balance: 12000 },
];

const MainChart = () => {
  return (
    <div style={{ width: '100%', height: 400, backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}>
      <h3>Balance Trend (Last 30 Days)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4ade80" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
            </linearGradient>
          </defs>
          
          <CartesianGrid strokeDasharray="3 3" vertical={false} verticalFill={['#fff']} />
          
          <XAxis 
            dataKey="date" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#666', fontSize: 12 }} 
          />
          
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tickFormatter={(value) => `$${value.toLocaleString()}`}
            tick={{ fill: '#666', fontSize: 12 }}
          />
          
          <Tooltip />
          
          <Area
            type="monotone"
            dataKey="balance"
            stroke="#16a34a"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorBalance)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MainChart;