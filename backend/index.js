const express = require('express');
require('dotenv').config();

const cors = require('cors');
const port = 5000

const app = express();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


//fill the require data
const userRouter = require("./routers/userRouter")
const spaceRouter = require("./routers/spaceRouter")
const bookingRouter = require("./routers/bookingRouter")
const contactusRouter = require("./routers/contactusRouter")
const utilRouter = require("./routers/utils")



app.use(express.json());
app.use(cors({
    //fiil port address you to allow it
    origin: ["http://localhost:3000"]
}));

//that is port to start express server
app.use("/user", userRouter); 
app.use("/space", spaceRouter);
app.use("/booking", bookingRouter);
app.use("/contactus", contactusRouter);
app.use("/util", utilRouter);

app.use(express.static('./static/uploads'));
app.post('/create-payment-intent', async (req, res) => {
    const { amount, customerData } = req.body;
    // const { name, address } = customerData;
    console.log(amount);
    const customer = await stripe.customers.create(customerData);
    console.log(customer.id);
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: 'inr',
      description: 'Payment Description',
      customer : customer.id
    });
    res.json({
      clientSecret: paymentIntent.client_secret
    });
  });
  
  app.post('/retrieve-payment-intent', async (req, res) => {
    const { paymentIntentId } = req.body;
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    res.json(paymentIntent);
  });

//start express server
app.listen(port, () => {
    console.log('express server started')
});

