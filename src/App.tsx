import LandingPage from './components/landing/landing'
import About from './components/about-page/about';
import Contact from './components/contact/contact';
import Pricing from './components/pricing-page/pricing';
import Policies from './components/policies/policies';
import SignUp from './components/sign-up/sign-up';
import Careers from './components/careers/careers-page';
import Events from './components/events/events';
import Article from './components/events/article/article';
import { Routes, Route } from 'react-router-dom';
import { ArticleContextProvider } from './contexts/article-context';
import './styles.scss'

const App: React.FC = () => {
  return (
    <div>
      <ArticleContextProvider>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/policies' element={<Policies />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/events' element={<Events />} />
          <Route path='/article' element={<Article />} />
      </Routes>
      </ArticleContextProvider>
    </div>
  )
}

export default App