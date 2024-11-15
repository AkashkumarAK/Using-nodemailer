// const express=require('express')
// const bodyparser=require('body-parser');
// const nodemailer=require('nodemailer');
// const path=require('path')
// const cors = require('cors');



// const app=express();

// app.use(cors());
// app.use(express.static(path.join(__dirname,'/client')))
// //app.use(bodyparser.urlenchoded({extended:true}));

// app.get("/",function(req,res){
//     res.sendFile(__dirname +"/client/src/App.js");
//     console.log(__dirname);
// })


// app.post('/login', async (req, res) => {
//     try {
//         const { email, password, message } = req.body;
//         console.log('Received request body:', req.body.email); // Check if you are receiving the correct data


//         // Validate input fields
//         if (!email || !password || !message) {
//             return res.status(400).json({ error: 'All fields are required' });
//         }

//         // Configure nodemailer
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'akash.sparn@gmail.com',
//                 pass: 'AKASH@1030', // Make sure this is correct
//             },
//         });

//         const mailOptions = {
//             from: 'akash.sparn@gmail.com',
//             to: email,
//             cc: 'akash.sparn@gmail.com',
//             subject: 'Thanks for your time',
//             text: message,
//         };

//         // Send the email
//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 console.error('Error sending email:', error);
//                 return res.status(500).json({ error: 'Failed to send email' });
//             }
//             res.status(200).json({ message: 'Email sent successfully!' });
//         });
//     } catch (err) {
//         console.error('Unexpected server error:', err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });


// // app.post("/login",function(req,res){
// //    // const comm=req.body.message;
    
// //    // const ema=req.body.email;
// //    const { email, password, message } = req.body;

// //     if (!email || !password || !message) {
// //         return res.status(400).json({ error: 'All fields are required' });
// //     }
// //     var transpoter=nodemailer.createTransport({
// //         service:'gmail',
// //         auth:{
// //             user:'akash.sparn@gmail.com',
// //             pass:'AKASH@1030'}


// //     })
// //     var mailOptions={
// //         from:'akash.sparn@gmail.com',
// //         to: email,
// //         cc:'akash.sparn@gmail.com',
// //         subject:'Thanks for yuour time',
// //         text:message,
// //     };
// //     transpoter.sendMail(mailOptions,function(error,info)
// //     {
// //         if (error) {
// //             console.error('Error sending email:', error);
// //             return res.status(500).json({ error: 'Failed to send email' });
// //         }
// //         res.status(200).json({ message: 'Email sent successfully!' });
// //     }
// // )

// //     })
  


// app.listen(3001,function(){
//     console.log("server started at 3001");
// })


const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const cors = require('cors');
const app = express();

// Middleware for parsing JSON and URL encoded data
app.use(express.json()); // Parses application/json
app.use(express.urlencoded({ extended: true })); // Parses application/x-www-form-urlencoded

// Enable CORS
app.use(cors());

// POST route for login
app.post('/login', async (req, res) => {
  try {
    const { email, password, message } = req.body;
    console.log('Received request body:', req.body); // Check the request body

    // Validate input fields
    if (!email || !password || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'aakashguptarbs@gmail.com',
        pass: 'kltx vutf yers llsv', // Replace with correct credentials
      },
    });

    const mailOptions = {
      from: 'aakashguptarbs@gmail.com',
      to: email,
      cc: 'aakashguptarbs@gmail.com',
      subject: 'Thanks for your time',
      text: message,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send email' });
      }
      res.status(200).json({ message: 'Email sent successfully!' });
    });
  } catch (err) {
    console.error('Unexpected server error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(3001, () => {
  console.log("Server started on port 3001");
});
