import './news-landing.css'
import StudentExec from '../../assets/news-landing-exec.png'
import FTT from '../../assets/first-table-tennis-ace.png';
import IS from '../../assets/inter-school.png';

const NewsLanding: React.FC = () => {
    return (
        <>
        <h1 id='news-landing-header'>News & Previous Events</h1>
            <div className='news-landing-container'>
                <div className='news-landing'>
                    <img src={StudentExec} className='news-landing-img'/>
                    <h3>Student Executive Recruitment</h3>
                    <p>📍 Oakville, Mississauga, Toronto, Scarborough</p>
                    <p>📆 Deadline: April 30, 2025</p>
                    <p>Building Leadership Experience, Strengthen University Applications</p>
                </div>
                <div className='news-landing'>
                    <img src={FTT} className='news-landing-img'/>
                    <h3>First Table Tennis Ace Championship</h3>
                    <p>📍 My Table Tennis Club</p>
                    <p>📆 November 28, 2024</p>
                    <p>First Mississauga Intercollegiate Tournament</p>
                </div>
                <div className='news-landing'>
                    <img src={IS} className='news-landing-img'/>
                    <h3>Oakville Interschool Competition</h3>
                    <p>📍 Oakville Community Table Tennis Association</p>
                    <p>📆 Febuary 21, 2024</p>
                    <p>Second Oakville Intercollegiate Competition</p>
                </div>
            </div>
        </>
    )
}

export default NewsLanding