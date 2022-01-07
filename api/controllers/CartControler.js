'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM cart'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    post: (req, res) => {
        var data = req.body;
        var obj = JSON.parse(JSON.stringify(data));
        
        if (obj.id == null){
            let sql = 'INSERT INTO cart SET ?'
            db.query(sql, [data], (err, response) => {
                if (err) throw err
                var objres = JSON.parse(JSON.stringify(response));
                res.json({"id": objres.insertId})
            })
        }else {
            let sql = 'UPDATE cart SET ? WHERE id = ?'
            db.query(sql, [data,obj.id], (err, response) => {
                if (err) throw err
                res.json({"status" : true ,message: 'success!'})
            })
        }

    },
    get_cart_details: (req, res) => {

        let sql = 'SELECT cart.id, products.id_product, products.product_name, products.price, products.picture, cart.quantily  FROM products INNER JOIN cart ON products.id_product = cart.id WHERE cart.id_account = ?'
        db.query(sql, [req.params.id_account],(err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM cart WHERE id = ?'
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    },
    delete_by_id_account: (req, res) => {
        let sql = 'DELETE FROM cart WHERE cart.id_account = ?'
        db.query(sql, [req.params.id_account], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}