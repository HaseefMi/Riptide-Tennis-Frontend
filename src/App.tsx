import LandingPage from './components/landing/landing'
import About from './components/about-page/about';
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App