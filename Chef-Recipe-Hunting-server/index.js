const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const chefInfo = require('./data/chef-info-recipe.json')


app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get('/chefinfo', (req, res) => {
  res.send(chefInfo)
})

app.get('/chefinfo/:id', (req, res) => {
  const id = req.params.id;
  const singleChef = chefInfo.find(n => n.id == id)
  console.log(id);
  res.send(singleChef)
})

app.listen(port, () => {
  console.log(`Chef is running ${port}`)
})