import './pricing.scss';
import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';
import PricingPlans from '../pricing-plans/pricing-plans';

const Pricing: React.FC = () => {
    return (
        <>
        <Navigation />
            <div className='pricing-container'>
                <PricingPlans showLearnMore={false}/>
            </div>
            <Footer />
        </>
    )
}

export default Pricing