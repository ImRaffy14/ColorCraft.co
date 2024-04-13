import Header from './Header.jsx';
import ProductHeader from './ProductHeader.jsx'
import LandingPage from './LandingPage.jsx';
import AboutUs from './AboutUs.jsx';
import IllumiGlow from './IllumiGlow.jsx';
import ContactUs from './ContactUs.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/ColorCraft.co/" element={<><Header/> <LandingPage/> <AboutUs/> <ContactUs/></>}/>
        <Route path="/ColorCraft.co/IllumiGlow/" element={<> <ProductHeader/> <IllumiGlow/></>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}



export default App
