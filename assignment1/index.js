const express = require('express');
const app = express();

//routes
const homeRouter = require('./routes/home');
const userRouter = require('./routes/users');
app.use(homeRouter.router);
app.use(userRouter.router);

app.listen(3000, ()=>{
    console.log('Listening...');
})