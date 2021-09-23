import DownloadCard from "./subComponents/downloadCard.component";

import chromeLogo from '../img/logo-chrome.svg'
import firefoxLogo from '../img/logo-firefox.svg'
import operaLogo from '../img/logo-opera.svg'

const Download = () => {


    const downloadCardsContent = [
        {
            'imgUrl': chromeLogo,
            'browserName': 'Chrome',
            'minVersionReq': '62',
            'marginSpec': 'mb-24',
        },
        {
            'imgUrl': firefoxLogo,
            'browserName': 'Firefox',
            'minVersionReq': '55',
            'marginSpec': 'my-12'
        },
        {
            'imgUrl': operaLogo,
            'browserName': 'Opera',
            'minVersionReq': '46',
            'marginSpec': 'mt-20'
        }
    ]
    return (
        <div id='download'>
            <div className='download-intro max-w-screen-md mx-auto mt-16 text-center'>
                <h2 className='text-subHeaderMobile md:text-subHeaderDesktop text-valhalla font-medium'>Download the extension</h2>
                <p className='text-textMobile md:text-textDesktop text-graySuit my-8 w-9/12 mx-auto'>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
                <ul id='download-cards' className='flex flex-col cards:flex-row justify-around w-10/12 md:w-full mx-auto'>
                    {downloadCardsContent.map(card =>
                        <DownloadCard browserName={card.browserName} minVersionReq={card.minVersionReq} marginSpec={card.marginSpec} imgUrl={card.imgUrl}/>
                    )}
                </ul>
            </div>
        </div>
     );
}
 
export default Download;