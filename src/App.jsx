import Header from './Header.jsx';
import ProductHeader from './ProductHeader.jsx'
import LandingPage from './LandingPage.jsx';
import AboutUs from './AboutUs.jsx';
import IllumiGlow from './IllumiGlow.jsx';
import GlowGlam from './GlowGlam.jsx'
import GlowMagic from './GlowMagic.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  

  return (
    <>
    <BrowserRouter>
      
      <Routes>
        <Route path="/ColorCraft.co/" element={<><Header/> <LandingPage/> <AboutUs/> </>}/>
        <Route path="/ColorCraft.co/IllumiGlow" element={<><ProductHeader/> <IllumiGlow/></>}/>
        <Route path="/ColorCraft.co/GlowGlam" element={<> <ProductHeader/><GlowGlam/></>}/>
        <Route path="/ColorCraft.co/GlowMagic" element={<><ProductHeader/> <GlowMagic/></>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}



export default App
