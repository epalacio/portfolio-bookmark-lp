import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

const Faq2 = () => {
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
        <div className='max-w-screen-md mx-auto mt-16 text-center'>
            <h2 className='text-subHeaderMobile md:text-subHeaderDesktop text-valhalla font-medium'>Frequently Asked Questions</h2>
            <p className='text-textMobile md:text-textDesktop text-graySuit my-8 w-10/12 sm:w-9/12 mx-auto'>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
            <div className='questions border-b-2 border-t-2 border-linkWater divide-y-2 divide-linkWater w-10/12 sm:w-9/12 mx-auto  mb-6'>
                {questions.map((question) => (
                    <div>
                    <Disclosure>
                        {({ open }) => (
                        <>
                        <Disclosure.Button className='flex justify-between items-center py-3 w-full'>
                            <span>{question.title}</span>
                            <ChevronDownIcon
                                className={`${open ? 'transform rotate-180 text-carnation' : 'text-royalBlue'} w-5 h-5`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className='text-graySuit text-textMobile sm:text-contentHeader text-left leading-relaxed mt-6 mb-3'>
                        Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                        </Disclosure.Panel>
                        </>
                        )}
                    </Disclosure> 
                    </div>
                ))}
            </div>
            <a className='text-textCTA block bg-royalBlue hover:bg-white border-2 border-transparent hover:border-royalBlue rounded w-max text-white hover:text-royalBlue font-medium px-4 py-3 min-w-ctaWidth mx-auto mt-8 shadow' href='/'>More Info</a>
        </div>
    )
}

export default Faq2
