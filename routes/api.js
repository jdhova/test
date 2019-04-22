const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const router = express();
const app = express();


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cors());


const username = require('../config/keys').username;
const password = require('../config/keys').password;

router.post('/testing', (req,res) => {
    res.send('here now home')
})

  router.post('/mail', (req,res) => {
      
    const data = req.body;
  
  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: username,
      pass: password
    }
  });
  
  const mailOptions = {
    from: data.email,
    to: 'jdhova0010@gmail.com',
    subject: 'email',
    html: `<p>${data.name}</p>
            <p>${data.email}</p>
            <p>${data.message}</p>`
  };
  
  smtpTransport.sendMail(mailOptions,
  (error, response) => {
    if(error) {
      res.send(error)
    }else {
      res.send('Success')
    }
    smtpTransport.close();
  });
  
  })

  module.exports = router
