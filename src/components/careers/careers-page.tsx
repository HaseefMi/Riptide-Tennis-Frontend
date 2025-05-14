import './careers-page.scss'
import Navigation from '../navigation/navigation'
import Footer from '../footer/footer'
import OurMission from './our-mission/our-mission'
import WhyJoin from './why-join/why-join'
import Apply from './apply/apply'

const Careers: React.FC = () => {
    return (
        <>
        <Navigation />
            <div className='careers-container'>
                <h1>We're Hiring! Join Our Team Today!</h1>
                <OurMission />
                <WhyJoin />
                <Apply />
            </div>
        <Footer />
        </>
    )
}

export default Careers