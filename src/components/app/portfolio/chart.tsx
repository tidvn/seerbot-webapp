'use client';

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    day: '12/11',
    win: Math.floor(Math.random() * 5000) + 1000,
    lose: Math.floor(Math.random() * 5000) + 1000,
    all: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    day: '13/11',
    win: Math.floor(Math.random() * 5000) + 1000,
    lose: Math.floor(Math.random() * 5000) + 1000,
    all: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    day: '14/11',
    win: Math.floor(Math.random() * 5000) + 1000,
    lose: Math.floor(Math.random() * 5000) + 1000,
    all: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    day: '15/11',
    win: Math.floor(Math.random() * 5000) + 1000,
    lose: Math.floor(Math.random() * 5000) + 1000,
    all: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    day: '16/11',
    win: Math.floor(Math.random() * 5000) + 1000,
    lose: Math.floor(Math.random() * 5000) + 1000,
    all: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    day: '17/11',
    win: Math.floor(Math.random() * 5000) + 1000,
    lose: Math.floor(Math.random() * 5000) + 1000,
    all: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    day: '17/11',
    win: Math.floor(Math.random() * 5000) + 1000,
    lose: Math.floor(Math.random() * 5000) + 1000,
    all: Math.floor(Math.random() * 5000) + 1000,
  },{
    day: '18/11',
    win: Math.floor(Math.random() * 5000) + 1000,
    lose: Math.floor(Math.random() * 5000) + 1000,
    all: Math.floor(Math.random() * 5000) + 1000,
  },
];

export function DataChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        // width={500}
        // height={300}
        data={data}
        margin={{
          top: 5,
          right: 5,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="day"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="lose" stroke="#ff0000" name='Lose Trade' />
        <Line type="monotone" dataKey="win" stroke="#00cc00" name='Win Trade' />
        <Line type="monotone" dataKey="all" stroke="#0099ff" name='All Trade' />
      </LineChart>
    </ResponsiveContainer>
  );
}
