const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname + 'public')));

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'pug')
    .get('/', (req, res) => res.render('pages/mainpage'))
    .get('/mainpage', (req, res) => res.render('pages/mainpage'))
    .get('/about', (req, res) => res.render('pages/about'))
    .get('/data', (req, res) => res.render('pages/data'))
    .get('/diary', (req, res) => res.render('pages/diary'))
    .get('/projects', (req, res) => res.render('pages/projects'))
    .get('/travel', (req, res) => res.render('pages/travel'))
    .get('/travel-asia', (req, res) => res.render('pages/travel-asia'))
    .get('/travel-europe', (req, res) => res.render('pages/travel-europe'))
    .get('/travel-northamerica', (req, res) => res.render('pages/travel-northamerica'))
    .get('/travel-southamerica', (req, res) => res.render('pages/travel-southamerica'))
    .get('/myStory', (req, res) => res.render('pages/myStory'))
    .listen(port, () => console.log(`Listening on ${ port }`))