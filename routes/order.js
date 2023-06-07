const router = require('express').Router();

const { handleWebhook, createOrder, createEvent, getOrders, getOrder } = require('../controllers/order');

// routing order requests

// you may have middlewares to validate your orders-related http requests

// `POST` request handler for creating an order
router.post('/order', createOrder);
router.post('/webhook', handleWebhook );


// here where your order events are processed for an existing order
router.post('/orders/:order_id/event', createEvent);


// `get` requests handlers
router.get('/orders', getOrders);
router.get('/order/:order_id', getOrder);

module.exports = router;

// https://github.com/Ali-Ahsan-Zaryab/webhook-signoz.git