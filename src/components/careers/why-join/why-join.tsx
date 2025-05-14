import './why-join.scss'
import HandShake from '../../../assets/hand-shake.jpg'
import Networking from '../../../assets/networking.jpg'
import UniApp from '../../../assets/uni-app.jpg'

const WhyJoin: React.FC = () => {
    const images: string[] = [HandShake, Networking, UniApp];
    const titles: string[] = ['Mature Platform', 'Networking Opportunities', 'Advantages in University/College Applications'];
    const texts: string[] = ['Our planning system helps beginners quickly learn event organization, while our corporate connections provide free access to Canva Pro and other premium software.',
        'During planning, you will connect with teammates, venue providers, and sponsors, expanding your network and building valuable relationships.',
        'University applications for competitive majors often require extracurriculars in essays or interviews. Leadership and event planning experience provide a competitive edge.'
    ];

    return (
        <>
        <h2 id='why-join-us-title'>Why Join Us?</h2>
        <div className='why-join-container'>
            {titles.map((title, i) => {
                return (
                    <div key={i}>
                        <img src={images[i]} />
                        <h3>{title}</h3>
                        <p>{texts[i]}</p>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default WhyJoin