'use client';

import { BarChart, Bar, Legend, Tooltip, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function ProgressChart() {
  const data = [
    { name: 'Frontend', completion: 60 },
    { name: 'Backend', completion: 60 },
    { name: 'Deployed', completion: 40 },
    { name: 'Testing', completion: 40 },
    { name: 'Documentation', completion: 40 }
  ];

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 60
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            angle={-45}
            textAnchor="end"
            height={60}
            interval={0}
            tick={{
              fontSize: 12,
              fontFamily: 'system-ui'
            }}
          />
          <YAxis
            tick={{
              fontSize: 12,
              fontFamily: 'system-ui'
            }}
            label={{ 
              value: 'Completion (%)', 
              angle: -90, 
              position: 'insideLeft',
              style: { textAnchor: 'middle' }
            }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '12px'
            }}
          />
          <Legend 
            verticalAlign="top"
            height={36}
            wrapperStyle={{
              fontSize: '12px',
              fontFamily: 'system-ui'
            }}
          />
          <Bar 
            dataKey="completion" 
            fill="#3B82F6"
            radius={[4, 4, 0, 0]}
            name="Completion (%)"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}