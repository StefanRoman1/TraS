const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const yoloRoutes = require('./routes/yoloRoutes')
const videoRoutes = require('./routes/videoRoutes')
const { default: mongoose } = require('mongoose')

const app = express();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected !'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//Routes
app.use('/api/yolo', yoloRoutes)
app.use('/api/video', videoRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Node.js backend running on port ${PORT}`)
})