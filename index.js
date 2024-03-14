
const jsonServer = require('json-server');

const studentServer = jsonServer.create();

const router = jsonServer.router('db.json');

const middleware = jsonServer.defaults();

studentServer.use(middleware);
studentServer.use(router);

const port = 3000;

studentServer.listen(port,()=>{
    console.log('student server is running in port :',port);
})