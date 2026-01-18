// Generates realistic financial trend data
export const generateData = (days) => {
  const data = [];
  const now = Date.now();
  const dayMs = 24 * 60 * 60 * 1000;
  
  // Base values for trends
  let currentGold = 1542000;
  let currentIHSG = 7328;
  
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now - i * dayMs);
    
    // Create realistic daily movements
    const goldChange = (Math.random() - 0.45) * 8000; // Slight upward trend
    const ihsgChange = (Math.random() - 0.5) * 45;
    
    currentGold += goldChange;
    currentIHSG += ihsgChange;

    data.push({
      date: date.toLocaleDateString('id-ID', { month: 'short', day: 'numeric' }),
      // Mapping internal keys to financial data:
      revenue: Math.floor(currentGold), // Maps to Gold Price
      users: Math.floor(currentIHSG),   // Maps to IHSG
      conversion: Math.floor(15800 + (Math.random() - 0.5) * 200), // Maps to USD/IDR
      activeUsers: Math.floor(currentGold * 0.92) // Maps to Buyback
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