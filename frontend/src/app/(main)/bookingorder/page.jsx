'use client';
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React from 'react'

const bookingorder = () => {

  const bookigForm = useFormik({
    initialValues: {
      location: '',
    duration: '',
    furniture : '',
    services : '',
    coupon : ''
    },
    onSubmit: (values) => {
      
      console.log(values);

      //sending request to backend

      fetch('http://localhost:5000/booking/add', {
        method: 'POST',
        body: JSON.stringify(values), //covert js to json
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            enqueueSnackbar("Booking Added Successfully", { variant: 'success' })
          } else {
            enqueueSnackbar("Somthing went wrong", { variant: 'error' })
          }
        }).catch((err) => {
          console.log(err);
          enqueueSnackbar("Somthing went wrong", { variant: 'error' })
        });
      // validationSchema: signupValidationSchema
    }
  })
  return (
    <div>

      <div className="w-full my-5 mx-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src="https://img.freepik.c-technology_185193-110090.jpg" alt="" />
        </a>
        <h5 className="mb-4 text-xl font-medium text-white dark:text-white">
          Your Order
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
        
          <span className="text-3xl font-semibold">Rs</span>
          <span className="text-5xl font-extrabold tracking-tight">1000</span>
          <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            / 8 hour
          </span>
        </div>
        <ul role="list" className="space-y-5 my-7">
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
              10 Person
            </span>
          </li>
          <li className="flex">
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
              canteen services
            </span>
          </li>
          <li className="flex">
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
              Transport Services
            </span>
          </li>
          <li className="flex">
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
              Confrence Meeting Room
            </span>
          </li>
          
          <li className="flex line-through decoration-gray-500">
            <svg
              className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 ms-3">
              
              wifi Services
            </span>
          </li>
          <li className="flex line-through decoration-gray-500">
            <svg
              className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 ms-3">
              office service
            </span>
          </li>
          <li className="flex">
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
            24×7 phone &amp; email support
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default bookingorder;