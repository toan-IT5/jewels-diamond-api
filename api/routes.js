'use strict';
module.exports = function(app) {
  let productsCtrl = require('./controllers/ProductController');
  let productTppeCtrl = require('./controllers/ProductTypeController');
  var accountController = require('./controllers/AccountController');
  var cartCtrl = require('./controllers/CartControler');
  var orderCtrl = require('./controllers/OrderController');
    // todoList Routes
  app.route('/products')
  .get(productsCtrl.get);

  app.route('/products/:page')
  .post(productsCtrl.post);

  app.route('/product_type')
  .get(productTppeCtrl.get);

  app.route('/account')
  .post(accountController.post)

  app.route('/account/insert')
  .post(accountController.put);

  app.route('/account/:UserName')
  .get(accountController.get);

  app.route('/cart')
  .get(cartCtrl.get)
  .post(cartCtrl.post);

  app.route('/api/cart/:id')
  .delete(cartCtrl.delete);

  app.route('/cart/:id_account')
  .get(cartCtrl.get_cart_details)
  .delete(cartCtrl.delete_by_id_account);

  app.route('/order')
  .get(orderCtrl.get)
  .post(orderCtrl.post);

  
};