'use client';
import React, { useEffect, useState } from 'react'

const managespace = () => {

  const [spacelist, setSpaceList] = useState([]);
  // const [masterList, setMasterList] = useState([]);

  const fetchSpacelist = async () => {
    const res = await fetch("http://localhost:5000/space/getall");
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setSpaceList(data);

  }
  useEffect(() => {
    fetchSpacelist();
  }, [])


  const displaySpace = () => {
    return (
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-slate-800">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-start whitespace-nowrap"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                #
              </span>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start whitespace-nowrap min-w-64"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                Name
              </span>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start whitespace-nowrap"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                category
              </span>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start whitespace-nowrap"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                Price
              </span>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start whitespace-nowrap"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                1h
              </span>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start whitespace-nowrap"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                24h
              </span>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start whitespace-nowrap"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                7d
              </span>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start whitespace-nowrap"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                Address
              </span>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start whitespace-nowrap"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                city
              </span>
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-start whitespace-nowrap"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                States
              </span>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start whitespace-nowrap"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                others
              </span>
            </th>
          </tr>
        </thead>
        {
          spacelist.map((space) => {
            return (

              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="size-px whitespace-nowrap px-6 py-3">
                    <button type="button" className="flex items-center gap-x-2">
                      <svg
                        className="flex-shrink-0 size-4 text-gray-800 dark:text-white"
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
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span className="text-sm text-gray-800 dark:text-gray-200">
                        1
                      </span>
                    </button>
                  </td>
                  <td className="size-px whitespace-nowrap px-6 py-3">
                    <div className="flex items-center gap-x-3">
                      <svg
                        className="flex-shrink-0 size-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={2500}
                        height={2500}
                        viewBox="0.004 0 63.993 64"
                      >
                        <path
                          d="M63.04 39.741c-4.274 17.143-21.638 27.575-38.783 23.301C7.12 58.768-3.313 41.404.962 24.262 5.234 7.117 22.597-3.317 39.737.957c17.144 4.274 27.576 21.64 23.302 38.784z"
                          fill="#f7931a"
                        />
                        <path
                          d="M46.11 27.441c.636-4.258-2.606-6.547-7.039-8.074l1.438-5.768-3.512-.875-1.4 5.616c-.922-.23-1.87-.447-2.812-.662l1.41-5.653-3.509-.875-1.439 5.766c-.764-.174-1.514-.346-2.242-.527l.004-.018-4.842-1.209-.934 3.75s2.605.597 2.55.634c1.422.355 1.68 1.296 1.636 2.042l-1.638 6.571c.098.025.225.061.365.117l-.37-.092-2.297 9.205c-.174.432-.615 1.08-1.609.834.035.051-2.552-.637-2.552-.637l-1.743 4.02 4.57 1.139c.85.213 1.683.436 2.502.646l-1.453 5.835 3.507.875 1.44-5.772c.957.26 1.887.5 2.797.726L27.504 50.8l3.511.875 1.453-5.823c5.987 1.133 10.49.676 12.383-4.738 1.527-4.36-.075-6.875-3.225-8.516 2.294-.531 4.022-2.04 4.483-5.157zM38.087 38.69c-1.086 4.36-8.426 2.004-10.807 1.412l1.928-7.729c2.38.594 10.011 1.77 8.88 6.317zm1.085-11.312c-.99 3.966-7.1 1.951-9.083 1.457l1.748-7.01c1.983.494 8.367 1.416 7.335 5.553z"
                          fill="#fff"
                        />
                      </svg>
                      <span className="font-semibold text-sm text-gray-800 dark:text-white">
                        {space.title}
                      </span>
                      <span className="text-xs text-gray-500">BTC</span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-6 py-3">
                    <span className="text-sm text-gray-800 dark:text-white">
                      {space.category}
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-6 py-3">
                    <span className="text-sm text-gray-800 dark:text-white">
                      {space.price}
                    </span>

                  </td>
                  <td className="size-px whitespace-nowrap px-6 py-3">
                    <span className="text-sm text-red-500">-0.1%</span>
                  </td>
                  <td className="size-px whitespace-nowrap px-6 py-3">
                    <span className="text-sm text-green-500">0.3%</span>
                  </td>
                  <td className="h-px w-72 whitespace-nowrap">
                    <span className="text-sm text-red-500">-3.8%</span>
                  </td>
                  <td className="size-px whitespace-nowrap px-6 py-3">
                    <span className="text-sm text-gray-800 dark:text-white">
                      {space.location}
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-6 py-3">
                    <span className="text-sm text-gray-800 dark:text-white">
                      {space.city}
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-6 py-3">
                    <span className="text-sm text-gray-800 dark:text-white">
                      {space.state}
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-6 py-3">
                    <span className="text-sm text-gray-800 dark:text-white">
                      {space.facilities}
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-6 py-3">
                    <span className="text-sm text-gray-800 dark:text-white">
                      {space.area}
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-6 py-3">
                    <div className="inline-block">
                      <div id="hs-sparklines-line-chart-1" />
                    </div>
                  </td>
                </tr>
              </tbody>
            )

          })
        }
      </table>

    )

  }


  return (
    <div>
      <>
        {/* Table Section */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Card */}
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                  {/* Header */}
                  <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      Space List
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      The global cryptocurrency market cap today is $1.09 Trillion, a{" "}
                      <span className="text-green-500">0.5%</span> change in the last
                      24 hours.
                    </p>
                    <a
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      href="/admin/addspace"
                    >
                      <svg
                        className="flex-shrink-0 size-4"
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
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                      Add Space
                    </a>
                  </div>
                  {/* End Header */}
                  {/* Table */}

                  {/* End Table */}
                </div>
              </div>
            </div>
          </div>
          {/* End Card */}
        </div>
        {
          displaySpace()
        }
        {/* End Table Section */}
      </>
    </div>
  )
}

export default managespace;