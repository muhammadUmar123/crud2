const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dbURI = "mongodb+srv://Test:asdf1234@cluster0.lcg3i0d.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbURI)
const db = mongoose.connection
db.on('error', () => console.log('Error in connecting'))
db.once('open', () => console.log('Connectedto db'))

//Db Connection
// app.use('/css',express.static(path.join(rootDir,'node_modules','bootstrap','dist','css')))
app.use(express.urlencoded({ extended: false }))
app.use('/assets',express.static('assets'))
app.use(express.json())
app.set('view engine', 'ejs')
// app.use(session({
//     secreat:"my",
// saveUninitialized:true,
// resave:false

// }))

// app.get('/',(req,res)=>{
//     res.send('Hello Server')
// })
app.use("", require('./routes/route'))

app.listen('3000', (req, res) => {
    console.log('Server Started')
})