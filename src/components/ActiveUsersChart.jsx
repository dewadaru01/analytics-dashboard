import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CustomTooltip from './CustomTooltip';

const ActiveUsersChart = ({ data, theme, isDark }) => {
  return (
    <div className={`${theme.card} ${theme.border} border rounded-xl p-6`}>
      <h3 className={`${theme.text} text-lg font-semibold mb-4`}>Harga Buyback Emas</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/> {/* Orange */}
              <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={theme.gridStroke} />
          <XAxis dataKey="date" stroke={isDark ? '#9ca3af' : '#6b7280'} />
          <YAxis stroke={isDark ? '#9ca3af' : '#6b7280'} domain={['auto', 'auto']} />
          <Tooltip content={<CustomTooltip theme={theme} />} />
          <Area
            type="monotone"
            dataKey="activeUsers"
            stroke="#f97316"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorActive)"
            name="Buyback"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActiveUsersChart;