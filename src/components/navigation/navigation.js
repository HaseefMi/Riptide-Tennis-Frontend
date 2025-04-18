import './navigation.css'
import Logo from '../../assets/riptide-logo.png'
import { useState, useEffect } from 'react'

function Navigation() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showMenu, setShowMenu] = useState(false);
    const menuLinks = ['Home', 'About', 'Events', 'Pricing', 'Join Us', 'Contact', 'EN/中']

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);  
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    return (
        <>
        <div className='nav-container'>
            <div className='logo-container'>
                <img src={Logo} />
            </div>
            <div className='nav-links'>
            {windowWidth > 480 ? (
                menuLinks.map((link, index) =>  (
                    <p key={index} className='nav-link'>{link}</p>
                ))
            ) : (
                <p onClick={() => {setShowMenu(!showMenu)}} className='menu-icon'>☰</p>
            )}
            </div>
        </div>
        <div className='menu-mobile'>
                    {showMenu && (
                        menuLinks.map((link, index) =>  (
                            <p key={index} className='nav-link'>{link}</p>
                        ))
                    )}
        </div>
        </>
    )
}

export default Navigation;
