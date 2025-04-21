import './pricing-plans.css'

function PricingPlans() {
    return (
        <>
            <h1 id='pricing-plans-header'>Pricing Plans</h1>
            <div className='pricing-plans-container'>
                <div className='price-plan'>
                    <h2>Monthly Pass</h2>
                    <h1>$19.99/Person</h1>
                    <h3>Benifits:</h3>
                    <li>Free Entry Weekly Event</li>
                    <li>Early Volunteer Sign-Up Notification</li>
                    <br />
                    <button id='pricing-learn-more'>Learn More</button>
                </div>
                <div className='price-plan'>
                    <h2>Seasonal Pass</h2>
                    <h1>$49.99/Person</h1>
                    <h3>Benifits:</h3>
                    <li>All the Perks of the Monthly Pass Plus...</li>
                    <li><span id='red'>20%</span> Discount on Weekly Entry</li>
                    <li><span id='red'>10%</span> Discount on Tournament Signup</li>
                    <br />
                    <button id='pricing-learn-more'>Learn More</button>
                </div>
                <div className='price-plan'>
                    <h2>Annual Pass</h2>
                    <h1>$169.99/Person</h1>
                    <h3>Benifits:</h3>
                    <li>All the Perks of the Monthly Pass & Seasonal Pass Plus...</li>
                    <li><span id='red'>35%</span> Discount on Weekly Entry</li>
                    <li><span id='red'>20%</span> Discount on Tournament Signup</li>
                    <li>Deactivation Priviliges: From July 1 to Aug 31 The Pass Can be Paused & Resumed Without Charge</li>
                    <br />
                    <button id='pricing-learn-more'>Learn More</button>
                </div>
            </div>
        </>
    )
}

export default PricingPlans