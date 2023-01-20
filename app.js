//npm으로 설치한 애들 연결하기

const expressLayout = require('express-ejs-layouts');
const express = require('express');
//이 부분 새로 추가
var cookieParser = require('cookie-parser')
const routers = require('./routes/route');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//이 부분 새로 추가
app.use(cookieParser())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayout);
app.use('/',routers);
app.use(express.static(path.join(__dirname, 'public'))); 
module.exports = app; 
