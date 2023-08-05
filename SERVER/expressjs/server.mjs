console.log("this is express server hello world")


import express from 'express';
const app = express()


app.get('/', (req, res) => {
  console.log("hello world", new Date())
    
  res.send('Hello World!' + new Date())

})
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Example app listening on port ${port}`)
})