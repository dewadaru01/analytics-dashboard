import React from 'react';

const TimeRangeSelector = ({ timeRange, onRangeChange, theme }) => {
  const ranges = ['24h', '7d', '30d', '90d'];

  return (
    <div className="flex gap-2">
      {ranges.map((range) => (
        <button
          key={range}
          onClick={() => onRangeChange(range)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            timeRange === range
              ? 'bg-blue-500 text-white shadow-lg'
              : `${theme.card} ${theme.text} ${theme.border} border ${theme.hover}`
          }`}
        >
          {range}
        </button>
      ))}
    </div>
  );
};

export default TimeRangeSelector;