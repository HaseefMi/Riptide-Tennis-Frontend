import './sign-up.scss'
import Navigation from '../navigation/navigation'
import Footer from '../footer/footer'
import { useEffect } from 'react'

const SignUp: React.FC = () => {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [])
    return (
        <>
        <Navigation />
            <div className='sign-up-container'>
                <h1>Sign Up</h1>
                <p>To register and become a Riptide member or participate in a tournament contact us at:</p>
                <p id='bold'>📧 Email: yichenw805@gmail.com</p>
                <p id='bold'>💬📞 Text/Call: (289) 885-4158</p>
            </div>
            <Footer />
        </>
    )
}

export default SignUp