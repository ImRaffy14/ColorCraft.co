import Header from './Header.jsx';
import LandingPage from './LandingPage.jsx';
import AboutUs from './AboutUs.jsx';
import IllumiGlow from './IllumiGlow.jsx';
import GlowGlam from './GlowGlam.jsx'
import GlowMagic from './GlowMagic.jsx'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/ColorCraft.co/" element={<><LandingPage/> <AboutUs/> </>}/>
        <Route path="/ColorCraft.co/IllumiGlow" element={<IllumiGlow/>}/>
        <Route path="/ColorCraft.co/GlowGlam" element={<GlowGlam/>}/>
        <Route path="/ColorCraft.co/GlowMagic" element={<GlowMagic/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
