
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import GetQuote from './Components/Get Quote/GetQuote';
// import LoginSignup from './Pages/LoginSignup';
// import Anime from './Components/Anime/Anime';
import Home from './Pages/Home';
import { Work } from './Components/Work/Work';
import { Services } from './Components/Services/Services';
import { Design } from './Components/Design';
import { Development } from './Components/Development';
import { Marketing } from './Components/Marketing';
import Contact from './Pages/Contact';
import Footer from './Components/Footer/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AboutUs } from './Components/AboutUs/AboutUs';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar/>
        {/* <Anime /> */}
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/work' element={<Work/>}></Route>
          <Route path='/services' element={<Services/>} ></Route>
          <Route path='/aboutus' element={<AboutUs/>} ></Route>
          <Route path='/contact' element={<Contact/>} ></Route>
          <Route path='/GetQuote' element={<GetQuote/>}/>
          <Route path='/design' element={<Design/>}/>
          <Route path='/development' element={<Development/>}/>
          <Route path='/marketing' element={<Marketing/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
