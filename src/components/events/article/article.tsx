import './article.scss'
import { useContext } from 'react'
import { ArticleContext } from '../../../contexts/article-context'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from '../../navigation/navigation'
import Footer from '../../footer/footer'

const Article: React.FC = () => {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [])
    const context = useContext(ArticleContext);
    const navigate = useNavigate()

    if (!context) {
        navigate('/events')
        return null;
    }

    const { articleContext } = context;
    const [title, date] = articleContext.slice(0, 2);  
    const remainingContent = articleContext.slice(2);

    return (
        <>
        <Navigation />
            <div className='article-container'>
            <h1>{title}</h1>
            <p>📅 {date}</p>
            <div>
                {remainingContent.map((content, index) => {

                    if (typeof content === 'string' && content.startsWith('http')) {
                        return (
                            <img src={content} />  
                        )
                    }
                    return <p key={index}>{content}</p>
                })}
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Article
