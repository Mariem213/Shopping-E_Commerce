import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'; 

const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // تطبيق الوضع الداكن
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    // تبديل الحالة
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button onClick={toggleDarkMode} className="toggle-button">
            {isDarkMode ? <FaSun size={24} className='text-main_color' /> : <FaMoon size={24} className='text-second_color' />}
        </button>
    );
};

export default DarkMode;
