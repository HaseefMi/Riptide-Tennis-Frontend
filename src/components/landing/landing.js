import './landing.css'
import Navigation from '../navigation/navigation'
import Hero from '../hero/hero'
import WhoWhy from '../who-we-are/who-we-are'
import WeeklySessions from '../weekly-sessions/weekly-sessions'
import PricingPlans from '../pricing-plans/pricing-plans'
import NewsLanding from '../news-events/news-landing'

function LandingPage() {
    return (
        <div>
            <Navigation />
            <Hero />
            <WhoWhy />
            <WeeklySessions />
            <PricingPlans />
            <NewsLanding />
        </div>
    )
}

export default LandingPage