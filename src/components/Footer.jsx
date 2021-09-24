import footerLogo from '../img/logo-bookmark-white.svg'
import fbIcon from '../img/icon-facebook.svg'
import twIcon from '../img/icon-twitter.svg'


const Footer = () => {
    return ( 
        <div id='footer' className='mt-16'>
            <div className='contact-section bg-royalBlue text-center text-white'>
                <div className='max-w-footerMobileWidth sm:max-w-screen-sm mx-auto py-14'>
                    <p className='text-textCTA'>35,000+ ALREADY JOINED</p>
                    <h3 className='text-subHeaderMobile sm:text-subHeaderDesktop leading-9 py-6'>Stay up-to-date with what we’re doing</h3>
                    <form className='flex flex-col sm:flex-row justify-around items-center px-2'>
                        <input className='rounded w-full sm:w-7/12 px-5 py-3 text-valhalla mb-3 shadow' type='email' name='email' id='email' placeholder='Enter your email address' />
                        <button className='bg-carnation hover:bg-white border-2 border-transparent hover:border-carnation hover:text-carnation block rounded w-full sm:w-max font-medium px-5 py-3 mb-3 shadow'type='submit'>Contact Us</button>
                    </form>
                </div>
            </div>
            <div className='footer-links bg-valhalla flex flex-col sm:flex-row items-center justify-around py-2'>
                <div className='left-footer flex flex-col sm:flex-row justify-between mt-2'>
                    <img className='mx-12 my-4' src={footerLogo} alt='Bookmark logo with wording in white mx-12' />
                    <ul className='flex flex-col sm:flex-row justify-around items-center text-white'>
                        <a className='mx-8 my-4 hover:text-carnation' href='/'>FEATURES</a>
                        <a className='mx-8 my-4 hover:text-carnation' href='/'>PRICING</a>
                        <a className='mx-8 my-4 hover:text-carnation' href='/'>CONTACT</a>
                    </ul>
                </div>
                <div className='right-footer flex'>
                    <img className='m-4 cursor-pointer' src={fbIcon} alt='facebook icon' />
                    <img className='m-4 cursor-pointer' src={twIcon} alt='twitter icon' />
                </div>
            </div>
        </div>
     );
}
 
export default Footer;