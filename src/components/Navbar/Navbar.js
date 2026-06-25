import { useContext, useState } from 'react'
import { Button } from 'antd'
import {
  CloseOutlined,
  MenuOutlined,
  MoonOutlined,
  SunOutlined,
} from '@ant-design/icons'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              作品
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              联系
            </a>
          </li>
        ) : null}
      </ul>

      <Button
        type='text'
        onClick={toggleTheme}
        className='nav__theme'
        aria-label='toggle theme'
        icon={themeName === 'dark' ? <SunOutlined /> : <MoonOutlined />}
      />

      <Button
        type='text'
        onClick={toggleNavList}
        className='nav__hamburger'
        aria-label='toggle navigation'
        icon={showNavList ? <CloseOutlined /> : <MenuOutlined />}
      />
    </nav>
  )
}

export default Navbar
