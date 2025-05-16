import './about.scss'
import Navigation from '../navigation/navigation'
import Footer from '../footer/footer'
import { useEffect } from 'react'

const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [])
    return (
        <div>
            <Navigation />
            <div className='about-us-container'>
                <h1>About Us</h1>
                <p>The Riptide Table Tennis Club was founded in March 2022 as part of the
                    XingYun Non Profit Organization. In the beginning, there were only two
                    executives for the entire club, and as we continued to promote the club, our
                    executive team gradually formed its own varsity team and then began
                    organizing inter-school tournaments for several Oakville high schools. Through
                    this process, the club has also grown in the size of the tournaments.
                    After organizing the last table tennis tournament in 2024, we decided to
                    expand the club and reach out to the rest of the Ontario table tennis market.
                    We currently have locations in Oakville and Scarborough with weekly events.</p>
            </div>
            <Footer />
        </div>
    )
}

export default About