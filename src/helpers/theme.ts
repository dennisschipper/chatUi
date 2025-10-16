export type Theme = 'light' | 'dark'

export const setTheme = (element: HTMLElement, theme: Theme): void => {
  element.setAttribute('data-theme', theme)
}

export const getTheme = (element: HTMLElement): Theme | null => {
  const theme = element.getAttribute('data-theme')
  return theme === 'light' || theme === 'dark' ? theme : null
}

export const toggleTheme = (element: HTMLElement): Theme => {
  const currentTheme = getTheme(element) || 'light'
  const newTheme: Theme = currentTheme === 'light' ? 'dark' : 'light'
  setTheme(element, newTheme)
  return newTheme
}
