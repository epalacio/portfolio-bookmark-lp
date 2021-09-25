import { useState } from 'react';
import { Tab } from '@headlessui/react';

import featuresTab1Img from '../img/illustration-features-tab-1.svg';
import featuresTab2Img from '../img/illustration-features-tab-2.svg';
import featuresTab3Img from '../img/illustration-features-tab-3.svg';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Features = () => {
  let [categories] = useState({
    'Simple Bookmarking': [
      {
        id: 1,
        title: 'Bookmark in one click',
        content:
          'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
        imgUrl: featuresTab1Img,
      },
    ],
    'Speedy Searching': [
      {
        id: 2,
        title: 'Intelligent search',
        content:
          'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
        imgUrl: featuresTab2Img,
      },
    ],
    'Easy Sharing': [
      {
        id: 3,
        title: 'Share your bookmarks',
        content:
          'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
        imgUrl: featuresTab3Img,
      },
    ],
  });

  return (
    <div className=''>
      <div className='features-intro max-w-screen-md mx-auto mt-16 text-center'>
        <h2 className='text-subHeaderMobile md:text-subHeaderDesktop text-valhalla font-medium'>
          Features
        </h2>
        <p className='text-textMobile md:text-textDesktop text-graySuit my-8 w-9/12 mx-auto'>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <Tab.Group defaultIndex={0}>
        <Tab.List className='flex flex-col sm:flex-row justify-around border-b-2 border-linkWater max-w-screen-md mx-auto mx-auto'>
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'cursor-pointer text-valhalla hover:text-carnation py-4 border-b-4',
                  selected ? 'border-carnation' : 'border-transparent'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx}>
              {posts.map((post) => (
                <div key={post.id} className='featureCard flex flex-col lg:flex-row py-10 px-12'>
                  <div>
                    <img
                      className='mx-auto my-6 max-w-imgWidthMobile sm:max-w-featureImgWidthDesktop'
                      src={post.imgUrl}
                      alt={post.title}
                    />
                  </div>
                  <div className='featureCardText flex flex-col justify-center align-center text-center md:text-left px-4 md:px-20'>
                    <h3 className='text-valhalla text-subHeaderMobile md:text-subHeaderDesktop'>
                      {post.title}
                    </h3>
                    <p className='text-graySuit text-textMobile md:text-textDesktop my-6'>
                      {post.content}
                    </p>
                    <a
                      className='text-textCTA block bg-royalBlue hover:bg-white border-2 border-transparent hover:border-royalBlue rounded w-max text-white hover:text-royalBlue text-center font-medium px-5 py-3 mx-auto sm:ml-0 shadow'
                      href='/'
                    >
                      More Info
                    </a>
                  </div>
                </div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default Features;