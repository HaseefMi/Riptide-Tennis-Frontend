import './event-icon.scss'
import { useContext } from 'react';
import { ArticleContext } from '../../../contexts/article-context';
import { useNavigate } from 'react-router-dom';

interface AssetProps {
    image: string;
    title: string;
    location: string;
    time: string;
    caption: string;
    articleNo: number
}
const articleText1 = ['Introduction to Riptide Tri-Battle Cup', 'May 10, 2025', 'Written by Yichen', '1. Event Overview', '📍Location: Oakville Trafalgar High School', '📅 Dates: May 23, May 30, June 6 | 8pm - 10pm', 'Format: players will be randomly divided into groups of 3. Each group will play a round robin format, with each player playing the other 2 players. Points will determine the group championship.', '💵 Prize: Each group Championship will receive a $15 sponsor gift card.', 'Bonus: All participants will be entered into a raffle for a chance to win a $100 gift card.', 'https://i.ibb.co/CD1VpFy/image.png', '2. Registration Information', 'Register fees: $5/player', 'Group divided: youth (age of 12 to 22), adult (age of 22 to 49), elder (above age of 50） Number of registrations: no limit, a player may register for games on multiple days, but must pay $5 for each entry.', '3. Registration Process', 'Step 1 - Contact the event organizer to register, confirm your game dates, fill out a disclaimer and complete the payment.', '📞💬+1 289-888-1362 Username: Yichen', '📧 riptidetabletennisclub@gmail.com', 'Step 2 - Please check the event details in time.', '3 days before the event, all registered players will receive a detailed information package, including the venue layout (to assist with quick entry), entry times, and assigned table numbers.', 'If you do not receive this information, please contact the event organizer immediately.', '4. Bonus up to $100', 'Players are required to join the designated WeChat or Discord group. A prize draw will be held on June 7, and only one winner will be selected.']
const articleText2 = ['Students Executive Recruitment', 'March 1, 2025', 'Written by Yichen', 'Requirements to apply:', '➡️ Attend any Ontario high school or university.', '➡️ Responsible and passionate about organizing events.', '➡️ Previous event planning and/or leadership experience is not required, but valued.', 'https://i.ibb.co/ym6FZbjh/image.png', 'Positions available:', 'Oakville Riptide table tennis club event manager (1-2 positions open)', '➡️ Responsible for the weekly activities of the Oakville club each week.', '➡️ Plan local table tennis tournaments in Oakville. Specific tasks included writing an event plan, publicizing the event, and finding sponsors to ensure the event ran smoothly.', '➡️ There is an opportunity to link up with other area Riptide table tennis clubs to organize larger tournaments.', 'Scarborough Riptide table tennis club event manager (3-4 positions open)', '➡️ Responsible for the weekly activities of the Scarborough club each week.', 'Plan local table tennis tournaments in Scarborough. Specific tasks included writing an event plan, publicizing the event, and finding sponsors to ensure the event ran smoothly.', 'There is an opportunity to link up with other area Riptide table tennis clubs to organize larger tournaments.', 'Application Process', 'First Step - Fill out your personal information and submit the google form.', 'Second Step - Schedule a online Interview:', 'The interview is meant for us to find out what kind of person you are, and whether or not you are eligible for a role in the table tennis club. It will be composed of 3 questions total on responsibility, leadership, good communication, organization, and past leadership experiences.']
const articleText3 = ['Smashing Success: Oakville First High School Table Tennis Championship!', 'February 23, 2024', 'Written by Yichen, Sutong', 'Students from four HDSB schools in Oakville were involved in the inaugural High School Table Tennis Competition on February 21st, 2024 at the Oakville Community Table Tennis Association facility (OCTTA). The event was hosted by Yichen Wang, Jason Shi and Sutong Zhang, and participants from four schools: Abbey Park High School, White Oaks Secondary School, Iroquois Ridge High School, and Garth Webb Secondary School took part. The students were able to compete and even bonded over their love of the sport. This event marks a significant milestone for the local table tennis community.', 'https://i.ibb.co/rGpCmsXF/image.png', 'Image 1: Group Photo taken from the Opening Ceremony; Councillors and players playing!', 'https://i.ibb.co/pvVpLyzd/image.png', 'Huge congratulations to Abbey Park High School for securing first place and earning the gold medal trophy! White Oaks Secondary School achieved second place and won silver, while Iroquois Ridge High School performed admirably, earning the bronze. Additionally, Garth Webb Secondary School received table tennis balls as souvenirs for their fourth-place finish.', 'https://i.ibb.co/ZzzPNNj5/image.png', 'Image 2: Abbey Park High School Team Win the First Place', 'We extend our heartfelt thanks to all players, supervising teachers and principals from each school. We would also like to thank the Oakville Community Table Tennis Association for their kind support! Special thanks to Ward 6 Town Councillor Natalia Lishchyna and Regional Councillor Toms Adams, and Ward 7 Councillor Scott Xie for supporting our event!', 'https://i.ibb.co/GQyfZMdk/image.png', 'Image 3: A group photo of the 3 Councillors and the staff of the Oakville Community Table Tennis Association' ];
const articleText4 = ['Abbey Park and Iroquois Ridge Face Off in First Inter-School Table Tennis Match', 'November 20, 2023', 'Written by Yichen', 'In November 2023, Abbey Park High School and Iroquois Ridge High School held their first inter-school table tennis competition. The event ran from 8:00 AM to 3:00 PM, featuring group stages and a points-based format.', 'https://i.ibb.co/Df10Q6K1/image.png', 'Figure 1: Group photo after the tournament', 'Special thanks to the Oakville Community Table Tennis Association for providing the venue free of charge. We also sincerely thank all the volunteers whose hard work made the event smooth and successful.']
const articleText5 = ['Abbey Park Table Tennis Tryouts Conclude, School Team Formed', 'October 20, 2023', 'Written by Yichen', 'In October 2023, Abbey Park High School hosted its table tennis team tryouts. A total of 12 students signed up and competed in a single-elimination tournament.', 'https://i.ibb.co/vvBqb19Z/image.png', 'Figure 1: Players competed fiercely during the semifinals', 'After several intense rounds, Miles Easton claimed the championship with an outstanding performance. Following the event, 10 top players were selected to form Abbey Park’s first official table tennis team.', 'The tryouts marked an important step in building a strong foundation for upcoming inter-school competitions.']
const articleMapper: { [key: number]: string[] } = {
    0 : articleText1,
    1 : articleText2,
    3: articleText3,
    4: articleText4,
    5: articleText5,
}

const EventIcon: React.FC<AssetProps> = ({ image, title, location, time, caption, articleNo }) => {
    const context = useContext(ArticleContext);
    const navigate = useNavigate()
    const setArticleContext = context?.setArticleContext;

    const handleClick = () => {
        if (articleNo === 2) {
            window.open('https://www.navoice.ca/posts/table-tennis-ace-championship', '_blank');
            return;
        } else {
            navigate('/article')
            if (setArticleContext) {
                setArticleContext(articleMapper[articleNo]);
        }

        }
    }
    
    return (
        <div className='event-icon-container' onClick={handleClick}>
            <div className='event-icon-text'>
                <h3>{title}</h3>    
                <p>📍{location}</p>
                <p>📅 {time}</p>
                <p>{caption}</p>
            </div>
                <img src={image} className='event-icon-img'/>
        </div>
    )
}

export default EventIcon