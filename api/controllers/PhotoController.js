'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')
var crypto = require('crypto');

const table = 'account'

module.exports = {

    get: (req, res) => {
        let ID_Product = req.query.id_product;
    
        let sql = 'SELECT * FROM `photo` WHERE ID_Product = ?'
        db.query(sql, [ID_Product],(err, response) => {
            if (err) throw err

            if (response.length > 0){
                res.json({
                    "Success" : true,
                    "Data" : response
                })
            }else{
                res.json({
                    "Success" : false,
                    "Error" : err
                })
            }

        })
    }
}