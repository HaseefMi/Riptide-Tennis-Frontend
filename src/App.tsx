import LandingPage from './components/landing/landing'
import About from './components/about-page/about';
import Contact from './components/contact/contact';
import Pricing from './components/pricing-page/pricing';
import Policies from './components/policies/policies';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/policies' element={<Policies />} />
      </Routes>
    </div>
  )
}

export default App