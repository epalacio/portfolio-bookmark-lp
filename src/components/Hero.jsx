import React from 'react';

import illustrationHero from '../img/illustration-hero.svg'

const Hero = () => {
    return (
        <div id='hero' className='flex items-center flex-col-reverse lg:flex-row text-center lg:text-left p-4 mt-12 sm:mt-24'>
            <div className='w-full'>
                <h1 className='text-headerMobile md:text-headerDesktop text-valhalla font-medium'>A Simple BookMark Manager</h1>
                <p className='text-textMobile md:text-textDesktop text-graySuit my-12'>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div className='flex justify-center md:justify-start'>
                    <a className='text-textCTA block bg-royalBlue hover:bg-white rounded w-max border-2 border-transparent hover:border-royalBlue text-white hover:text-royalBlue font-medium px-5 py-3 min-w-ctaWidth mr-3 shadow' href='/'>Get it on Chrome</a>
                    <a className='text-textCTA block bg-blackHaze hover:bg-white rounded w-max border-2 border-transparent hover:border-valhalla text-valhalla font-medium px-5 py-3 min-w-ctaWidth shadow' href='/'>Get it on Firefox</a>
                </div>
            </div>
            <div id='heroBluePill'>
                <img className='m-auto max-w-imgWidthMobile sm:max-w-heroImgWidthDesktop' src={illustrationHero} alt=''/>
            </div>
        </div>
     );
}
 
export default Hero;