import cardDots from '../../img/bg-dots.svg'

const DownloadCard = (props) => {
    return ( 
        <div className={`sm:${props.marginSpec} my-4 mx-auto cards:mx-4 min-w-cardWidth min-h-cardHeight max-w-cardWidth max-h-cardHeight rounded-lg shadow-lg text-center p-2 flex flex-col align-center justify-around`}>
            <img src={props.imgUrl} alt="" className='w-cardLogoWidth mx-auto'/>
            <div>
                <h4 className='text-valhalla text-cardHeader'>Add to {props.broswerName}</h4>
                <p className='text-graySuit text-textMobile'>Minimum version {props.minVersionReq}</p>
            </div>
            <img src={cardDots} alt="Dots divider" />
            <a href='/' className='text-textCTA block bg-royalBlue hover:bg-white border-2 border-transparent hover:border-royalBlue rounded w-11/12 text-white hover:text-royalBlue text-center font-medium px-5 py-3 mx-auto shadow'>Add & Install Extension</a>
        </div>
     );
}
 
export default DownloadCard;