import React from 'react'
import ContactPageBGImg from '../assets/images/contact-us-bg.jpg'

const ContactPage = () => {
  return (
    <>
      <div className=" justify-center items-center">

      {/* <h1 className="text-3xl font-bold text-center py-5">Contact Us</h1> */}

      <div className='text-center mb-5'>
        <div className="justify-center items-center bg-no-repeat bg-cover h-56" style={{ backgroundImage: `url(${ContactPageBGImg})` }}>
          <h1 className="text-5xl text-white pt-28 font-bold text-center drop-shadow-md">Contact Us</h1>
          <hr className='w-48 mt-2 mx-auto h-1 bg-orange-500 border-0 rounded' ></hr>
          {/* <img src={AboutUsImg} alt='NoImg' className='w-screen h-100' /> */}

        </div>
      </div>

      <div className='my-auto flex justify-center items-center'>
          <div class="mx-auto my-12">
            <div class="flex gap-24">
              <div class="w-96 mb-12 shrink-0 grow-0 border rounded-md shadow-md">
                <div class="flex items-start m-10">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bold dark:text-white">
                      Call Us
                    </p>
                    
                    <p class="text-neutral-500 dark:text-neutral-200">
                      +91-9198284360
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-96 mb-12 shrink-0 grow-0 border rounded-md shadow-md">
                <div class="flex justify-center items-center m-10">
                  <div class="shrink-0">
                    <div class="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-6 grow">
                    <p class="mb-2 font-bold dark:text-white">
                      Mail Us
                    </p>
                    <p class="text-neutral-500 dark:text-neutral-200">
                      support.vinayan@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <h3 className="text-4xl pt-10 font-bold text-center drop-shadow-md">Reach Us</h3>
        <hr className='w-24 mt-2 mb-10 mx-auto h-1 bg-orange-500 border-0 rounded' ></hr>
       

        <div className="py-8 lg:py-10 px-4 mx-auto max-w-screen-md">
          <form action="#" className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" className="py-3 px-5 bg-blue-700 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
          </form>
        </div>

        
      </div>
    </>
  )
}

export default ContactPage