const express = require('express')
var MongoClient = require('mongodb').MongoClient
const app = express()
const dotenv = require('dotenv');
dotenv.config();

const port = 3000

MongoClient.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/animals`, function (err, client) {
  if (err) throw err

  var db = client.db('animals')

  db.collection('mammals').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))