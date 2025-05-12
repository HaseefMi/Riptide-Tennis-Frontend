import './navigation.scss'
import Logo from '../../assets/riptide-logo.png'
import { useState, useEffect } from 'react'

const Navigation: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const menuLinks: string[] = ['Home', 'About', 'Events', 'Sign Up', 'Pricing', 'Careers', 'Contact', 'EN/中']

    useEffect(() => {
        const handleResize: EventListener = () => {
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
                <img src={Logo} height={100}/>
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
