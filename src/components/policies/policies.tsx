import './policies.scss'
import Navigation from '../navigation/navigation'
import Footer from '../footer/footer'

const Policies: React.FC = () => {
    return (
        <>
        <Navigation />
        <div className='policies-container'>
            <h1>Policies & Regulations</h1>
            <p id='bold'>1) Code of Conduct:</p>
            <p>All personnel, members, and staff should be respected and treated with kindness. Please maintain good
                sportsmanship. Discriminatory or rude behavior is not tolerated and could result in a Ban depending on the
                severity.</p>
            <p id='bold'>2) Equipment / Belongings Policy:</p>
            <p>You will be responsible for damages to the property, including but not limited to: Table Tennis Tables, Nets,
                etc. Please take care of your own possessions, we are not responsible for lost belongings and items.</p>
                <p id='bold'>3) Safety Code of Conduct:</p>
            <p>Be respectful to other athletes, do not participate or encourage dangerous behavior. Do not disturb or
                approach players that are currently playing. The Club may take Photos and Media for promotional use.
                (Please tell us if you are not comfortable with being filmed.)</p>
                <p id='bold'>4) Attendance:</p>
            <p>Make-up Sessions will not be provided for missed classes due to personal absence. However, if a session is
                canceled by the Club, an additional make-up session will be arranged (You will be able to attend for an
                additional week) Please sign in on the page at the table.</p>
                <p id='bold'>5) Food:</p>
            <p>Food is not permitted inside the court area. Please finish your food while seated on the surrounding
                benches before entering the court. Occasionally, snacks may be provided during events. Kindly dispose of
                any empty snack wrappers or plastic bags in the trash bins provided.</p>
        </div>
        <Footer />
        </>
    )
}

export default Policies