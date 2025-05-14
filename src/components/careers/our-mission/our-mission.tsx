import './our-mission.scss'
import OurMissionImg from '../../../assets/our-mission-img.png';

const OurMission: React.FC = () => {
    return (
        <div className='our-mission-container'>
            <div className='our-mission-subdiv'>
                <h2>Our Mission</h2>
                <p>Our core philosophy is spreading interest in the
                sport of table tennis. By pioneering table tennis
                school tournaments, which remain a rarity
                today, we strive to create an environment
                where participants can test their skills and
                develop a love for the sport. </p>
            </div>
            <div className='our-mission-subdiv-2'>
                <img src={OurMissionImg} />
            </div>
        </div>
    )
}

export default OurMission