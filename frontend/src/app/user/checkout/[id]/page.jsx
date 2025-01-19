'use client';
import React, { useEffect, useRef } from 'react';
// import classes from './Checkoutpage.module.css';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import PaymentGateway from './PaymentGateway';
import { Elements } from '@stripe/react-stripe-js';
import useAppContext from '@/context/AppContext';
import { useParams } from 'next/navigation';

const appearance = {
    theme: 'night'
};

const CheckoutSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    pincode: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
});

function CheckoutPage() {

    const { id } = useParams();
    const hasRun = useRef(false);
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
    // console.log(stripePromise);
    const [clientSecret, setClientSecret] = useState('');
    const [spaceDetails, setSpaceDetails] = useState(null);
    const { currentUser } = useAppContext();

    const addressRef = useRef();
    const pincodeRef = useRef();
    const contactRef = useRef();

    const getPaymentIntent = async () => {
        const shipping = {
            name: currentUser.firstName + ' ' + currentUser.lastName,
            address: {
                line1: addressRef.current.value,
                postal_code: pincodeRef.current.value,
                country: 'IN',
            },
        }
        sessionStorage.setItem('shipping', JSON.stringify(shipping));
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/create-payment-intent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: spaceDetails.price,
                customerData: shipping
            })
        });
        const data = await res.json();
        console.log(data);
        setClientSecret(data.clientSecret);
    }

    const fetchSpaceData = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/space/getbyid/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSpaceDetails(data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchSpaceData();
    }, [])


    // console.log(formik.errors);

    return (
        <div className='size-xl md'>
            <div className='shadow-xl radius-lg p-20'>
                <>
                    <div className='grid grid-col-2'>
                        <h3>Space Details</h3>
                        {
                            spaceDetails !== null && (
                                <div className=''>
                                    <div className='col-span-4'>
                                        <img src={`${process.env.NEXT_PUBLIC_API_URL}/${spaceDetails.image}`} alt="" />
                                    </div>
                                    <div className='col-span-8'>
                                        <h3 className='text-2xl'>{spaceDetails.title}</h3>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <>
                        {/* Contact Us */}
                        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                            <div className="mt-12 max-w-lg mx-auto">
                                {/* Card */}
                                <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">

                                    <form>
                                        <div className="grid gap-4 lg:gap-6">
                                            {/* Grid */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">

                                                <div className='grid grid-cols-2'>
                                                    <h4>Your Address</h4>
                                                    <div className='flex flex-gap-5'>
                                                        <input
                                                            ref={pincodeRef}
                                                            placeholder='Pin Code'
                                                            type={Number}
                                                            w={'100%'}
                                                            maxLength={6}
                                                            minLength={6}
                                                            variant='filled'
                                                        />
                                                        <input
                                                            ref={contactRef}
                                                            placeholder='Contact'
                                                            w={'100%'}
                                                            label="Contact"
                                                            maxLength={10}
                                                            variant='filled'
                                                        />
                                                    </div>
                                                    <textarea
                                                        ref={addressRef}
                                                        label="User Address"
                                                        variant='filled'
                                                        w={'100%'}
                                                        rows={'100%'}
                                                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                    ></textarea>

                                                </div>

                                            </div>
                                        </div>
                                        {/* End Grid */}
                                    </form>
                                </div>
                                {/* End Card */}
                            </div>
                        </div>
                        {/* End Contact Us */}
                    </>


                    <button className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800' onClick={getPaymentIntent}>Pay Now</button>
                    {
                        clientSecret && (
                            <Elements stripe={stripePromise} options={{
                                clientSecret,
                                appearance
                            }}>
                                <PaymentGateway spaceid={id} />
                            </Elements>
                        )
                    }
                </>
            </div>
        </div>
    );
}

export default CheckoutPage;  