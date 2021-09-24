import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';

import iconArrow from '../img/icon-arrow.svg'

const Faq = () => {

    const questions = [
        {
            'title': 'What is Bookmark?'
        },
        {
            'title': 'How can I request a new browser?'
        },
        {
            'title': 'Is there a mobile app?'
        },
        {
            'title': 'What about other Chromium browsers?'
        }
    ]

    return (
        <Router>
        <div id='faq'>
            <div className='max-w-screen-md mx-auto mt-16 text-center'>
                <h2 className='text-subHeaderMobile md:text-subHeaderDesktop text-valhalla font-medium'>Frequently Asked Questions</h2>
                <p className='text-textMobile md:text-textDesktop text-graySuit my-8 w-10/12 sm:w-9/12 mx-auto'>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
                <div className='questions border-b-2 border-t-2 border-linkWater divide-y-2 divide-linkWater w-10/12 sm:w-9/12 mx-auto  mb-6'>
                    {questions.map((question) => (
                        <div className='questionBlock'>
                            <div className="questionHeader flex justify-between items-center pt-3">
                                <h3 className='text-valhalla text-textMobile sm:text-textDesktop'>{question.title}</h3>
                                <img className='cursor-pointer' src={iconArrow} alt="Closing icon arrow"  style={{'width': '18px', 'height': '12px'}}/>
                            </div>
                            <p className='text-graySuit text-textMobile sm:text-contentHeader text-left leading-relaxed mt-6 mb-3'>Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</p>
                        </div>    
                    ))}
                </div>
                <Link className='text-textCTA block bg-royalBlue hover:bg-white border-2 border-transparent hover:border-royalBlue rounded w-max text-white hover:text-royalBlue font-medium px-4 py-3 min-w-ctaWidth mx-auto shadow' to='/'>More Info</Link>
            </div>
        </div>
        </Router>
     );
}
 
export default Faq;