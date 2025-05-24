import React from 'react';
import logo from './aim_logo.svg';
import { ReactComponent as DiscordLogo } from './discord_logo.svg';
import TickerTape from './components/TickerTape';
import MainContent from './components/MainContent';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import JoinUs from './pages/JoinUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="App">
      <nav className="top-navbar">
        <div className='top-navbar__logo'>
          <Link to='/'>
            <img src={logo} width='225' height='100' alt='Alpha Investment Management Partners logl'/>
          </Link>
        </div>
        <ul className='top-navbar__links'>
          <li><Link to="/about-us">About Us</Link></li>
          {/* <li><a href="/reports">Reports</a></li> */}
          <li><Link to="/join-us">Join Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li>
            <a href='https://discord.gg/EMSf7pjKM6' target='_blank' rel="noopener noreferrer">
              <DiscordLogo className="top-navbar__discord"/>
            </a>
          </li>
        </ul>
      </nav>
      <Routes>
        {/* main page */}
        <Route path='/' element={
          <>
            <TickerTape/>
            <MainContent/>
          </>
          }
        />
        {/* about us page */}
        <Route path='/about-us' element={<AboutUs />}/>
        {/* join us page */}
        <Route path='join-us' element={<JoinUs />}/>
        <Route path='contact-us' element={<ContactUs />}/>
      </Routes>
      
      
      
    </div>
    
  );
}

export default App;
