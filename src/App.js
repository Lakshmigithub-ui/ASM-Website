
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import GetQuote from './Components/GetQuote';
// import LoginSignup from './Pages/LoginSignup';
// import Anime from './Components/Anime/Anime';
import Home from './Components/Home';
import { Work } from './Components/Work';
import { Services } from './Components/Services';
import Services_offer from "./Components/Services_offer";
import { Web_Development } from './Components/Services/Web_Development';
import { Mobile_App } from './Components/Services/Mobile_App';
import { Matrimony_App } from './Components/Services/Matrimony_App';
import { Billing } from './Components/Services/Billing';
import {CRM} from './Components/Services/CRM'
import {E_Commerce} from './Components/Services/E_Commerce'
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AboutUs } from './Components/AboutUs';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/work' element={<Work/>}></Route>
          <Route path='/services' element={<Services/>} ></Route>
          <Route path='/aboutus' element={<AboutUs/>} ></Route>
          <Route path='/contact' element={<Contact/>} ></Route>
          <Route path='/GetQuote' element={<GetQuote/>}/>

          <Route path='/services_offer' element={<Services_offer/>}/>

          <Route path='/web_development' element={<Web_Development/>}/>
          <Route path='/mobile_app' element={<Mobile_App/>}/>
          <Route path='/matrimony_app' element={<Matrimony_App/>}/>
          <Route path='/billing' element={<Billing/>}/>
          <Route path='/crm' element={<CRM/>}/>
          <Route path='/e_commerce' element={<E_Commerce/>}/>

        </Routes>
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
