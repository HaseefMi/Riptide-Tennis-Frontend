import Navigation from '../navigation/navigation'
import Hero from '../hero/hero'
import WhoWhy from '../who-we-are/who-we-are'
import WeeklySessions from '../weekly-sessions/weekly-sessions'
import PricingPlans from '../pricing-plans/pricing-plans'
import NewsLanding from '../news-events/news-landing'
import Footer from '../footer/footer';

const LandingPage: React.FC = () => {
    return (
        <div>
            <Navigation />
            <Hero />
            <WhoWhy />
            <WeeklySessions />
            <PricingPlans />
            <NewsLanding />
            <Footer />
        </div>
    )
}

export default LandingPage