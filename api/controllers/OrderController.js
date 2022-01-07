'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM `order`'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    }
    ,
    post: (req, res) => {
        var data = req.body;
        var obj = JSON.parse(JSON.stringify(data));
        
        if (obj.id == null){
            let sql = 'INSERT INTO `order` SET ?'
            db.query(sql, [data], (err, response) => {
                if (err) throw err
                var objres = JSON.parse(JSON.stringify(response));
                res.json({"id": objres.insertId})
            })
        }else {
            let sql = 'UPDATE `order` SET ? WHERE id = ?'
            db.query(sql, [data,obj.id], (err, response) => {
                if (err) throw err
                res.json({"status" : true ,message: 'success!'})
            })
        }

    }
}