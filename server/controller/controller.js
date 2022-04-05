var Userdb=require('../model/model');

// Create and save new user
exports.create=(req,res)=>{
// validate the request first
if(!req.body)
{
    res.status(400).send({message:"Content cant be empty"});
    return;
}
// new user
const user=new Userdb({
    name:req.body.name,
    email:req.body.email,
    gender:req.body.gender,
    status:req.body.status
})

// Save user in database
user
    .save(user)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||"some error"
        });
    });

}

//Retrive and return all users
exports.find=(req,res)=>{
    Userdb.find()
    .then(user=>{ res.send(user)})
    .catch(err=>{res.status(500).send({ message:err.message||"some error"});});
}

//Update a new user 
exports.update=(req,res)=>{
    
}

// delete user
exports.delete=(req,res)=>{
    
}