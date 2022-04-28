const express = require('express')
const app = express()
// Để chuyển chuổi sáng JSON và ngược lại
const bodyParser = require('body-parser')

require('dotenv').load()

// port này sẽ bằng thiết lập trong file .env hoặc defaut = 3000
const port = process.env.PORT || 3000


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Link đến với file routes trong thư muc API
let routes = require('./api/routes') //importing route
routes(app)
// Note:
// req = request (Yêu cầu)
// res = response (Phản hồi từ sever)
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})
// lắng nghe phản hồi từ port ?
app.listen(port)
console.log('RESTful API server started on: ' + port)
