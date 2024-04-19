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
    theme: 'day'
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
        <div className='size-xl'>
            <div className='shadow-xl radius-lg p-20'>
                <>
                    <div className='grid grid-col-2'>
                        <h3>Space Details</h3>
                        {
                            spaceDetails !== null && (
                                <div className='grid grid-cols-12 gap-5'>
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
                    <div className='grid grid-cols-2'>
                        <h4>Delivery Address</h4>
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
                            rows={8}
                        ></textarea>

                    </div>
                </>
            </div>
            <button mt={30} onClick={getPaymentIntent}>Pay Now</button>
            {
                clientSecret && (
                    <Elements stripe={stripePromise} options={{
                        clientSecret,
                        appearance
                    }}>
                        <PaymentGateway />
                    </Elements>
                )
            }
        </div>
    );
}

export default CheckoutPage;  