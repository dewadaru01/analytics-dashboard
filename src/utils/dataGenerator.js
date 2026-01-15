// Generates realistic time-series data with patterns
export const generateData = (days) => {
  const data = [];
  const now = Date.now();
  const dayMs = 24 * 60 * 60 * 1000;
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now - i * dayMs);
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    
    // Realistic patterns: lower on weekends, with some randomness
    const baseRevenue = isWeekend ? 15000 : 25000;
    const baseUsers = isWeekend ? 800 : 1400;
    
    data.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      revenue: Math.floor(baseRevenue + (Math.random() - 0.5) * 8000),
      users: Math.floor(baseUsers + (Math.random() - 0.5) * 400),
      conversion: parseFloat((2.5 + (Math.random() - 0.5) * 1.5).toFixed(2)),
      activeUsers: Math.floor((baseUsers * 0.6) + (Math.random() - 0.5) * 200)
    });
  }
  return data;
};

export const TIME_RANGES = {
  '24h': 1,
  '7d': 7,
  '30d': 30,
  '90d': 90
};