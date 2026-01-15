import React, { useState, useEffect } from 'react';
import { DollarSign, Users, TrendingUp, Activity } from 'lucide-react';
import { generateData, TIME_RANGES } from './utils/dataGenerator';
import { useTheme } from './hooks/useTheme';
import { useMetrics } from './hooks/useMetrics';
import ThemeToggle from './components/ThemeToggle';
import TimeRangeSelector from './components/TimeRangeSelector';
import MetricCard from './components/MetricCard';
import RevenueChart from './components/RevenueChart';
import UsersChart from './components/UsersChart';
import ConversionChart from './components/ConversionChart';
import ActiveUsersChart from './components/ActiveUsersChart';

const App = () => {
  const { isDark, theme, toggleTheme } = useTheme();
  const metrics = useMetrics();
  const [timeRange, setTimeRange] = useState('7d');
  const [chartData, setChartData] = useState(generateData(7));

  useEffect(() => {
    const days = TIME_RANGES[timeRange];
    setChartData(generateData(days));
  }, [timeRange]);

  return (
    <div className={`${theme.bg} min-h-screen p-8 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className={`${theme.text} text-3xl font-bold mb-2`}>
              Analytics Dashboard
            </h1>
            <p className={theme.subtext}>Real-time performance metrics and insights</p>
          </div>
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} theme={theme} />
        </div>

        {/* Time Range Selector */}
        <div className="mb-6">
          <TimeRangeSelector 
            timeRange={timeRange} 
            onRangeChange={setTimeRange} 
            theme={theme} 
          />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Revenue"
            value={metrics.revenue}
            change="+12.5%"
            icon={DollarSign}
            prefix="$"
            theme={theme}
          />
          <MetricCard
            title="Total Users"
            value={metrics.users}
            change="+8.2%"
            icon={Users}
            theme={theme}
          />
          <MetricCard
            title="Conversion Rate"
            value={metrics.conversion}
            change="+2.4%"
            icon={TrendingUp}
            suffix="%"
            theme={theme}
          />
          <MetricCard
            title="Active Now"
            value={metrics.activeUsers}
            change="+15.3%"
            icon={Activity}
            theme={theme}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RevenueChart data={chartData} theme={theme} isDark={isDark} />
          <UsersChart data={chartData} theme={theme} isDark={isDark} />
          <ConversionChart data={chartData} theme={theme} isDark={isDark} />
          <ActiveUsersChart data={chartData} theme={theme} isDark={isDark} />
        </div>
      </div>
    </div>
  );
};

export default App;