import './events.scss';
import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';
import EventIcon from './event-icon/event-icon';
import RiptideTriBattle from '../../assets/riptide-tri-battle.png';
import ExecApp from '../../assets/exec-app.png';
import FTTAC from '../../assets/fttac.png';
import OHSIC from '../../assets/ohsic.png';
import CIRHST from '../../assets/cirhst.png';
import APIC from '../../assets/apic.png';
import { useEffect } from 'react';

const Events: React.FC = () => {

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [])
    const images: string[] = [RiptideTriBattle, ExecApp, FTTAC, OHSIC, CIRHST, APIC];
    const titles: string[] = ['Riptide Tri-Battle Cup', 'Student Executive Recruitment', 'First Table Tennis Ace Championship',
        'Oakville High School Interscholastic Competition', 'Competition with Iroquois Ridge High School Team', 'Abbery Park SS Intramural Competition'];
    const locations: string[] = ['Oakville Trafalgar High School', 'Oakville, Mississauga, Markham, Scarborough', 
        'My Table Tennis Club', 'Oakville Community Table Tennis Association', 'Oakville Community Table Tennis Association',
        'Abbey Park High School',
    ]
    const dates: string[] = ['May 23, May 30, June 6 | 8:00 PM - 10:00 PM', 'Deadline: April 30', 'Nov 28, 2024',
        'Feburary 21, 2024', 'November 20, 2023', 'October 20, 2023' 
    ];
    const captions: string[] = ['New Format, Fresh Experience', 'Building Leadership Experience, Strengthen University Applications',
        'First Mississauga Intercollegiate Tournament', 'Second Oakville Intercollegiate Competition', 'First Oakville Intercollegiate Competition',
        'First Table Tennis Tournament'
    ]

    return (
        <>
        <Navigation />
            <h1 id='event-header'>News & Previous Events</h1>
            <div className='events-container'>
                {titles.map((title, i) => (
                    <div className='event-page-icon'>
                        <EventIcon image={images[i]} title={title} location={locations[i]}
                        time={dates[i]} caption={captions[i]} articleNo={i}/>
                    </div>
                ))}
            </div>
        <Footer />
        </>
    )
}

export default Events