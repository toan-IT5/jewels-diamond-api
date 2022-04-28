'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')
var crypto = require('crypto');

const table = 'account'

module.exports = {
    post:(req, res) => {
        // lấy userName và password từ user (Người sử dụng app)
        let userName = req.query.User_Name;
        let password = req.query.Password;
        console.log(userName);
        console.log(password);
        // var hash = crypto.createHash('md5').update(password).digest('hex');

        let sql = 'SELECT * FROM `account` WHERE `User_Name` = ? AND `Password` = ?'
        db.query(sql, [userName, password],(err, response) => {
            // If không tìm thấy sẽ phản hồi trạng thái về cho user
            if (err) throw err
                res.json(response[0])
        })
    },
    //Thêm tài khoản mới vào dữ liệu
    put: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO account SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert account success!'})
        })
    },
    //Kiểm tra user name đã tồn tại hay chưa
    get: (req, res) => {
        let sql = 'SELECT * FROM account WHERE UserName = ?'
        db.query(sql, req.query.ID_Product ,(err, response) => {
            if (err) throw err
            
                res.json(response)
        })
    }
}