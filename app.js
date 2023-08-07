// require packages used in the project
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
  // past the restaurant data into 'index' partial template
  res.render('index')
})

app.get('/about', (req, res) => {
  // past the restaurant data into 'index' partial template
  res.render('about')
})

app.get('/portfolio', (req, res) => {
  // past the restaurant data into 'index' partial template
  res.render('portfolio')
})

app.get('/contact', (req, res) => {
  // past the restaurant data into 'index' partial template
  res.render('contact')
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})