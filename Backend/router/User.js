const express = require("express");
const router = express.Router();
const createDatabase = require('../database/database')
const registration = require('../Model/Authentication/Authentication')
const conn = require('../database/database');
const app = express();

const Authentication = require('./Users/Authentication')

// app.use('/auth', Authentication)