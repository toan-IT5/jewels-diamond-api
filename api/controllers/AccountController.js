'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')
var crypto = require('crypto');

const table = 'account'

module.exports = {
    post:(req, res) => {
        let userName = req.body.username;
        let password = req.body.password;
        // var hash = crypto.createHash('md5').update(password).digest('hex');

        let sql = 'SELECT * FROM account WHERE username = ? AND password = ?'
        db.query(sql, [userName, password],(err, response) => {
            if (err) throw err
                res.json(response)
        })
    },
    put: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO account SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert account success!'})
        })
    },
    get: (req, res) => {
        let userName = req.params.UserName;
    
        let sql = 'SELECT * FROM account WHERE UserName = ?'
        db.query(sql, [userName],(err, response) => {
            if (err) throw err
            
                res.json(response)
        })
    }
}