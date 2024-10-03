
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import GetQuote from './Components/GetQuote';
// import LoginSignup from './Pages/LoginSignup';
// import Anime from './Components/Anime/Anime';
import ScrollToTop from './Components/ScrollToTop';
import Home from './Components/Home';
import { Work } from './Components/Work';
import  Web_Development  from './Components/Services/Web_Development';
import  Mobile_App  from './Components/Services/Mobile_App';
import  Matrimony_App  from './Components/Services/Matrimony_App';
import  Billing  from './Components/Services/Billing';
import CRM from './Components/Services/CRM'
import E_Commerce from './Components/Services/E_Commerce'
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AboutUs } from './Components/AboutUs';
import  Inventory_app  from './Components/Services/Inventory_app';
import  Timesheet  from './Components/Services/Timesheet';
import  MOI_Soft  from './Components/Services/MOI_Soft';
import  Customer_Management  from './Components/Services/Customer_Management';
import  Event_App  from './Components/Services/Event_App';
import  Digital_Marketing  from './Components/Services/Digital_Marketing';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/work' element={<Work/>}></Route>
          <Route path='/aboutus' element={<AboutUs/>} ></Route>
          <Route path='/contact' element={<Contact/>} ></Route>
          <Route path='/GetQuote' element={<GetQuote/>}/>

          <Route path='/web_development' element={<Web_Development/>}/>
          <Route path='/mobile_app' element={<Mobile_App/>}/>
          <Route path='/matrimony_app' element={<Matrimony_App/>}/>
          <Route path='/billing' element={<Billing/>}/>
          <Route path='/crm' element={<CRM/>}/>
          <Route path='/e_commerce' element={<E_Commerce/>}/>
          <Route path='/inventory_app' element={<Inventory_app/>}/>
          <Route path='/time_sheet' element={<Timesheet/>}/>
          <Route path='/moi_soft' element={<MOI_Soft/>}/>
          <Route path='/customer_management' element={<Customer_Management/>}/>
          <Route path='/event_app' element={<Event_App/>}/>
          <Route path='/digital_marketing' element={<Digital_Marketing/>}/>

        </Routes>
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
