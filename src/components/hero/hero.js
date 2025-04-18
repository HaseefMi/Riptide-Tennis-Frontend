import './hero.css'
import HeroImg from '../../assets/hero-img.png'

function Hero() {
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