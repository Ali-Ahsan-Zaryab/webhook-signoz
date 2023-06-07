const router = require('express').Router();

const { handleWebhook, createOrder, createEvent, getOrders, getOrder } = require('../controllers/order');

router.post('/webhook', handleWebhook );

module.exports = router;

