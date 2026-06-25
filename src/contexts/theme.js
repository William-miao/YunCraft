import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const getInitialTheme = () => {
  const saved = localStorage.getItem('themeName')
  if (saved === 'dark' || saved === 'light') return saved

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(getInitialTheme)

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (event) => {
      if (!localStorage.getItem('themeName')) {
        setThemeName(event.matches ? 'dark' : 'light')
      }
    }

    darkMediaQuery.addEventListener('change', handleChange)
    return () => darkMediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark'
    localStorage.setItem('themeName', name)
    setThemeName(name)
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
