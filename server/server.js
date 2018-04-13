require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const expressGraphQL = require('express-graphql')
const db = require('./db')
const PORT = 3050

const app = express()

const schema = require('./schema/schema')

app.use(bodyParser.json())
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}))

app.get('/api/heroes')
app.get('/api/heroes/:id/identity')


app.listen(PORT, () => console.log('Listening on Port: ' + PORT))

