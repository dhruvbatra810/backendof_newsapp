const users = require('./model/schema1')
const signup = async(req,res)=>{  
    // console.log('post request');
    try{
   const present = await users.find({User_name :req.body.User_name})
    if(present.length === 0)
     {
    const task = await users.create(req.body);
    res.status(201).json(task);
    res.end();}
    else {
        res.status(500).send('username already taken');
    }
}
    catch(error){
        res.status(500).send(error);
    }
}

const login = async(req,res)=>{
   try{
       console.log(req.url);
       const present = await users.find(req.body);
       if(present.length){ 
           res.status(200).send(present);
       }
       else res.status(500).send('invailid username of password');

   }
   catch(error){
       res.status(400).send(error);
   }
}

module.exports = {
    signup,login
}