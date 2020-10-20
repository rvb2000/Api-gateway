# Api-gateway
Simple Api-gateway building using node.js

Dependencies used are _fast-gateway_ & _restana_.

Installing and running :
  * Step 1 : open cmd/terminal in the current path.
  * Step 2 : run _npm install_ command.
  * Step 3 : go into the orderService folder by running _cd ./orderService_ command in cmd.
  * Step 4 : run _npm install_ command again.
  * Step 5 : go into the productService folder by running _cd ../productService_ command in cmd.
  * Step 6 : run _npm install_ command again.
  * Step 7 : TO run the gateway and services open 3 terminals/cmds.
  * Step 8 : Set path to each cmd to its respective file which are _apiGateway.js_ , _orderService.js_ & _productService.js_ .
  * Step 9 : Run these files using _node fileName.js_ command.
  * Step 10: Test services using Postman and generate requests.

Ports 
  * 3000 - Api-gateway
  * 4000 - Product Service
  * 5000 - Order Service
  
 Order Services 
  * GET - orders/ 
  * POST - orders/
  * GET - orders/{orderId}
  * DELETE - order/{orderId}
  
  Product Services 
    * GET - products/ 
    * POST - products/
    * GET - products/{productId}
    * PATCH - products/{productId}
    * DELETE - products/{productId}
    
   Sample test : GET - http://localhost:3000/orders/1234

