import { BrowserRouter as Router, Link} from 'react-router-dom';

import featuresTab1Img from '../../img/illustration-features-tab-1.svg'

const FeatureSection = (props) => {
    return ( 
        <Router>
        <div className='featureCard flex flex-col md:flex-row py-10 px-12'>
            <div>
                <img className='mx-auto my-6 max-w-imgWidthMobile sm:max-w-featureImgWidthDesktop' src={featuresTab1Img} alt={props.title}/>
            </div>
            <div className='featureCardText flex flex-col justify-center align-center text-center md:text-left px-4 md:px-20'>
                <h3 className='text-valhalla text-subHeaderMobile md:text-subHeaderDesktop'>{props.title}</h3>
                <p className='text-graySuit text-textMobile md:text-textDesktop my-6'>{props.content}</p>
                <Link className='text-textCTA block bg-royalBlue rounded w-max text-white text-center font-medium px-5 py-3 mx-auto sm:ml-0' to='/'>More Info</Link>
            </div>
        </div>
        </Router>
     );
}
 
export default FeatureSection;