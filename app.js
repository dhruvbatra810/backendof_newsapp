const express  = require('express');
const app = express();
const routes  = require('./router');
const port = 3001;
const coonectdb = require('./db/connect');
 require('dotenv').config();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("backendddddddddddddddddddd")
})
app.use('/',routes);
const start = async ()=>{
    try{
        await coonectdb(process.env.Mongo_url);
app.listen(port, console.log(`server is running on port ${port}..`));

    }
    catch(err){
        console.log(err);
    }
}
start();