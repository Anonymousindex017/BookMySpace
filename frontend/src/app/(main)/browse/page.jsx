'use client';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Browse = () => {

  const [spacelist, setSpaceList] = useState([]);
  const [masterList, setMasterList] = useState([]);

  const fetchSpacelist = async () => {
    const res = await fetch("http://localhost:5000/space/getall");
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setSpaceList(data);
    setMasterList(data);
  }
  useEffect(() => {
    fetchSpacelist();
  }, [])

  return (
    <div>
      <>
        <button
          data-drawer-target="separator-sidebar"
          data-drawer-toggle="separator-sidebar"
          aria-controls="separator-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            />
          </svg>
        </button>
        <div className='grid grid-cols-3 gap-10'>
          {
            spacelist.map((space) => {
              return (
                <div className="my-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <Link  href={"/space-details/" + space._id}>
                    <img className="card-img rounded-t-lg" src={`${process.env.NEXT_PUBLIC_API_URL}/${space.image}`} alt="" />
                  </Link>
                  <div className='p-4 sm:p-8'>
                    <h5 className="mb-4 text-xl font-medium text-white dark:text-white">
                      {space.title}
                    </h5>
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                      <span className="text-3xl font-semibold">Rs</span>
                      <span className="text-5xl font-extrabold tracking-tight">{space.price}</span>
                      <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                        / day
                      </span>
                    </div>
                    <Disclosure>
                      <Disclosure.Button className="py-2">
                        Common Facilities
                      </Disclosure.Button>
                      <Disclosure.Panel className="text-gray-500">
                        <ul role="list" className="space-y-5 my-7">
                          {
                            space.facilities.map(facility => (
                              <li className="flex items-center">
                                <svg
                                  className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                                  {facility}
                                </span>
                              </li>
                            ))
                          }
                        </ul>
                      </Disclosure.Panel>
                    </Disclosure>
                    <div>
                    <Link
                      href={"/space-details/" + space._id}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      More Info
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>

      </>

    </div>
  )
}

export default Browse;