require('./db/mongoose.js')  //to ensure mongoose is connected
const User=require('./models/user.js')//exporting the user model(collection)
const Task=require('./models/task.js')//exporting the user model(collection)

const express = require('express')
const app = express()
const port = process.env.PORT || 3000



app.listen(port,()=>{  //listening to the port
    console.log("You are listening to port=>",port)
    })

//convert incoming json response to an object
app.use(express.json())

//creating a document using:
//POSTING API
app.post('/users',async(req,res)=>{

    const user= new User(req.body)
    try{
    await  user.save()
    console.log('posting an object in the collection',user)
    res.status(201).send(user)
    }
    catch(e){
        res.status(400).send(e)
    }



//convertthe json request to send in postman to object and fetch its body to enter in user model
// const user=new User(req.body)
// console.log('posting an object in the collection',user)
// user.save().then(()=>{
//     res.status(201).send(user)})
// .catch((e)=>{
//     res.status(400);   //changing the status code to 400,client error
//     res.send(e)
// })//sending the response to the postman

 })


app.post('/tasks',async(req,res)=>{
    const task=new Task(req.body)
    try{   
        await task.save()
        console.log('posting an object in the collection task',task)
        res.status(201).send(task)
    }
    catch(e){
        res.status(400).send(e)
    }
        
    })
    




    //READ OPERATION
    //Finding users collection

app.get('/users',async(req,res)=>{
     //https://mongoosejs.com/docs/queries.html
        try{
           const user= await User.find()
            res.send(user)
        }
        catch(e){
            res.status(500).send(e)   //reading issues are due to server error
        }
    })




     //for single user
    app.get('/users/:id',async(req,res)=>{
        try{
            //console.log(req.params)//(here params=:id eg-6367c7e8f0b16e0d8f97fbbf)
            //https://mongoosejs.com/docs/queries.html
            const user=await User.findById(req.params.id)
           
            //no user with that id:
           if (!user){
            return res.status(404).send()
            } //not found client error
            
            res.send(user)
        }
        
       catch(e){
           res.status(500).send(e)   //reading issues are due to server error
       }
    })

       //repeat for taks
       app.get('/tasks',async(req,res)=>{
        try{
            const task= await Task.find()
            res.send(task)
        }
        
       catch(e){
        res.status(500).send(e)
       }
    })      


       //fetching one task
       app.get('/tasks/:id',async(req,res)=>{
        try{
            const task=await Task.findById(req.params.id)
            if (!task){
                res.status(401).send()
            }

            res.send(task)
        }
       
        catch(e){
            res.status(500).send(e)
        }
       })

    