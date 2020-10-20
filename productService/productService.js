
const products = require('restana')({
    disableResponseEvent : true
});
const productRoutes = require('./api/products');


products.use('/',productRoutes);
products.use((err,req,res)=>{
    console.log(req);
});
products.start(4000).then( function(){
    console.log('Product service running 4000');
});

