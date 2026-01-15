// Theme configuration for dark and light modes
export const getTheme = (isDark) => {
  return isDark ? {
    bg: 'bg-gray-900',
    card: 'bg-gray-800',
    text: 'text-gray-100',
    subtext: 'text-gray-400',
    border: 'border-gray-700',
    hover: 'hover:bg-gray-700',
    gridStroke: '#374151'
  } : {
    bg: 'bg-gray-50',
    card: 'bg-white',
    text: 'text-gray-900',
    subtext: 'text-gray-600',
    border: 'border-gray-200',
    hover: 'hover:bg-gray-50',
    gridStroke: '#e5e7eb'
  };
};