"use client"
import data from '../data/data'
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'
import React from 'react'

const MainChart = () => {
  return (
    <div className="w-full h-full p-4">
      <h3 className="text-slate-900 font-bold mb-4">Balance Trend (Last 30 Days)</h3>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis 
            dataKey="date" 
            axisLine={false} 
            tickLine={false} 
            tick={{fill: '#64748b', fontSize: 12}}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{fill: '#64748b', fontSize: 12}}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip />
          <Area 
            type="monotone" 
            dataKey="balance" 
            stroke="#22c55e" 
            fillOpacity={1} 
            fill="url(#colorBalance)" 
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default MainChart