const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const Task = require('./models/task'); 
const Subtask = require('./models/subTask'); 
const User = require('./models/user'); 
const cron = require('node-cron');
const twilio = require('twilio');

const app = express();

app.use(bodyParser.json());