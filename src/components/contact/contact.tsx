import './contact.scss'
import Navigation from '../navigation/navigation'
import Footer from '../footer/footer'

const Contact: React.FC = () => {
    return (
        <>
            <Navigation />
            <div className='contact-container'>
                <h1>Contact Us</h1>
                <p>Have questions, suggestions, or want to collaborate? Reach out to us!</p>
                <p>📧 yichenw805@gmail.com</p>
                <p>📞 289-885-4158</p>
                <p>Subscribe to our social media to receive our newest updates</p>
                <a target='_blank' href='https://www.instagram.com/zuolin85/'>Riptide Instagram</a>
                <br />
                <a target='_blank' href='https://www.xiaohongshu.com/user/profile/5fac04ab000000000100a166?channel_type=web_search_result_notes&xsec_token=ABr1krXr7bKz1cZi7Dh5fuqfS2zszft0XAd53kJLW2uYk%3D&xsec_source=pc_note'>
                Riptide WeChat</a>
            </div>
            <Footer />
        </>
        
    )
}

export default Contact