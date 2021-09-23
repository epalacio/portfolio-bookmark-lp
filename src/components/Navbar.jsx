import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

import navLogo from '../img/logo-bookmark.svg'
import fbIcon from '../img/icon-facebook.svg'
import twIcon from '../img/icon-twitter.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <nav className='relative'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center w-full justify-between'>
              <div className='flex-shrink-0'>
                <img src={navLogo} alt='Company Logo and Bookmark word'/>
              </div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  <a href='/' className='text-valhalla hover:text-carnation px-3 py-2 text-textCTA'>FEATURES</a>
                  <a href='/' className='text-valhalla hover:text-carnation px-3 py-2 text-textCTA'>PRICING</a>
                  <a href='/' className='text-valhalla hover:text-carnation px-3 py-2 text-textCTA'>CONTACT</a>
                  <a href='/' className='text-white hover:text-carnation bg-carnation hover:bg-white px-3 py-2 rounded-md text-textCTA border-2 border-transparent hover:border-carnation'>LOGIN</a>
                </div>
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='inline-flex items-center justify-center p-2 rounded-md text-valhalla hover:text-carnation'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
          className='absolute z-10 w-full bg-valhalla opacity-90 h-screen'
        >
          {(ref) => (
            <div className='md:hidden flex flex-col justify-between' id='mobile-menu' style={{'min-height': '90%'}}>
              <div ref={ref} className='pt-2 pb-3 divide-y-1 divide-graySuit text-center'>
                <a href='/' className='text-white hover:text-carnation active:text-carnation block px-3 py-2 text-textDesktop'>FEATURES</a>
                <a href='/' className='text-white hover:text-carnation active:text-carnation block px-3 py-2 text-textDesktop'>PRICING</a>
                <a href='/' className='text-white hover:text-carnation active:text-carnation block px-3 py-2 text-textDesktop'>CONTACT</a>
                <div className='block px-3 py-2 w-full'>
                    <a href='/' className='text-white hover:text-carnation active:text-carnation block px-3 py-2 text-textDesktop rounded border-2 border-white hover:border-carnation w-11/12 mx-auto'>LOGIN</a>
                </div>
              </div>
              <div className='flex justify-center'>
                <img className='m-4' src={fbIcon} alt='facebook icon' />
                <img className='m-4' src={twIcon} alt='twitter icon' />
              </div>
            </div>
            
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
