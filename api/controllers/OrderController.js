'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('./../db')
var crypto = require('crypto');
var fecha = require('fecha');

const table = 'Order'

module.exports = {
    postOrder: (req, res) => {
        let data = req.body;
        const days = new Date();
        data.Order_Date = fecha.format(days, 'YYYY-MM-DD');
        console.log(data);
        if(data.ID_Order == null){
            let sql = 'INSERT INTO `order` SET ?'
            db.query(sql,data,(err, response) => {
                if (err) throw err
                res.json({
                    "Status":true,
                    "Message" : response.insertId
                })
            })
        }else {
            let sql = 'UPDATE `order` SET ? WHERE ID_Cart = ?'
            db.query(sql, [data,data.ID_Cart], (err, response) => {
                if (err) throw err
                res.json({"Atatus" : true ,"Message": 'Đã cập nhật dữ liệu thành công!'})
            })
        }

    },
    postOrderDetail: (req, res) => {
        let data = req.body;
        console.log(data);
        let sql = 'INSERT INTO `order_detail` SET ?'
        db.query(sql,data,(err, response) => {
            if (err) throw err
            res.json({
                "Status":true,
                "Message" : "Dữ liệu đã được thêm vào server"
            })
        })
    }
}