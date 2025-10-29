'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../context/ThemeContext'

function Mode() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center rounded-full p-2 
                text-gray-900 dark:text-gray-200 
                hover:bg-gray-100 dark:hover:bg-gray-800 
                transition-all duration-500 transform active:scale-90"
    >
      {theme === 'dark' ? (
        <SunIcon className="h-6 w-6 text-amber-400 transition-transform duration-500 rotate-0 hover:rotate-45" />
      ) : (
        <MoonIcon className="h-6 w-6 text-gray-900 transition-transform duration-500 hover:-rotate-45" />
      )}
    </button>
  )
}

export default Mode
