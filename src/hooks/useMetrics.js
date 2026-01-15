import { useState, useEffect } from 'react';

export const useMetrics = () => {
  const [metrics, setMetrics] = useState({
    revenue: 284750,
    users: 12847,
    conversion: 3.24,
    activeUsers: 8234
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        revenue: 284750 + Math.floor(Math.random() * 10000),
        users: 12847 + Math.floor(Math.random() * 500),
        conversion: parseFloat((3.24 + (Math.random() - 0.5) * 0.5).toFixed(2)),
        activeUsers: 8234 + Math.floor(Math.random() * 300)
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return metrics;
};