// archivo theme.js
export const getTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  
  // Si hay tema guardado, usarlo
  if (savedTheme) {
    return savedTheme === 'dark';
  }
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export const setTheme = (isDark: string) => {
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
  // Aplicar al documento
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  return isDark;
};
