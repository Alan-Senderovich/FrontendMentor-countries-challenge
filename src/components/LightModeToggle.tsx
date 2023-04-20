import { useState } from 'react';
import { SunIcon } from '@heroicons/react/24/solid'
import { MoonIcon } from '@heroicons/react/24/solid'

function LightModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleLightMode = () => {
        setIsDarkMode(!isDarkMode)
        document.documentElement.classList.toggle('dark')
    }

    return (
        <>
            <button onClick={toggleLightMode}>
                {isDarkMode ? 
                <div className='flex gap-2'>
                    <SunIcon className='h-6 w-6'/>
                    <span>Light Mode</span>
                </div>
                 : 
                 <div className='flex gap-2'>
                    <MoonIcon className='h-6 w-6'/>
                    <span>Dark Mode</span>
                </div>
                 }
            </button>
        </>
    )
}

export default LightModeToggle;
