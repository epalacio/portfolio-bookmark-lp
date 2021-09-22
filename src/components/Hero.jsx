import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';

import illustrationHero from '../img/illustration-hero.svg'
import bgPill from '../img/bg-pill.svg'

const Hero = () => {
    return (
        <Router>
        <div id='hero' className='flex items-center flex-col-reverse md:flex-row text-center md:text-left p-4'>
            <div>
                <h1 className='text-headerMobile md:text-headerDesktop text-valhalla font-medium'>A Simple BookMark Manager</h1>
                <p className='text-textMobile md:text-textDesktop text-graySuit my-12'>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div className='flex justify-center md:justify-start'>
                    <Link className='text-textCTA block bg-royalBlue rounded w-max text-white font-medium px-5 py-3 min-w-ctaWidth mr-3' to='/'>Get it on Chrome</Link>
                    <Link className='text-textCTA block bg-blackHaze rounded w-max text-valhalla font-medium px-5 py-3 min-w-ctaWidth' to='/'>Get it on Firefox</Link>
                </div>
            </div>
            <div id='heroBluePill'>
                <img className='m-auto max-w-imgWidthMobile sm:max-w-heroImgWidthDesktop' src={illustrationHero} alt=''/>
            </div>
        </div>
        
        </Router>
        
     );
}
 
export default Hero;