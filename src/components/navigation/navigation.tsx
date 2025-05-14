import './navigation.scss'
import Logo from '../../assets/riptide-logo.png'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Navigation: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const menuLinks: string[] = ['Home', 'About', 'Events', 'Sign Up', 'Pricing', 'Careers', 'Policies', 'Contact'];
    const paths: string[] = ['/', '/about', '/events', '/sign-up', '/pricing', '/careers', '/policies', '/contact']
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize: EventListener = () => {
            setWindowWidth(window.innerWidth);  
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    const handleClick = (path: string) => {
        navigate(path);
    }

    return (
        <>
        <div className='nav-container'>
            <div className='logo-container'>
                <img src={Logo} onClick={() => handleClick('/')}/>
            </div>
            <div className='nav-links'>
            {windowWidth > 800 ? ( 
                menuLinks.map((link, index) =>  (
                    <p key={index} className='nav-link' onClick={() => handleClick(paths[index])}>{link}</p>
                ))
            ) : (
                <p onClick={() => {setShowMenu(!showMenu)}} className='menu-icon'>☰</p>
            )}
            </div>
        </div>
        <div className='menu-mobile'>
                    {showMenu && (
                        menuLinks.map((link, index) =>  (
                            <p key={index} className='nav-link' onClick={() => handleClick(paths[index])}>{link}</p>
                        ))
                    )}
        </div>
        </>
    )
}

export default Navigation;
