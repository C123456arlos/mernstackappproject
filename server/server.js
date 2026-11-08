// https://app-2gnxy.sevalla.app/api/payment/webhook






// import express from 'express'
// import 'dotenv/config'
// import cors from 'cors'
// import connectDB from './configs/db.js'
// import { clerkMiddleware } from '@clerk/express'

// import { clerkWebhooks } from './controllers/clerkWebhooks.js'
// // import  { stripeWebhooks } from './controllers/clerkWebhooks.js'
// import userRouter from './routes/userRoute.js'
// import dns  from "node:dns/promises"
// import educatorRouter from './routes/educatorRoute.js'
// import connectCloudinary from './configs/cloudinary.js'
// import courseRouter from './routes/courseRoute.js'
// // import userAuthRouter from './routes/userRoutes.js'
// // import { protect } from './middleware/protect.js'
// dns.setServers(["1.1.1.1"])
// connectDB()
// await connectCloudinary()


// const app = express()
// app.use('/stripe', express.raw({type:'application/json'}), stripeWebhooks)
// app.use(cors())
// app.use(express.json())
// app.use(clerkMiddleware())
// app.use('/clerk', express.json(),clerkWebhooks)
// app.use('/clerk', clerkWebhooks)
// app.post('/webhooks', clerkWebhooks)
// app.use('/api/educator', express.json(), educatorRouter)
// app.use('/api/course', express.json(), courseRouter)
// app.get('/', (req, res) => res.send('server running'))
// app.use('/api/stripe', express.raw({ type: 'application/json' }), stripeWebhooks)
// app.use('/api/user', userRouter)
// app.use('/api/user', educatorRouter)
// app.use('/api/user', protect)
// app.use('/api/user', userRouter)
// app.use('/api/user', userAuthRouter)


// const PORT = process.env.PORT || 3000
// app.listen(PORT, () => console.log(`server running on port ${PORT}`))





























// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDB from './configs/db.js'
// import { clerkMiddleware } from '@clerk/express'
// import dns from "node:dns/promises"
// import { serve } from 'inngest/express'
// import { inngest, functions } from './inngest/index.js'
// import showRouter from './routes/showRoutes.js'
// import bookingRouter from './routes/bookingRoutes.js'
// import adminRouter from './routes/adminRoutes.js'
// import userRouter from './routes/userRoutes.js'
// import { stripeWebhooks } from './controllers/stripeWebhooks.js'
// const app = express()
// const port = 3000
// dns.setServers(["1.1.1.1"])
// await connectDB()

// app.use('/api/stripe', express.raw({ type: 'application/json' }), stripeWebhooks)

// app.use(express.json())
// app.use(cors())
// app.use(clerkMiddleware())

// app.get('/', (req, res) => res.send('server is live'))
// // app.use('/api/inngest', serve({ client: inngest, functions }))
// app.use('/api/show', showRouter)
// app.use('/api/booking', bookingRouter)
// app.use('/api/admin', adminRouter)
// app.use('/api/user', userRouter)

// app.listen(port, () => console.log(`server listening ${port}`))































































// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDB from './configs/db.js'
// import { clerkMiddleware } from '@clerk/express'
// import dns from "node:dns/promises"
// import { serve } from 'inngest/express'
// import { inngest, functions } from './inngest/index.js'
// import showRouter from './routes/showRoutes.js'
// import bookingRouter from './routes/bookingRoutes.js'
// import adminRouter from './routes/adminRoutes.js'
// import userRouter from './routes/userRoutes.js'
// import { stripeWebhooks } from './controllers/stripeWebhooks.js'
// const app = express()
// const port = 3000
// dns.setServers(["1.1.1.1"])
// await connectDB()

// app.use('/api/stripe', express.raw({ type: 'application/json' }), stripeWebhooks)

// app.use(express.json())
// app.use(cors())
// app.use(clerkMiddleware())

// app.get('/', (req, res) => res.send('server is live'))
// app.use('/api/inngest', serve({ client: inngest, functions }))
// app.use('/api/show', showRouter)
// app.use('/api/booking', bookingRouter)
// app.use('/api/admin', adminRouter)
// app.use('/api/user', userRouter)

// app.listen(port, () => console.log(`server listening ${port}`))








// import express from 'express'
// import 'dotenv/config'
// import cors from 'cors'
// import connectDB from './configs/db.js'
// import { clerkMiddleware } from '@clerk/express'
// import clerkWebhooks from './controllers/clerkWebhooks.js'
// import userAuthRouter from './routes/userAuthRoute.js'
// import dns  from "node:dns/promises"
// import educatorRouter from './routes/educatorRoute.js'
// import userRouter from './routes/userRoute.js'
// import { protect } from './middleware/protect.js'
// import connectCloudinary from './configs/cloudinary.js'
// import courseRouter from './routes/courseRoute.js'
// dns.setServers(["1.1.1.1"])
// connectDB()
// await connectCloudinary()


// const app = express()
// app.use(cors())
// app.use(express.json())
// app.use(clerkMiddleware())
// // app.use('/clerk', express.json(),clerkWebhooks)
// app.use('/clerk', clerkWebhooks)
// app.use('/api/educator', express.json(), educatorRouter)
// app.use('/api/course', express.json(), courseRouter)
// app.use('/api/user', express.json(), userRouter)
// app.get('/', (req, res) => res.send('server running'))
// // app.use('/api/user', educatorRouter)
// // app.use('/api/user', protect)
// app.use('/api/auth', userAuthRouter)

// const PORT = process.env.PORT || 3000
// app.listen(PORT, () => console.log(`server running on port ${PORT}`))



