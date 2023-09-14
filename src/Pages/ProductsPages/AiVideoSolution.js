import React from 'react'
import Contact from '../../components/Contact'


const AiVideoSolution = () => {
    return (
        <>
            <div className='text-center'>
                <div className="bg-gray-400 h-56">
                    <h1 className="text-5xl text-white pt-28 font-bold text-center drop-shadow-md">Video Analytics</h1>
                    <hr className='w-36 mt-2 mx-auto h-1 bg-orange-500 border-0 rounded' ></hr>
                    {/* <img src={AboutUsImg} alt='NoImg' className='w-screen h-100' /> */}

                </div>
            </div>
            <section class="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
                <div class="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full mb-8 md:w-1/2 md:mb-0">
                            <div class="sticky top-0 z-50 overflow-hidden ">
                                <div class="relative mb-6 lg:mb-10 lg:h-2/4 ">
                                    <img src="https://www.securitymagazine.com/ext/resources/Issues/2020/May/video-analytics/SEC0520-Video-Feat-slide1_900px.jpg?height=635&t=1588962635&width=1200" alt=""
                                        class="object-cover w-full lg:h-full " />
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 md:w-1/2 ">
                            <div class="lg:pl-20">
                                <div class="mb-8 ">
                                    <h2 class="max-w-xl mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                                        AI-Based Video Analytics Solutions</h2>
                                    <p class="inline-block mb-6 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                        <span
                                            class="text-base font-normal text-gray-500 dark:text-gray-400">AI Video Analytics Solutions for a Smarter Future</span>
                                    </p>
                                    <p class="max-w-md text-gray-700 dark:text-gray-400">
                                        Vinayan's  AI Video Analytics solutions redefine security with real-time
                                        fence jumping detection, accurate object and people counting, high-precision
                                        human detection, and efficient smoke & fire detection.
                                    </p>
                                </div>
                                <div class="mb-8">
                                    <h2
                                        class="w-16 pb-1 mb-4 text-2xl font-bold border-b border-blue-300 dark:text-gray-400 dark:border-gray-600">
                                        Features</h2>
                                </div>
                                <div className='pl-10'>
                                    <div class="mb-8 ">
                                        <h2
                                            class="w-60 pb-1 mb-4 text-xl font-semibold ">
                                            Fence Jumping Detection</h2>
                                    </div>
                                    <div class="mb-8 ">
                                        <h2
                                            class="w-60 pb-1 mb-4 text-xl font-semibold ">
                                            Object Counting</h2>
                                    </div>
                                    <div class="mb-8 ">
                                        <h2
                                            class="w-60 pb-1 mb-4 text-xl font-semibold ">
                                            Human Detection</h2>
                                    </div>
                                    <div class="mb-8 ">
                                        <h2
                                            class="w-60 pb-1 mb-4 text-xl font-semibold ">
                                            People Counting</h2>
                                    </div>
                                    <div class="mb-8 ">
                                        <h2
                                            class="w-60 pb-1 mb-4 text-xl font-semibold ">
                                            Smoke & Fire Detection</h2>
                                    </div>
                                    <div class="mb-8 ">
                                        <h2
                                            class="w-60 pb-1 mb-4 text-xl font-semibold ">
                                            Intrusion Detection</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
        </>

    )
}

export default AiVideoSolution