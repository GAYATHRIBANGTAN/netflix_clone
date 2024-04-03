const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const { LoginDB } = require('./schema.js')

const app = express()
app.use(bodyParser.json())
app.use(cors())


async function connectToDb() {
  try{   
   await mongoose.connect('mongodb+srv://Gayathri:82209@cluster0.t3icp1c.mongodb.net/New?retryWrites=true&w=majority&appName=Cluster0')
    console.log('DB Connection established')
    const port=process.env.PORT || 8000
    app.listen(port,function(){
        console.log(`Listening on port ${port}` )
    })
  }catch(error){
    console.log(error)
    console.log("Couldn't establish connection")
  }
}

connectToDb()

app.post('/add-user', async function(request, response) {
  try {
    const newUser = await LoginDB.create({
      username: request.body.username,
      password: request.body.password
    })
    response.status(201).json({
      status: 'success',
      message: 'User created successfully',
     user: newUser
    })
  } catch (error) {
    console.error('Error creating user:', error)
    response.status(500).json({
      status: 'failure',
      message: 'Failed to create user',
      error: error.message
    })
  }
})


app.get('/get-user', async function(request, response) {
  try {
    const users = await LoginDB.find();
    response.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    response.status(500).json({
      status: 'failure',
      message: 'Failed to fetch users',
      error: error.message
    })
  }
})