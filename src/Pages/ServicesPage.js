import React from 'react'
import ServicePageBgImg from '../assets/images/service-bg1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrafficLight, faPerson, faPeopleGroup, faArrowsRotate, faBox, faPersonFallingBurst } from '@fortawesome/free-solid-svg-icons'
import { faCar, faStopwatch20, faListOl, faSitemap } from '@fortawesome/free-solid-svg-icons'

const ServicesPage = () => {
  return (
    <>
      <div className='text-center mb-5'>
        <div className="justify-center bg-no-repeat bg-cover h-56" style={{ backgroundImage: `url(${ServicePageBgImg})` }}>
          <h1 className="text-5xl text-white pt-28 font-bold text-center drop-shadow-md">Our Services</h1>
          <hr className='w-48 mt-2 mx-auto h-1 bg-orange-500 border-0 rounded' ></hr>
          {/* <img src={AboutUsImg} alt='NoImg' className='w-screen h-100' /> */}

        </div>
      </div>


      <div>
        <h3 className="text-4xl pt-28 font-bold text-center drop-shadow-md">Traffic Management</h3>
        <hr className='w-48 mt-2 mb-10 mx-auto h-1 bg-orange-500 border-0 rounded' ></hr>
        <div>
          <div className='flex justify-center items-center flex-wrap gap-10'>

            <div class="w-96 max-w-sm p-6 flex justify-start items-center gap-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Number Plate Recognition</h5>
            </div>

            <div class="w-96 max-w-sm p-6 flex justify-start items-center gap-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
              </svg>
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Wrong Lane Detection</h5>
            </div>


            <div class="w-96 max-w-sm p-6 flex justify-start items-center gap-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
              </svg>
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Vehicle Classification</h5>
            </div>

            <div class="w-96 max-w-sm p-6 flex justify-start items-center gap-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
              </svg>
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Vehicle Count</h5>
            </div>

            <div class="w-96 max-w-sm p-6 flex justify-start items-center gap-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Parking Voilation Detection</h5>
            </div>

            <div class="w-96 max-w-sm p-6 flex justify-start items-center gap-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Helmet Detection</h5>
            </div>

            <div class="w-96 max-w-sm p-6 flex justify-start items-center gap-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Speed Voilation</h5>
            </div>

            <div class="w-96 max-w-sm p-6 flex justify-start items-center gap-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <FontAwesomeIcon className='text-xl' icon={faTrafficLight} />
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Red Light Voilation</h5>
            </div>

            <div class="w-96 max-w-sm p-6 flex justify-start items-center gap-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Seatbelt Detection</h5>
            </div>

          </div>
        </div>
      </div>

      <div>
        <h3 className="text-4xl pt-28 font-bold text-center drop-shadow-md">Safe & Smart City</h3>
        <hr className='w-48 mt-2 mb-10 mx-auto h-1 bg-orange-500 border-0 rounded' ></hr>
        <div className='flex justify-center items-center flex-wrap gap-10'>
          <div>
            <div class="w-96 max-w-sm p-6 flex justify-start items-center gap-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <FontAwesomeIcon className='text-2xl' icon={faPerson} />
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Facial Recognition</h5>
            </div>
          </div>

          <div className='flex justify-center items-center flex-wrap gap-10'>
            <div class="w-96 max-w-sm p-6 flex justify-start items-center gap-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <FontAwesomeIcon className='text-2xl' icon={faPeopleGroup} />
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Crowd Analysis</h5>
            </div>
          </div>

          <div className='flex justify-center items-center flex-wrap gap-10'>
            <div class="w-96 max-w-sm p-6 flex justify-start items-center gap-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <FontAwesomeIcon className='text-2xl' icon={faArrowsRotate} />
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Intrusion Detection</h5>
            </div>
          </div>

          <div className='flex justify-center items-center flex-wrap gap-10'>
            <div class="w-96 max-w-sm p-6 flex justify-start items-center gap-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <FontAwesomeIcon className='text-2xl' icon={faBox} />
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Loitering Detection</h5>
            </div>
          </div>

          <div className='flex justify-center items-center flex-wrap gap-10'>
            <div class="w-96 max-w-sm p-6 flex justify-start items-center gap-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <FontAwesomeIcon className='text-2xl' icon={faPersonFallingBurst} />
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Incident Detection</h5>
            </div>
          </div>

          <div className='flex justify-center items-center flex-wrap gap-10'>
            <div class="w-96 max-w-sm p-6 flex justify-start items-center gap-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <FontAwesomeIcon className='text-2xl' icon={faPeopleGroup} />
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">People Counting</h5>
            </div>
          </div>
        </div>
      </div>

      <div className='mb-20'>
        <h3 className="text-4xl pt-28 font-bold text-center drop-shadow-md">Ware House</h3>
        <hr className='w-48 mt-2 mb-10 mx-auto h-1 bg-orange-500 border-0 rounded' ></hr>
        <div className='flex justify-center items-center flex-wrap gap-10'>
          <div>
            <div class="w-96 max-w-sm p-6 flex justify-start items-center gap-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <FontAwesomeIcon className='text-2xl' icon={faCar} />
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Vehicle TAT calculation</h5>
            </div>
          </div>
          
          <div>
            <div class="w-96 max-w-sm p-6 flex justify-start items-center gap-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <FontAwesomeIcon className='text-2xl' icon={faStopwatch20} />
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Time calculation</h5>
            </div>
          </div>

          <div>
            <div class="w-96 max-w-sm p-6 flex justify-start items-center gap-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <FontAwesomeIcon className='text-2xl' icon={faListOl} />
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Packet counting</h5>
            </div>
          </div>

          <div>
            <div class="w-96 max-w-sm p-6 flex justify-start items-center gap-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <FontAwesomeIcon className='text-2xl' icon={faCar} />
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Vehicle Management</h5>
            </div>
          </div>

          <div>
            <div class="w-96 max-w-sm p-6 flex justify-start items-center gap-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <FontAwesomeIcon className='text-2xl' icon={faSitemap} />
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Inventory Management</h5>
            </div>
          </div>






        </div>
      </div>  









    </>
  )
}

export default ServicesPage