'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Chicle } from 'next/font/google';
import { useParams } from 'next/navigation';
import React, { Fragment, useEffect, useState } from 'react'
import BookSpace from '../../BookSpace';

const spaceDetails = () => {

  const { id } = useParams();
  const [spaceData, setSpaceData] = useState(null);

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const fetchSpaceDetails = () => {
    fetch('http://localhost:5000/space/getbyid/' + id)
      .then((result) => {
        return result.json();
      })
      .then(data => {
        setSpaceData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchSpaceDetails();
  }, [])

  const displayDetails = () => {
    if (spaceData !== null) {
      return (
        <>
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            {/* Grid */}
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
              <div>
                <img
                  className="rounded-xl"
                  src={`${process.env.NEXT_PUBLIC_API_URL}/${spaceData.image}`}
                  alt="Image Description"
                />
              </div>
              {/* End Col */}
              <div className="mt-5 sm:mt-10 lg:mt-0">
                <div className="space-y-6 sm:space-y-8">
                  <div className="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                          <p className="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-white-900 uppercase rounded-full bg-teal--400">
                            View Space
                          </p>
                        </div>
                      </div>
                      <div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-3">
                        <div className="flex flex-col sm:flex-row">
                          <div className="sm:mr-4">
                            <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-indigo-50">
                              <i className="fa-2x fa-sharp fa-solid fa-city"></i>
                            </div>
                          </div>
                          <div>
                            <h6 className="mb-2 font-semibold leading-5">Location</h6>
                            <p className="mb-3 text-sm text-gray-900">

                            </p>
                            <ul className="mb-4 -ml-1 space-y-2">
                              <li className="flex items-start">
                                <span className="mr-1">
                                  <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                  >
                                    <polygon
                                      strokeWidth={4}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      fill="none"
                                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                  </svg>
                                </span>
                                {spaceData.location}
                              </li>
                              <li className="flex items-start">
                                <span className="mr-1">
                                  <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                  >
                                    <polygon
                                      strokeWidth={4}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      fill="none"
                                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                  </svg>
                                </span>
                                {spaceData.city}
                              </li>
                              <li className="flex items-start">
                                <span className="mr-1">
                                  <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                  >
                                    <polygon
                                      strokeWidth={4}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      fill="none"
                                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                  </svg>
                                </span>
                                {spaceData.state}
                              </li>
                            </ul>
                            <a
                              href="/"
                              aria-label=""
                              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >

                            </a>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row">
                          <div className="sm:mr-4">
                            <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-indigo-50">

                              <i className="fa-2x fa-solid fa-clipboard"></i>
                            </div>
                          </div>
                          <div>
                            <h6 className="mb-2 font-semibold leading-5">Services</h6>
                            <p className="mb-3 text-sm text-gray-900">
                              .
                            </p>
                            <ul className="mb-4 -ml-1 space-y-2">
                              <li className="flex items-start">
                                <span className="mr-1">
                                  <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                  >
                                    <polygon
                                      strokeWidth={4}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      fill="none"
                                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                  </svg>
                                </span>
                                <div className=' flex font-bold '>

                                  {spaceData.facilities.map((facility, index) => (
                                    <p key={index}>{facility}</p>
                                  ))}
                               
                                </div>

                              </li>
                              {/* <li className="flex items-start">
                                <span className="mr-1">
                                  <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                  >
                                    <polygon
                                      strokeWidth={4}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      fill="none"
                                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                  </svg>
                                </span>
                                Canteen
                              </li>
                              <li className="flex items-start">
                                <span className="mr-1">
                                  <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                  >
                                    <polygon
                                      strokeWidth={4}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      fill="none"
                                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                  </svg>
                                </span>
                                Parking
                              </li> */}
                            </ul>
                            <a
                              href="/"
                              aria-label=""
                              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >

                            </a>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row">
                          <div className="sm:mr-4">
                            <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-indigo-50">

                              <i className=" fa-2x fa-solid fa-tag"></i>
                            </div>
                          </div>
                          <div>
                            <h6 className="mb-2 font-semibold leading-5">Prices</h6>
                            <p className="mb-3 text-sm text-gray-900">
                              .
                            </p>
                            <ul className="mb-4 -ml-1 space-y-2">
                              <li className="flex items-start">
                                <span className="mr-1">
                                  <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                  >
                                    <polygon
                                      strokeWidth={4}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      fill="none"
                                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                  </svg>
                                </span>
                                Rs1000
                              </li>
                              <li className="flex items-start">
                                <span className="mr-1">
                                  <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                  >
                                    <polygon
                                      strokeWidth={4}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      fill="none"
                                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                  </svg>
                                </span>
                                Rs3000
                              </li>
                              <li className="flex items-start">
                                <span className="mr-1">
                                  <svg
                                    className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                  >
                                    <polygon
                                      strokeWidth={4}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      fill="none"
                                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                  </svg>
                                </span>
                                Rs5000
                              </li>
                            </ul>
                            <a
                              href="/"
                              aria-label=""
                              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >

                            </a>
                          </div>

                        </div>
                      </div>
                      <button
                        type="button"
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        onClick={e => setIsOpen(true)}
                      >
                        Book Now Space
                      </button>
                    </div>

                  </div>

                </div>
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Features */}
          <div className='max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <div className='grid gap-4 grid-cols-2'>
              <div className='col-6'>
                <h2>Quick Info</h2>
                <li>Max Capacity : 4 People</li>
                <li>Booking : On Host Confirmation</li>
                <li></li>
              </div>
              <div className='col-6'>
                <h2>Open Hours</h2>

                <li>Mon	08:00 AM - 08:00 PM</li>
                <li>Tue	08:00 AM - 08:00 PM</li>
                <li> Wed	08:00 AM - 08:00 PM</li>
                <li>Thu	08:00 AM - 08:00 PM</li>
                <li>Fri	08:00 AM - 08:00 PM</li>
                <li>Sat	08:00 AM - 08:00 PM</li>
                <li>Sun	Closed</li>
              </div>

            </div>
          </div>
        </>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }

  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <BookSpace spaceData={spaceData} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {displayDetails()}
    </div>
  )
}

export default spaceDetails;