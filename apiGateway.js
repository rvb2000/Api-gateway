

const gateway = require('fast-gateway');

const server = gateway({
    routes:[{

        prefix:'/products',
        target: 'http://localhost:4000'
    },{
        prefix:'/orders',
        target: 'http://1270.0.1:5000'
    }]
})
server.start(3000);
console.log("Server running port 3000");

