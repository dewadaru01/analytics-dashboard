import React from 'react';

const CustomTooltip = ({ active, payload, theme }) => {
  if (!active || !payload || !payload.length) return null;
  
  return (
    <div className={`${theme.card} ${theme.border} border rounded-lg p-3 shadow-xl`}>
      <p className={`${theme.text} text-sm font-semibold mb-2`}>
        {payload[0].payload.date}
      </p>
      {payload.map((entry, index) => (
        <div key={index} className="flex items-center gap-2 text-sm">
          <div 
            className="w-3 h-3 rounded-full" 
            style={{ backgroundColor: entry.color }} 
          />
          <span className={theme.subtext}>{entry.name}:</span>
          <span className={`${theme.text} font-semibold`}>
            {entry.name === 'Revenue' ? '$' : ''}
            {entry.value.toLocaleString()}
            {entry.name === 'Conversion' ? '%' : ''}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CustomTooltip;