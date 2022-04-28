'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')
var crypto = require('crypto');

const table = 'products'

module.exports = {
    get:(req, res) => {
        let sql = 'SELECT * FROM `products` WHERE 1'
        db.query(sql,(err, response) => {
            // If không tìm thấy sẽ phản hồi trạng thái về cho user
            if (err) throw err
            res.json({
                "Success" : true,
                "Data" : response
            })
        })
    },
    getByType:(req, res) => {
        
        let sql = 'SELECT * FROM `products` WHERE ID_Category = ?'
        db.query(sql,[req.params.id_category],(err, response) => {
            // If không tìm thấy sẽ phản hồi trạng thái về cho user
            if (err) throw err
                res.json(response)
        })
    },
    show:(req, res) => {
        let id_category = req.query.id_category;
        let sql = 'SELECT * FROM `products` WHERE ID_Category = ? LIMIT 7'
        db.query(sql,id_category,(err, response) => {
            // If không tìm thấy sẽ phản hồi trạng thái về cho user
            if (err) throw err
                res.json(response)
        })
    }

   

    
}