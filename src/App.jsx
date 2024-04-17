import Header from './Header.jsx';
import LandingPage from './LandingPage.jsx';
import AboutUs from './AboutUs.jsx';
import IllumiGlow from './IllumiGlow.jsx';
import ContactUs from './ContactUs.jsx'
import Footer from './Footer.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/ColorCraft.co/" element={<><Header/> <LandingPage/> <AboutUs/> <ContactUs/></>}/>
        <Route path="/ColorCraft.co/IllumiGlow/" element={ <IllumiGlow/> }/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}



export default App
