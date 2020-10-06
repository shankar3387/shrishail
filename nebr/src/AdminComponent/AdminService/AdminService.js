import { DataService } from '../../../src/config/dataService/dataService'
require('dotenv').config()

export default {
    getSellers: async () => {
      return DataService.post('/Auth/userregistration')
    },
    getUsers: async () => {
        return DataService.get('/Auth/userregistration')
      },

  }