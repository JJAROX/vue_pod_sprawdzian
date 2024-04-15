const express = require("express")
const app = express()
const PORT = 3000;
const path = require("path")
const fs = require("fs");
const { log } = require("console");


app.use(express.static('static'))
app.use(express.static('static/zadania'))

app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT)
})


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/static/index.html"))

})

app.get("/zadania", (req, res) => {
  const filenames = fs.readdirSync(__dirname + "/static/zadania");
  res.json({ filenames })
})

app.get('/shop', (req, res) => {
  const products =
    ['Myszka', 'Monitor', 'Tablet']

  const delivery = ['Kurier DPD', 'inPOST', 'Poczta Polska']


  const payment = ['blik', 'paypal', 'google pay']


  res.json({ products, delivery, payment })
})
