import React from 'react';
import logo from '../icons/aim_logo.svg'
// import image from '../images/img.jpg'

export default function MainContent() {
  const events = [
    {
      title: 'First Info Night: Fall 2025',
      datetime: 'Tue, Sep 2 2025 · 6:00 PM - 8:00 PM CST',
      location: 'Digital Computer Lab room #1310',
      description: 'Join us for a walkthrough of this semester’s application process, meet the leadership team, and ask any questions.',
      formURL: 'https://docs.google.com/forms/d/e/1FAIpQLSfbky-jWiNfTXGP7tUGjrT_EDqFcBYR8RCqOwJIQ1FWEtGT8g/viewform?usp=dialog'
    },
    {
      title: 'Second Info Night: Fall 2025',
      datetime: 'Thur, Sep 4 2025 · 6:00 PM - 8:00 PM CST',
      location: 'Digital Computer Lab room #1310',
      description: 'Join us for a walkthrough of this semester’s application process, meet the leadership team, and ask any questions.',
      formURL: 'https://docs.google.com/forms/d/e/1FAIpQLSdcck1WoNwbLcK4gQguv4g7gpB8WpC3MP4uSZxjFL_Cdw7Ssw/viewform?usp=dialog'
    },
    {
      title: 'General Meeting',
      datetime: 'Wed, Sep 10 2025 · 6:00 PM CST',
      location: 'TBD',
      description: 'General Meeting'
    },
    {
      title: 'General Meeting',
      datetime: 'Wed, Sep 17 2025 · 6:00 PM CST',
      location: 'TBD',
      description: 'General Meeting'
    },
    {
      title: 'General Meeting',
      datetime: 'Wed, Sep 24 2025 · 6:00 PM CST',
      location: 'TBD',
      description: 'General Meeting'
    },
    {
      title: 'General Meeting',
      datetime: 'Wed, Oct 1 2025 · 6:00 PM CST',
      location: 'TBD',
      description: 'General Meeting'
    },
    {
      title: 'General Meeting',
      datetime: 'Wed, Oct 8 2025 · 6:00 PM CST',
      location: 'TBD',
      description: 'General Meeting'
    },
    {
      title: 'General Meeting',
      datetime: 'Wed, Oct 22 2025 · 6:00 PM CST',
      location: 'TBD',
      description: 'General Meeting'
    },
    {
      title: 'General Meeting',
      datetime: 'Wed, Nov 5 2025 · 6:00 PM CST',
      location: 'TBD',
      description: 'General Meeting'
    },
    {
      title: 'General Meeting',
      datetime: 'Wed, Nov 12 2025 · 6:00 PM CST',
      location: 'TBD',
      description: 'General Meeting'
    },
    {
      title: 'General Meeting',
      datetime: 'Wed, Nov 19 2025 · 6:00 PM CST',
      location: 'TBD',
      description: 'General Meeting'
    },
    {
      title: 'General Meeting',
      datetime: 'Wed, Nov 26 2025 · 6:00 PM CST',
      location: 'TBD',
      description: 'General Meeting'
    },
    {
      title: 'General Meeting',
      datetime: 'Wed, Dec 3 2025 · 6:00 PM CST',
      location: 'TBD',
      description: 'General Meeting'
    },
    {
      title: 'General Meeting',
      datetime: 'Wed, Dec 10 2025 · 6:00 PM CST',
      location: 'TBD',
      description: 'General Meeting'
    },
    {
      title: 'General Meeting',
      datetime: 'Wed, Dec 17 2025 · 6:00 PM CST',
      location: 'TBD',
      description: 'General Meeting'
    }
  ];
  return (
    <div className="body-content">
        <div className='body-content-split'>
            <div className='body-content-left'>
                <div className='body-content-logo'>
                  <img src={logo} alt='aim_logo'/>
                </div>
                <div className="body-content-motto">
                    "Learn While You Earn"
                </div>
                <div className='body-content-pr'>
                    <h2>We are a student-led corporate and quantitative finance organization at the University of Illinois at Urbana Champaign.</h2>
                </div>
                <div className="body-content-apply">
                    <h2>
                        <a
                            href='https://docs.google.com/forms/d/e/1FAIpQLSf0xBY2sK0ub7SwoebbNJBez5PkF6OXDPZfKlCr6y5IqWJdlw/viewform?usp=dialog'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                          Apply for Fall 2025!
                        </a>
                    </h2>
                </div>
            </div>
            <div className='body-content-right'>
                <h2 className='upcoming-events'>Upcomping Events</h2>
                <div className='events-list'>
                    {events.map((e, i) => (
                    <div key={i} className='event-card'>
                        <p className='event-datetime'>{e.datetime}</p>
                        <h3 className="event-title">{e.title}</h3>
                        <p className="event-desc">{e.description}</p>
                        <p className="event-location">📍 {e.location}</p>
                        {e.formURL && (<a
                          href={e.formURL} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="event-btn"
                        >
                          RSVP
                        </a>
                        )}
                    </div>
                    ))}
                </div>
            </div>
            
        </div>
      
        <div className='body-content-fake'></div>
        <div className='what-we-do'>
          <h2 className='what-we-do-main'>What We Do</h2>
          <div className='what-we-do-content'>
              <div className='what-we-do-detail'>
                <h2>At AIM Partners, we enhance ourselves to <span className='highlight'>learn while we earn</span>. <br/><br/>We host weekly workshops, mentor beginners in finance, and
                manage a fund powered by tested valuation and strategy.</h2>
              </div>

              <div className='what-we-do-keywords'>
                  <h2><span className='highlight'>Learn</span></h2>
                  <h3 className='what-we-do-keywords-detail'>We learn market, industry, and company research. Also, we learn about trading simulations, portfolio management using trained strategy.</h3>
                  <h2><span className='highlight'>Earn</span></h2>
                  <h3 className='what-we-do-keywords-detail'>We earn key financial market concepts as well as trading strategy by hosting mock trading competition and posting a monthly financial due diligence report.</h3>
              </div>
          </div>
        </div>
        <div className='contact-sponsor'>
            <h3 className='contact-sponsor-main'>Email us at <span className='highlight'>aimpartnersuiuc@gmail.com</span> to sponsor us!</h3>
        </div>
        <div className='contact-us'>
            <div className='contact-us-logo'>
                <img src={logo} alt='aim-logo'/>
            </div>
            <h2 className='contact-us-main'>
                Contact Us

                <div className='contact-us-main-detail'>
                    <p className='email'>aimpartnersuiuc@gmail.com</p>
                    <li className='contact-us-discord'>
                        <a href='https://discord.com/invite/EMSf7pjKM6' target='_blank' rel="noopener noreferrer">
                            Discord
                        </a>
                    </li>
                    <li className='contact-us-linkedin'>
                        <a href='https://www.linkedin.com/company/aimpartnersuiuc/' target='_blank' rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </li>
                </div>
            </h2>
        </div>
    </div>
  );
}