import stripe from 'stripe'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/db.js'
import { clerkWebhooks, stripeWebhooks } from './controllers/clerkWebhooks.js'
import userRouter from './routes/userRoute.js'
import educatorRouter from './routes/educatorRoute.js'
import connectCloudinary from './configs/cloudinary.js'
import courseRouter from './routes/courseRoute.js'
import {clerkMiddleware} from '@clerk/express'
import dns from "node:dns/promises"
dns.setServers(["1.1.1.1"])
const app = express()
await connectCloudinary()
connectDB()
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())
app.post('/webhooks', clerkWebhooks)
// app.use('/api/payment', (req, res, next) => {
//     if (req.originalUrl === '/api/payment/webhook') {
//         express.raw({type: 'application/json'})(req, res, next)
//     } else {
//         express.json()(req, res, next)
// }}
// , paymentRoutes)
app.use('/api/educator', express.json(), educatorRouter)
app.use('/api/course', express.json(), courseRouter)
// app.use('/api/stripe', express.raw({ type: 'application/json' }), stripeWebhooks)
// app.use('/api/stripe', express.json(), stripeWebhooks)
const body={
  "id": "evt_3UZTgcIHXFA0eb7y19ZA56G2",
  "object": "event",
  "api_version": "2025-11-17.clover",
  "created": 1794135059,
  "data": {
    "object": {
      "id": "pi_3UZTgcIHXFA0eb7y1lX7d5rH",
      "object": "payment_intent",
      "allowed_payment_method_types": [
        "card",
        "link"
      ],
      "amount": 100,
      "amount_capturable": 0,
      "amount_details": {
        "tip": {}
      },
      "amount_received": 100,
      "application": null,
      "application_fee_amount": null,
      "automatic_payment_methods": null,
      "canceled_at": null,
      "cancellation_reason": null,
      "capture_method": "automatic_async",
      "client_secret": "pi_3UZTgcIHXFA0eb7y1lX7d5rH_secret_321IuclMnoAY4WnscwqTNhBL9",
      "confirmation_method": "automatic",
      "created": 1794135058,
      "currency": "usd",
      "customer": null,
      "customer_account": null,
      "description": null,
      "excluded_payment_method_types": null,
      "last_payment_error": null,
      "latest_charge": "ch_3UZTgcIHXFA0eb7y1kDr4bVU",
      "livemode": false,
      "managed_payments": {
        "enabled": false
      },
      "metadata": {},
      "next_action": null,
      "on_behalf_of": null,
      "payment_details": {
        "customer_reference": null,
        "order_reference": "cs_test_a1hqcBNFvEYbrNBzlmAPGzlTiIyJYUjYzFbvUIlfZ9WgSdOCvcQBRrwEVA"
      },
      "payment_method": "pm_1UZTgbIHXFA0eb7ybmLBDpK6",
      "payment_method_configuration_details": null,
      "payment_method_options": {
        "card": {
          "installments": null,
          "mandate_options": null,
          "network": null,
          "request_three_d_secure": "automatic"
        },
        "link": {
          "persistent_token": null
        }
      },
      "payment_method_types": [
        "card",
        "link"
      ],
      "payment_record": null,
      "presentment_details": {
        "presentment_amount": 1237,
        "presentment_currency": "bob"
      },
      "processing": null,
      "receipt_email": null,
      "review": null,
      "setup_future_usage": null,
      "shared_payment_granted_token": null,
      "shipping": null,
      "source": null,
      "statement_descriptor": null,
      "statement_descriptor_suffix": null,
      "status": "succeeded",
      "transfer_data": null,
      "transfer_group": null
    }
  },
  "livemode": false,
  "pending_webhooks": 7,
  "request": {
    "id": null,
    "idempotency_key": "30334e24-e168-4603-87cc-8534e96e8063"
  },
  "type": "payment_intent.succeeded"
}
app.use('/api/stripe', express.raw({ type: 'application/json' }), (req, res) => {
     const sig = req.headers['stripe-signature']
    let event
    try {
        event = stripe.webhooks.constructEvent(body, sig, 'whsec_NqQP0hfnCvOzNZO2b9BowWMZsbNf5N4B')
    } catch (error) {
        console.error('webhook signature verification failed', error.message)
        return res.status(400).send(`webhook error ${error.message}`)
    }
    if (event.type === 'payment_intent.succeeded') {
        const paymentIntent = event.data.object
        console.log('payment succeeded', paymentIntent.id)
        try {
            
            if (existingOrder) {
                console.log('order already exists for payment', paymentIntent.id)
                return res.json({received:true})
            }
     
     
     
            console.log('order created successfully', order._id)
        } catch (error) {
            console.error('error creating order from webhook', error)
        }
    }
    res.json({received:true})
})
app.use('/api/user', userRouter)
app.get('/', (req, res) => res.send('server running'))
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server running on port ${PORT}`))












// import express from 'express'
// import 'dotenv/config'
// import cors from 'cors'
// import connectDB from './configs/db.js'

// import { clerkMiddleware } from '@clerk/express'
// import { clerkWebhooks } from './controllers/clerkWebhooks.js'
// import dns  from "node:dns/promises"
// dns.setServers(["1.1.1.1"])
// connectDB()
// const app = express()
// app.use(cors())
// app.use(express.json())
// app.use(clerkMiddleware())
// app.post('/webhooks', clerkWebhooks)
// app.get('/', (req, res) => res.send('server running'))
// const PORT = process.env.PORT || 3000
// app.listen(PORT, () => console.log(`server running on port ${PORT}`))