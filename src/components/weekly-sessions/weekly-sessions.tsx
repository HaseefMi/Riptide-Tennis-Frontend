import './weekly-sessions.scss'
import OTHS from '../../assets/oths.png'
import IYF from '../../assets/iyf.png'

const WeeklySessions: React.FC = () => {
    return (
        <>
        <h1 className='weekly-sessions-header'>Weekly Sessions</h1>
        <div className='weekly-sessions-container'>
            <div className='session-container'>
                <div className='session-img-container'>
                    <img src={OTHS} />
                </div>
                <div className='session-text'>
                    <h3>Oakville</h3>
                    <span>Every Friday</span>
                    <p>⏱️ 8:00 PM - 10:00 PM</p>
                    <p>Oakville Trafalgar High School</p>
                    <a href='https://www.google.com/maps/place/Oakville+Trafalgar+High+School/@43.4723443,-79.6568356,17z/data=!3m2!4b1!5s0x882b5cab0b52ae25:0x1e5224402c92fa9d!4m6!3m5!1s0x882b5cab623ed865:0xc82b95fa8a3021ad!8m2!3d43.4723404!4d-79.6542607!16s%2Fm%2F027203h?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D'
                    target='_blank'>
                        1460 Devon Rd, Oakville ON L6J 36L
                    </a>
                </div>
            </div>
            <div className='session-container'>
                <div className='session-text'>
                    <h3>Scarborough</h3>
                    <span>Every Saturday</span>
                    <p>⏱️ 12:00 PM - 2:00 PM</p>
                    <p>International Youth Fellowship</p>
                    <a href='https://www.google.com/maps/place/International+Youth+Fellowship+-+Toronto+Centre/@43.7947978,-79.248905,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4d11e3683df0b:0xb1659f5738df3efc!8m2!3d43.794794!4d-79.2463301!16s%2Fg%2F11fxb7h9r3?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D'>
                        70 Mcgrinskin Rd, Scarborough ON
                    </a>
                </div>
                <div className='session-img-container'>
                    <img src={IYF} />
                </div>
            </div>
        </div>
        <button className='register-session'>Register Now</button>
        </>
    )
}

export default WeeklySessions