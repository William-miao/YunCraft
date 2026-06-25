import { useContext } from 'react'
import { ConfigProvider, theme as antTheme } from 'antd'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  const isDark = themeName === 'dark'

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark
          ? antTheme.darkAlgorithm
          : antTheme.defaultAlgorithm,
        token: {
          colorPrimary: isDark ? '#90a0d9' : '#2978b5',
          borderRadius: 8,
        },
      }}
    >
      <div id='top' className={`${themeName} app`}>
        <Header />

        <main>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <ScrollToTop />
        <Footer />
      </div>
    </ConfigProvider>
  )
}

export default App
