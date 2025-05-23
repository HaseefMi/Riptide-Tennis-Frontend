import './who-we-are.scss'
import { useNavigate } from 'react-router-dom'

const WhoWhy: React.FC = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/about')
    }
    return (
        <div className='who-why-container'>
            <h1>Who Are We? & Why Riptide?</h1>
            <p>Riptide Table Tennis was founded in March 2022 by a team of dedicated high school students, 
                aiming to grow the popularity of Table Tennis and inspire others to play. As the only independent 
                organization hosting inter-school competitions in Ontario, we're expanding our reach across 
                the province. We currently host weekly events in Oakville and Scarborough, providing students 
                with a friendly, stress-free environment to compete.</p>
            <button onClick={handleClick}>Learn More</button>
        </div>
    )
}

export default WhoWhy