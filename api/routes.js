'use strict';



module.exports = function(app) {
  let productsCtrl = require('./controllers/ProductContronller');
  let photoCtrl = require('./controllers/PhotoController');
  let categoryCtrl = require('./controllers/CategoryController');
  let orderCtrl = require('./controllers/OrderController');
  // let productTppeCtrl = require('./controllers/ProductTypeController');
  let accountController = require('./controllers/AccountController');
  // var cartCtrl = require('./controllers/CartControler');
  // var orderCtrl = require('./controllers/OrderController');
    // todoList Routes

  //Lấy toàn bộ dữ liệu của sản phẩm
  app.route('/api/products')
  .get(productsCtrl.get);

  //Lấy hình ảnh theo ID_product
  app.route('/api/photo/search')
  .get(photoCtrl.get);

  // Lấy toàn bộ các loại category
  app.route('/api/category')
  .get(categoryCtrl.get);

  // Login vào sever
  
  app.route('/api/login')
  .post(accountController.post);

  // Xữ lý đặt hàng
  app.route('/api/order')
  .post(orderCtrl.postOrder);

  // Gửi lưu chi tiết đơn hàng
  app.route('/api/order/detail') 
  .post(orderCtrl.postOrderDetail); 

};