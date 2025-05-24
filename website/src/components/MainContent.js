import React from 'react';
import logo from '../aim_logo.svg'

export default function MainContent() {
  return (
    <div className="body-content">
      <div className='body-content-logo'>
        <img src={logo} alt='aim_logo'/>
      </div>
      {/* <div className="body-content-title">
        <h1>We are Alpha Investment Partners</h1>
        
      </div> */}
      
      {/* <div className="body-content-detail">
        <p>
          Alpha Investment Management Partners is a student-run investment research and trading
          group at UIUC. We host weekly workshops, mentor beginners in finance, and
          run a simulated portfolio with real capital allocation.
        </p>
      </div> */}
      <div className="body-content-motto">
          Learn While You Earn
      </div>
      <div className="body-content-apply">
          <li><a href='https://docs.google.com/forms/d/e/1FAIpQLSf0xBY2sK0ub7SwoebbNJBez5PkF6OXDPZfKlCr6y5IqWJdlw/viewform?usp=dialog' target='_blank' rel='noopener noreferrer'>Fall 2025 Application</a></li>
      </div>
      
    </div>
  );
}