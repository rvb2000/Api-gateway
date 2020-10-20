const orders = require('restana')({
    disableResponseEvent : true
});
const orderRoutes = require('./api/orders');


orders.use('/',orderRoutes);

orders.start(5000).then( function(){
    console.log('order service running 5000');
});

