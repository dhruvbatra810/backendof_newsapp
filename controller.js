const users = require('./model/schema1')
const sgMail = require('@sendgrid/mail')
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
const forgotpass = async(req,res)=>{
  const value  =  await users.find(req.body);
  console.log(value[0]._id);
  if(value.length){
    const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: value[0].email, // Change to your recipient
  from: 'noobcoder1601@gmail.com', // Change to your verified sender
  subject: 'News , change password',
  text: 'click on the Link to change you password    , LINK',
  html: `<h3>click on the link to change you password</h3>  <a href="http://localhost:3000/forgotpass/${value[0]._id}">LINK</h1>`,
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error.body)
  })
  }
  else res.status(500).send('this id doesnot exsist');

}
const update = async(req,res)=>{
try{
 const user = await users.findByIdAndUpdate(req.params.id,req.body);
 res.status(200).send('updated');
}catch(err){
  console.log(err);
  res.stataus(500).send(err);
}

}
module.exports = {
    signup,login,forgotpass,update

}