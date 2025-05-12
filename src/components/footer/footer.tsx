import './footer.scss';
import Logo from '../../assets/riptide-logo.png';
import WeChatQR from '../../assets/riptide-wechat-qr.png';

const Footer: React.FC = () => {
    const days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const officeHours: string[] = ['3PM - 9PM', '10AM - 9PM'];

    return (
        <div className='footer-container'>
            <div className='footer-sub-container'>
                <img src={Logo}/>
                <h3>Riptide Table Tennis Club</h3>
                <p>Individually, we are one drop. Together, we are an ocean</p>
            </div>
            <div className='footer-sub-container'>
                <h3>Contact</h3>
                <p>Mobile: (289) 885-4158 </p>
                <p>Gmail: yichenw805@gmail.com </p>
                <p>Wechat: Yichen</p>
                <img src={WeChatQR} height={100}/>
            </div>
            <div className='footer-sub-container'>
                <h3>Office Hours</h3>
                    {days.map((day: string, index: number) => (
                        <div key={index}>
                            <p>{day}: {index > 4 ? officeHours[0] : officeHours[1]}</p>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Footer;