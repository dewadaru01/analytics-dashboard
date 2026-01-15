import React from 'react';
import { TrendingUp } from 'lucide-react';

const MetricCard = ({ title, value, change, icon: Icon, prefix = '', suffix = '', theme }) => {
  return (
    <div className={`${theme.card} ${theme.border} border rounded-xl p-6 transition-all duration-300 hover:shadow-lg`}>
      <div className="flex items-center justify-between mb-4">
        <span className={`${theme.subtext} text-sm font-medium`}>{title}</span>
        <Icon className={`${theme.subtext} w-5 h-5`} />
      </div>
      <div className="flex items-end justify-between">
        <div>
          <div className={`${theme.text} text-3xl font-bold mb-1`}>
            {prefix}{value.toLocaleString()}{suffix}
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-green-500 text-sm font-medium">{change}</span>
            <span className={`${theme.subtext} text-sm`}>vs last period</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;