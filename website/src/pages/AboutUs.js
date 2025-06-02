import React from 'react';
import president from '../images/no_image.png';
import vice_president from '../images/no_image.png';
import vp_jason from '../images/vp-jason_profile.png'
import hoi from '../images/no_image.png';
import hor from '../images/no_image.png';
import hos from '../images/no_image.png'

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className='about-us-main'>
        <h1>About AIM Partners</h1>
      </div>
      <div className='about-us-leaderships'>
        <h2>Leaderships</h2>
        <div className='leaderships-grid'>
          <div className='leadership-card'>
            <a
              href='https://www.linkedin.com/in/yunhoc1204'
              target='_blank'
              rel="noopener noreferrer"
            >
              <img src={president} alt='Yunho Chang'/>
            </a>
            <h3 className='leadership-name'>Yunho Chang</h3>
            <p className='leadership-position'>President</p>
          </div>

          <div className='leadership-card'>
            <a
              href='https://www.linkedin.com/in/jacob-lee-a5164734a/'
              target='_blank'
              rel="noopener noreferrer"
            >
              <img src={vice_president} alt='Jacob Lee'/>
            </a>
            <h3 className='leadership-name'>Jacob Lee</h3>
            <p className='leadership-position'>Vice President</p>
          </div>

          <div className='leadership-card'>
            <a
              href='https://www.linkedin.com/in/jason-kim-bb6154267/'
              target='_blank'
              rel="noopener noreferrer"
            >
              <img src={vp_jason} alt='Jason Kim'/>
            </a>
            <h3 className='leadership-name'>Jason Kim</h3>
            <p className='leadership-position'>Cornell Chapter Vice President</p>
          </div>


          <div className='leadership-card'>
            <a
              href='https://www.linkedin.com/in/tonykwon02/'
              target='_blank'
              rel="noopener noreferrer"
            >
              <img src={hoi} alt='Tony Kwon'/>
            </a>
            <h3 className='leadership-name'>Tony Kwon</h3>
            <p className='leadership-position'>Head of Investment</p>
          </div>

          <div className='leadership-card'>
            <a
              href='https://www.linkedin.com/in/jaeho-lim/'
              target='_blank'
              rel="noopener noreferrer"
            >
              <img src={hor} alt='Jaeho Lim'/>
            </a>
            <h3 className='leadership-name'>Jaeho Lim</h3>
            <p className='leadership-position'>Head of Research</p>
          </div>

          <div className='leadership-card'>
            <a
              href='https://www.linkedin.com/in/tonykwon02/'
              target='_blank'
              rel="noopener noreferrer"
            >
              <img src={hos} alt='Junyong Um'/>
            </a>
            <h3 className='leadership-name'>Joonyong Um</h3>
            <p className='leadership-position'>Head of Software</p>
          </div>
        </div>
      </div>
    </div>
  );
}
