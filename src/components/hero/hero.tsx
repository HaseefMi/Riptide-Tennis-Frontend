import './hero.scss'
import HeroImg from '../../assets/hero-img.png';

const Hero: React.FC = () => {
    return (
        <div className='hero-container'>
            <div className='hero-text'>
                <h1>Riptide Table Tennis Club</h1>
                <p>Built For Players | Powered By Passion</p>
            </div>
            <div className='hero-image-container'>
                <img className='hero-image' src={HeroImg} />
            </div>
        </div>
    )
}

export default Hero