'use client';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'

const ManageUser = () => {

  const [userlist, setUserList] = useState([]);
  // const [masterList, setMasterList] = useState([]);

  const fetchUserlist = async () => {
    const res = await fetch("http://localhost:5000/user/getall");
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setUserList(data);
  }
  useEffect(() => {
    fetchUserlist();
  }, [])


   const deleteUser = async(id) => {
    const res = await fetch("http://localhost:5000/user/delete/" +id, {
      method:"DELETE",
      
    }).then((res) => {
      if(res.status === 200){
        enqueueSnackbar("user deleted successfully", {variant:"success"})
        fetchUserlist();
      }else{
        enqueueSnackbar("somthing went worng",{variant:"warning"})
      }
    })
   }

  const displayUser = () => {
    return (
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-slate-800">
          <tr>
            <th scope="col" className="ps-6 py-3 text-start">
              <label
                htmlFor="hs-at-with-checkboxes-main"
                className="flex"
              >
              </label>
            </th>
            <th
              scope="col"
              className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
            >
              <div className="flex items-center gap-x-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                  Name
                </span>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 text-start">
              <div className="flex items-center gap-x-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                  Email
                </span>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 text-start">
              <div className="flex items-center gap-x-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                  Contact
                </span>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 text-start">
              <div className="flex items-center gap-x-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                  Password
                </span>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 text-start">
              <div className="flex items-center gap-x-2">
               {/* { <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                  Create At
                </span>} */}
              </div>
            </th>
            <th scope="col" className="px-6 py-3 text-start">
              <div className="flex items-center gap-x-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                  Activities
                </span>
              </div>
            </th>
          </tr>
        </thead>
        {
          userlist.map((user) => {
            return (
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="size-px whitespace-nowrap">
                    <div className="ps-6 py-3">
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap">
                    <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                      <div className="flex items-center gap-x-3">
                       
                        <div className="grow">
                          <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                            {user.firstName}{user.lastName}
                          </span>
                          <span className="block text-sm text-gray-500">

                          </span>
                        </div>
                        <div className="grow">

                          <span className="block text-sm text-gray-500">

                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="h-px w-72 whitespace-nowrap">
                    <div className="px-6 py-3">
                      <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                        {user.email}
                      </span>
                    </div>
                  </td>
                  <td className="h-px w-72 whitespace-nowrap">
                    <div className="px-6 py-3">
                      <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                        {user.contact}
                      </span>

                    </div>
                  </td>
                  <td className="h-px w-72 whitespace-nowrap">
                    <div className="px-6 py-3">
                      <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                        {user.password}
                      </span>

                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-3">
                      <span className="text-sm text-gray-500">
                        {user.createAt}
                      </span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap">
                    <div className="px-6 py-3">
                      <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                        <svg
                          className="size-2.5"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                        Active
                      </span>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => deleteUser(user._id)}>Delete</button>
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
                  <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        Users
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Add users, edit and more.
                      </p>
                    </div>
                    <div>
                      <div className="inline-flex gap-x-2">
                        <a
                          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                          href="/signup"
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
                          Add user
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* End Header */}
                  {
                    displayUser()
                  }
                </div>
              </div>
            </div>
          </div>
          {/* End Card */}
        </div>
        {/* End Table Section */}
      </>

    </div>
  )
}

export default ManageUser;