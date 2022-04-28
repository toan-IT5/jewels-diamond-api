'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')
var crypto = require('crypto');

const table = 'account'

module.exports = {
    // post:(req, res) => {
    //     // lấy userName và password từ user (Người sử dụng app)
    //     let userName = req.body.username;
    //     let password = req.body.password;
    //     // var hash = crypto.createHash('md5').update(password).digest('hex');

    //     let sql = 'SELECT * FROM account WHERE username = ? AND password = ?'
    //     db.query(sql, [userName, password],(err, response) => {
    //         // If không tìm thấy sẽ phản hồi trạng thái về cho user
    //         if (err) throw err
    //             res.json(response)
    //     })
    // },
    // //Thêm tài khoản mới vào dữ liệu
    // put: (req, res) => {
    //     let data = req.body;
    //     let sql = 'INSERT INTO account SET ?'
    //     db.query(sql, [data], (err, response) => {
    //         if (err) throw err
    //         res.json({message: 'Insert account success!'})
    //     })
    // },
    //Kiểm tra user name đã tồn tại hay chưa
    get: (req, res) => {
    
        let sql = 'SELECT * FROM `category` WHERE 1'
        db.query(sql,(err, response) => {
            if (err) throw err
            
            res.json({
                "Status":true,
                "Data" : response
            })
        })
    }
}