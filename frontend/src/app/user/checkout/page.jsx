'use client';
import React, { useEffect, useRef } from 'react';
import { Paper, Text, TextInput, Button, Group, SimpleGrid, Container, Box, Flex, Loader, NumberInput, Title, Grid, Divider, Stack, Textarea } from '@mantine/core';
// import bg from './bg.svg';
import classes from './Checkoutpage.module.css';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import PaymentGateway from './PaymentGateway';
import { Elements } from '@stripe/react-stripe-js';
import useCartContext from '@/context/CartContext';
import useAppContext from '@/context/AppContext';

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

    const [selFile, setSelFile] = useState('');
    const hasRun = useRef(false);
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
    // console.log(stripePromise);
    const [clientSecret, setClientSecret] = useState('');
    const [tutorDetails, setTutorDetails] = useState(null);
    const { getCartTotalAmount, cartItems } = useCartContext();
    const { currentUser } = useAppContext();

    const addressRef = useRef();
    const pincodeRef = useRef();
    const contactRef = useRef();

    const getPaymentIntent = async () => {
        const shipping = {
            name: currentUser.name,
            address: {
                line1: addressRef.current.value,
                postal_code: pincodeRef.current.value,
                country: 'IN',
            },
        }
        sessionStorage.setItem('shipping', JSON.stringify(shipping));
        console.log(getCartTotalAmount());
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/create-payment-intent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: getCartTotalAmount(),
                customerData: shipping
            })
        });
        const data = await res.json();
        console.log(data);
        setClientSecret(data.clientSecret);
    }

    // console.log(formik.errors);

    return (
        <div className='size-xl'>
            <div className='shadow-xl radius-lg p-20'>
                <>
                    <div className='grid grid-col-2'>
                        <h3>Product Details</h3>
                        {
                            cartItems.map(item => (
                                <div className='flex align-start justify-space-between'>
                                    <img src={`${process.env.NEXT_PUBLIC_API_URL}/${item.image[0]}`} alt={item.name} width={50} />
                                    <div className='box style-{ flexGrow: 1 }'>
                                        <input className='size-lg font-semibold'>{item.title}</Text>
                                        <input className='md'>Amount ₹{item.price} x {item.quantity} </input>
                                    </div>
                                    <div>
                                        <input className='size-lg'> ₹{item.price * item.quantity}</input>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                    <div className='grid grid-cols-2'>
                        <h4>Delivery Address</h4>
                        <div className='flex flex-gap-5'>

                            <Input
                                ref={pincodeRef}
                                type={Number}
                                w={'100%'}
                                label="Pin Code"
                                maxLength={6}
                                minLength={6}
                                variant='filled'
                            />
                            <Input
                                ref={contactRef}
                                w={'100%'}
                                label="Contact"
                                maxLength={10}
                                variant='filled'
                            />
                        </div>
                        <Textarea
                            ref={addressRef}
                            label="Shipping Address"
                            variant='filled'
                            w={'100%'}
                            rows={8}
                        />

                    </div>
                </>
            </div>
            <Button mt={30} onClick={getPaymentIntent}>Pay Now</Button>
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