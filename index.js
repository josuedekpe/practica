const express = require('express');
const bodyparser = require('body-parser');
const sequelize = require('./utils/database');
const User=require('./models/user');

const app = express();
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended:false}));

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    next();
});

//test router
app.get('/',(req,res)=>{
    res.send('Hello World');
});

//CRUD ROUTES
app.use('/users',require('./routes/user'));

//error handling

app.use((err,req,res,next)=>{
    console.log(err);
    res.status=err.status || 500;
    const message=err.message
    res.status(status).json({message:message});
});

//syng database
sequelize
.sync()
.then(result=>{
    console.log('Database synced successfully');
    app.listen(3000)

})
.catch(err=>console.log(err));