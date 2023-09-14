import React from 'react'
import Contact from '../../components/Contact'

const FaceRecognition = () => {
  return (
    <>
      <div className='text-center'>
        <div className="bg-gray-400 h-56">
          <h1 className="text-5xl text-white pt-28 font-bold text-center drop-shadow-md">Face Recognition</h1>
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
                  <img src="https://marvel-b1-cdn.bc0a.com/f00000000190864/f.hubspotusercontent30.net/hubfs/2451133/Facial%20Recognition%20Man%20Header.png" alt=""
                    class="object-cover w-full lg:h-full " />
                </div>
              </div>
            </div>
            <div class="w-full px-4 md:w-1/2 ">
              <div class="lg:pl-20">
                <div class="mb-8 ">
                  <h2 class="max-w-xl mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                    Vinayan's Face Recognition System</h2>
                  <p class="inline-block mb-6 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                    <span
                      class="text-base font-normal text-gray-500 dark:text-gray-400">Unlocking the Future: The Power of Face Recognition Technology</span>
                  </p>
                  <p class="max-w-md text-gray-700 dark:text-gray-400">
                    advanced facial recognition system provides a Single platform to manage the safety and security of entire premises. Enterprise solution can use the existing cameras installed in the multiple locations of the premise-Enterprise solution comes with features like contact-less attendance marking, Access Control, intrusion detection, alerts for suspected/prohibited personals. Enterprise solution supports all major brands of cameras available in the market today. Lightning fast A1 based software capable to match the faces with registered database in real time with great accuracy.
                  </p>
                </div>
                {/* <div class="mb-8">
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
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  )
}

export default FaceRecognition