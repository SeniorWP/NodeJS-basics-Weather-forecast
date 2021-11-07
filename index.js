const express = require('express')
const bodyParser = require('body-parser')
const weatherRequest = require('./requiest/weather.request')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index', { weather: null, error: null })
})

app.post('/', async (req, res) => {
  const { city } = req.body

  const { weather, error } = await weatherRequest(city)
  console.log(weather);
  console.log(error);
  res.render('index', { weather, error })
})

app.listen(3000, () => {
  console.log('Server has started on port 3000...')
})