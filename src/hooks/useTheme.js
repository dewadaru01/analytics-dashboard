import { useState } from 'react';
import { getTheme } from '../utils/theme';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(true);
  const theme = getTheme(isDark);
  
  const toggleTheme = () => setIsDark(!isDark);
  
  return { isDark, theme, toggleTheme };
};