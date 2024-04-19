'use client';
import { IconCircleCheck, IconCircleX } from '@tabler/icons-react'
import { useParams, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

const ThankYou = () => {

  const hasRun = useRef();

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  // const location = useLocation();
  let params = useSearchParams();
  const { spaceid } = useParams();
  // console.log();
  // console.log(params.get('redirect_status'));
  // const navigate = useNavigate();

  const savePayment = async () => {
    const paymentDetails = await retrievePaymentIntent();
    // console.log(paymentDetails);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        space: spaceid,
        bookingDate: new Date(),
        duration: 5,
        totalAmount: paymentDetails.amount/100,
        intentId: params.get('payment_intent'),
        paymentDetails: paymentDetails,
        // hours: selHrs
      })
    });
    console.log(response.status);
    // const data = await response.json();
    // console.log(data);
  }

  const retrievePaymentIntent = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/retrieve-payment-intent`, {
      method: 'POST',
      body: JSON.stringify({ paymentIntentId: params.get('payment_intent') }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response.status);
    const data = await response.json();
    // console.log(data);
    return data;
  }

  useEffect(() => {
    if (!hasRun.current) {
      hasRun.current = true;
      if (params.get('redirect_status') === 'succeeded') {
        savePayment();
      }
    }
  }, [])


  return (
    <div>
      <div className='md'>

        <div className='flex flex-justify-center align-center style-height:50vh direction-column'>
          {
            params.get('redirect_status') === 'succeeded' ?
              <>
                <IconCircleCheck size={100} color={'green'} />
                <div style={{ textAlign: 'center', padding: '50px' }}>
                  <h1 className='color-'>Thank You For Your Purchase!</h1>
                  <p className='style-fontSize:18px'>Your order has been placed successfully.</p>
                  <p style={{ fontSize: '18px' }}>We've sent a confirmation email to your email address.</p>
                </div>
                <button className="color-blue mt-20- component={Link} to=">Go to Home</button>
              </>
              :
              <>
                <iconCircleX size={100} color={'red'} />
                <text className='size-xl'>Payment Failed</text>
                <text className='size-lg' >Your payment was not successful. Please try again.</text>
                <text className='size-lg'>If the problem persists, please contact us.</text>
                <button className='color-blue mt-20 component={Link} to="/"'>Go to Home</button>
              </>
          }
        </div>
      </div>
    </div>
  )
}

export default ThankYou;