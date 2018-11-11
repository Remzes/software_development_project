const express = require('express');
const expressStaticGzip = require("express-static-gzip");
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');

mongoose.connect(keys.mongoURI);