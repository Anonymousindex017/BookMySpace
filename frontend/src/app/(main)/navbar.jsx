"use client";
import React from 'react'
// import { useLocation } from 'next/navigation';

const Navbar = () => {

  // const location = useLocation();

  // const hideNavbarPaths = ['/login',]

  // const shouldHideNavbar = hideNavbarPaths.includes(location.pathname)

  // return shouldHideNavbar ? null : (
    return (
    <div>
      <>
        {/* ========== HEADER ========== */}
        <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
          <nav
            className="mt-6 relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700"
            aria-label="Global"
          >
            <div className="flex items-center justify-between">
              <a
                className="flex-none text-xl font-semibold dark:text-white"
                href="#"
                aria-label="Brand"
              >
                Book My Work Space
              </a>
              <div className="md:hidden">
                <button
                  type="button"
                  className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  data-hs-collapse="#navbar-collapse-with-animation"
                  aria-controls="navbar-collapse-with-animation"
                  aria-label="Toggle navigation"
                >
                  <svg
                    className="hs-collapse-open:hidden flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1={3} x2={21} y1={6} y2={6} />
                    <line x1={3} x2={21} y1={12} y2={12} />
                    <line x1={3} x2={21} y1={18} y2={18} />
                  </svg>
                  <svg
                    className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div
              id="navbar-collapse-with-animation"
              className="hs-collapse  hidden overflow-hidden transition-all duration-300  md:block"
            >
              <div className="flex lg:justify-end flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-center md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
               
                <a
                  className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                  href="/browse"
                >
                  Home Page
                </a>
               {/* { <a
                  className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                  href="/user/profile"
                >
                 My Profile
                </a>} */}
                <a
                  className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                  href="/about"
                >
                  About
                </a>
                <a
                  className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                  href="/contactus"
                >
                  Contact Us
                </a>
          <a
            className="inline-flex items-center gap-x-2 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="/user/profile/feedback"
          >
            Feedback
          </a>
        

                <form className="max-w-lg ml-auto">
                  <div className="flex">
                  {/* {<button>
                    Log Out
                    </button>} */}
                  </div>
                </form>
              </div>
            </div>
          </nav>
        </header>
        {/* ========== END HEADER ========== */}
      </>

    </div>
  )
}

export default Navbar;