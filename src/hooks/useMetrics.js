import { useState, useEffect } from 'react';

export const useMetrics = () => {
  // Initial realistic values (approximate market rates)
  const [metrics, setMetrics] = useState({
    goldPrice: 1542000,   // Harga Emas per gram (IDR)
    ihsg: 7328.54,        // Indeks Harga Saham Gabungan
    usdIdr: 15850,        // Kurs USD ke IDR
    goldBuyback: 1425000  // Harga Buyback Emas
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        // Simulate live market fluctuation
        goldPrice: prev.goldPrice + Math.floor((Math.random() - 0.5) * 500), 
        ihsg: parseFloat((prev.ihsg + (Math.random() - 0.5) * 2.5).toFixed(2)),
        usdIdr: prev.usdIdr + Math.floor((Math.random() - 0.5) * 10),
        goldBuyback: prev.goldBuyback + Math.floor((Math.random() - 0.5) * 500)
      }));
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return metrics;
};