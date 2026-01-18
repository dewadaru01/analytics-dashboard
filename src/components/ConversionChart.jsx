import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CustomTooltip from './CustomTooltip';

const ConversionChart = ({ data, theme, isDark }) => {
  return (
    <div className={`${theme.card} ${theme.border} border rounded-xl p-6`}>
      <h3 className={`${theme.text} text-lg font-semibold mb-4`}>Kurs USD/IDR</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={theme.gridStroke} />
          <XAxis dataKey="date" stroke={isDark ? '#9ca3af' : '#6b7280'} />
          <YAxis stroke={isDark ? '#9ca3af' : '#6b7280'} domain={['auto', 'auto']} />
          <Tooltip content={<CustomTooltip theme={theme} />} />
          <Bar 
            dataKey="conversion" 
            fill="#8b5cf6" 
            radius={[8, 8, 0, 0]} 
            name="Kurs IDR" 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ConversionChart;