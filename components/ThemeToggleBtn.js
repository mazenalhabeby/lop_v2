import {IconButton} from '@mui/material'
import {useTheme} from 'next-themes'
import React, {useEffect, useState} from 'react'
import {HiMoon, HiSun} from 'react-icons/hi'

const ThemeToggleBtn = () => {
  const [mounted, setMounted] = useState(false)
  const {systemTheme, theme, setTheme} = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return (
        <HiSun
          className="h-7 w-7"
          role="button"
          onClick={() => setTheme('light')}
        />
      )
    } else {
      return (
        <HiMoon
          className="h-7 w-7"
          role="button"
          onClick={() => setTheme('dark')}
        />
      )
    }
  }
  return <div>{renderThemeChanger()}</div>
}

export default ThemeToggleBtn
