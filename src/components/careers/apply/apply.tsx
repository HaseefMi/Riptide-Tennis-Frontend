import './apply.scss';
import ApplyImg from '../../../assets/interview.png'

const Apply: React.FC = () => {
    return (
        <>
        <h2 id='how-to-apply-title'>How To Apply</h2>
        <div className='apply-container'>
            <div className='apply-1'>
            <div className='apply-sub-container'>
                <h3>1️⃣ Read The Application Requirements</h3>
                <p>Read this document <a href='https://docs.google.com/document/d/1yylO3IHgleNDqQaHEEfT43e7hzTq6GSq6s1KAbjGz8c/edit?tab=t.0' target='_blank'>Executive Recruitment Info</a> to determine if you are eligible 
                to apply and which position you would like to apply for.</p>
            </div>
            <div className='apply-sub-container'>
                <h3>2️⃣ Fill Out the Application Form</h3>
                <p>Fill out this <a href='https://docs.google.com/forms/d/1Yk3KOaebMX5GtbcP_aCoVsMqEMU6eg6RpBmO6zQUO2I/edit' target='_blank'>Form</a> to get an idea of your basic situation in this stage.</p>
            </div>
            <div className='apply-sub-container'>
                <h3>3️⃣ Wait For an Interview</h3>
                    <p>Interviews are all online. The results of the interview
                    will be sent to the email address submitted by the
                    applicant within one week of the interview.</p>
            </div>
            </div>
            <div className='apply-2'>
                <img src={ApplyImg} />
            </div>
        </div>
        </>
    )
}

export default Apply