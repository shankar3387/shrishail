import axios from 'axios';
import querystring from 'querystring';
import { DataService } from '../../../src/config/dataService/dataService'
require('dotenv').config()
export default {
  postRegistration: async (data) => {

    return DataService.post('/Auth/userregistration', data)
    // return await axios.post(`/Auth/userregistration`, data);
  },

  getRegistration: async () => {
    return await axios.get(`/Auth/registration`);
  },

  postUserLogin: async (data) => {
    return DataService.post('/Auth/userLogin', data)
  },
  postEmailValidation: async (data) => {
    return DataService.post('/Auth/emailValidation', data)
  },
  postSellerLogin: async (data) => {
    let res = await axios.post(`/Auth/sellerLogin`, data);
    return res.data || [];
  },
  postSellerRegistration: async (data) => {
    return await axios.post(`/Auth/sellerRegistration`, data);
    // return res.data || [];
  },
  postSellerEmailValidation: async (data) => {
    let res = await axios.post(`/Auth/selleremailValidation`, data);
    return res.data || [];
  },

  getOtp: async (apidata) => {
    const ApiUserName = 'Ravikanth';
    const ApiUserPassword = 'SMS@Pass1';
    const ApiUserSenderId = 'TestID';
    const ApiUrl = 'http://login.bulksmsgateway.in';
    const type = 3;
    const Newapi = {
      user: ApiUserName,
      password: ApiUserPassword,
      sender: ApiUserSenderId,
      mobile: apidata.phone,
      message: apidata.message,
      type: 3
    }
    console.log(process.env)
    // querystring.stringify(Newapi)
    // {headers:{'Access-Control-Allow-Origin':'*'}}/
    // return DataService.get(`${ApiUrl}/sendmessage.php?${querystring.stringify(Newapi)}`)
    let res = await axios.get(`${ApiUrl}/sendmessage.php?${querystring.stringify(Newapi)}`);
    return res
  }
}