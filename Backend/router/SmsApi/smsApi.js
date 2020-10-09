const express = require('express')
const querystring = require('querystring');
const axios = require('axios') ;
const router = express.Router();
const ApiUserName = 'Ravikanth';
const ApiUserPassword = 'SMS@Pass1';
const ApiUserSenderId = 'TestID';
const ApiUrl = 'https://login.bulksmsgateway.in/sendmessage.php?';
const generateUniqueId = require('generate-unique-id');
const type = 3;
const Newapi = {
  user: ApiUserName,
  password: ApiUserPassword,
  sender: ApiUserSenderId,
  type: 3
}
router.get('/sendSms',(req,res)=>{
    const {message,number} = req.body
    if(message === ''){
        const randomumber = generateUniqueId({
            length:4,
            useLetters: false
        })
        message = `Your otp is ${randomumber}`
    }
    var config = {
        method: 'GET',
        url: `${ApiUrl}${querystring.stringify(Newapi)}` + '&numbers=' + number + '&' + querystring.stringify({ message: message }),
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*',
          'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
        },
      };
      
     axios(config).then(results=>{
         res.json(results)
     })
})



module.exports = router