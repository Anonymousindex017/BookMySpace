'use client';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

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
                Address
              </span>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start whitespace-nowrap"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                City
              </span>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start whitespace-nowrap"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                State
              </span>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start whitespace-nowrap"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                Facilities
              </span>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start whitespace-nowrap"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                Area in sqft
              </span>
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-start whitespace-nowrap"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                Action
              </span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {
            spacelist.map((space) => {
              return (

                <tr>

                  <td className="size-px whitespace-nowrap px-6 py-3">
                    <span className="font-semibold text-sm text-gray-800 dark:text-white">
                      {space.title}
                    </span>
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
                    {/* delete button */}
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => deleteSpace(space._id)}>Delete</button>
                  </td>
                </tr>
              )

            })
          }
        </tbody>
      </table>

    )

  }

  const deleteSpace = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/space/delete/${id}`, {
      method: 'DELETE'
    }).then((res) => {
      console.log(res.status);
      toast.success('Space Deleted Successfully');
      fetchSpacelist();
    })
  }


  return (
    <div>
      <>
        {/* Table Section */}
        <div className="max-w-[87rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Card */}
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700 ">
                  {/* Header */}
                  <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 ">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      Space List
                    </h2>
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
                </div>
              </div>
            </div>
          </div>
          {/* End Card */}
        </div>

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {
            displaySpace()
          }
        </div>
        {/* End Table Section */}
      </>
    </div>
  )
}

export default managespace;