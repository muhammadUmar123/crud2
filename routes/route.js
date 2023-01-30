const express = require('express')
const route = express.Router()
const User = require('../modal/datamodal')
const multer = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.filename + "___" + Date.now() + "_" + file.originalname)
  }
})

route.get("/", (req, res) => {
  res.render('index', { title: "Home page" })
}) 
route.get("/Cv2", (req, res) => {
  res.render('Cv2', { title: "Home page" })
}) 
route.get("/Cv3", (req, res) => {
  res.render('Cv3', { title: "Home page" })
}) 
route.get("/Page1", (req, res) => {
    res.render('Page1', { title: "Home page" })
  }) 
  route.get("/Page2", (req, res) => {
    res.render('Page2', { title: "Home page" })
  }) 
  
  route.get("/Page3", (req, res) => {
    res.render('Page3', { title: "Home page" })
  }) 

  route.get("/Page4", (req, res) => {
    res.render('Page4', { title: "Home page" })
  }) 

  route.get("/Page5", (req, res) => {
    res.render('Page5', { title: "Home page" })
  }) 

  route.get("/Page7", (req, res) => {
    res.render('Page7', { title: "Home page" })
  }) 

  route.get("/Page8", (req, res) => {
    res.render('Page8', { title: "Home page" })
  }) 

  route.get("/Page9", (req, res) => {
    res.render('Page9', { title: "Home page" })
  }) 

  route.get("/Page10", (req, res) => {
    res.render('Page10', { title: "Home page" })
  })

  route.get("/Page11", (req, res) => {
    res.render('Page11', { title: "Home page" })
  }) 

  route.get("/Page12", (req, res) => {
    res.render('Page12', { title: "Home page" })
  }) 
  


route.get("/add", (req, res) => {
    const user = new User({
        title: 'Some Name',
        snippet: 'sdas@dasrsa.com',
        body: '4325465324'
    })
    user.save((err) => {
        if (err) {
            console.log('Error Occured')
        } else {
            console.log('Data saved')
        }
    })

})
route.get("/user", (req, res) => {
    res.send("All User")
    User.find().exec((err, user) => {
        if (err) {
            console.log('Some eror while getting users')
        } else { console.log('data array'+user) }
    })
})

module.exports = route