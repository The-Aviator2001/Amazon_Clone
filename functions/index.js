const functions = require('firebase-functions');
// // Create and Deploy Your First Cloud Functions
const express = require("express")
const cors =require('cors')
const stripe =require("stripe")('sk_test_51HXunWA5IXPmM2LDxWmvRk1QMKdztbmC41DzPeFIi1Nz2BCPRxhFC48qJxO2rfjvQfn268ejfvzhx7rm3WO3jcqU00oo1H6bkO')

// API

//App Config
const app = express();

// Middleware
app.use(cors({origin :true}))
app.use(express.json())

// API routes
app.get('/',(request,response)=> response.status(200).send ('Hello World'))

//app.get('/sayantan',(request,response)=> response.status(200).send ('Whats up Qazi'))

app.post('/payments/create',async(request,response) =>{
    const total =request.query.total;
    console.log('Payment Request Received BOOM!!! for this amount >>>>>',total)

    const paymentIntent =await stripe.paymentIntents.create({
        amount:total,
        currency:"inr"
    })

    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})

//Listen command
exports.api = functions.https.onRequest(app)

//Api Endpoint
//http://localhost:5001/challenge-9635d/us-central1/api


