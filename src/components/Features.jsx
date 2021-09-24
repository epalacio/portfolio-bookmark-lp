import FeatureSection from './subComponents/featureSection.component';

const featuresContent = [
    {
        'id': 1,
        'title': 'Bookmark in one click',
        'content': 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
        'imgUrl': '../img/illustration-features-tab-1.svg',
    },
    {
        'id': 2,
        'title': 'Intelligent search',
        'content': 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
        'imgUrl': '../img/illustration-features-tab-2.svg',
    },
    {
        'id': 3,
        'title': 'Share your bookmarks',
        'content': 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
        'imgUrl': '../img/illustration-features-tab-3.svg',
    },
]

const Features = () => {
    return ( 
        <div id='features'>
            <div className='features-intro max-w-screen-md mx-auto mt-16 text-center'>
                <h2 className='text-subHeaderMobile md:text-subHeaderDesktop text-valhalla font-medium'>Features</h2>
                <p className='text-textMobile md:text-textDesktop text-graySuit my-8 w-9/12 mx-auto'>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
                <ul id='features-menu' className='flex flex-col sm:flex-row justify-around border-b-2 border-linkWater divide-y-2 divide-linkWater sm:divide-transparent w-10/12 md:w-full mx-auto'>
                    <a href="/"><li className='cursor-pointer text-valhalla hover:text-carnation py-4 border-b-4 border-carnation'>Simple Bookmarking</li></a>
                    <a href="/"><li className='cursor-pointer text-valhalla hover:text-carnation py-4 border-b-4 border-transparent'>Speedy Searching</li></a>
                    <a href="/"><li className='cursor-pointer text-valhalla hover:text-carnation py-4 border-b-4 border-transparent'>Easy Sharing</li></a>
                </ul>
            </div>
            <FeatureSection
                title={featuresContent[0].title}
                content={featuresContent[0].content}
            />
        </div>
     );
}
 
export default Features;