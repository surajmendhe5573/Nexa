const express= require('express');
const app= express();
const dotenv= require('dotenv').config();
const constant= require('./config/keys');

const Port= process.env.PORT || constant.PORT || 6000
const env = process.env.NODE_ENV || 'development';

app.use(express.json());

require('./db/DB'); 

app.get('/', (req, res)=>{
    res.send('Jai Shree Ram')
})

app.use('/api/users', require('./routes/user'));


app.listen(Port, ()=>{
    console.log(`server is running on http://localhost:${Port} with ${env} environment`);
    
})
