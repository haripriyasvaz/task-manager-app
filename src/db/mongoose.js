const mongoose=require('mongoose')
const validator=require ('validator')
//connecting to mongoose:
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
useNewUrlParser:true,
})

//connecting to the mongoose

// mongoose.connect('connectionurl/databasename',{
//   useNewUrlParser:true,
//   useCreateIndex:true,
// })

// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
//     useNewUrlParser:true
// })


// //defning the database
// const User=mongoose.model('User',{
//     name:{
//         type:String,
//         required:true,
//         trim:true
      
//     },
//     age:{
//         type:Number,
//         default:0,
//         //custom validate function
//         validate(value){
//             if(value<0){
//                 throw new Error('Age must be a positive number')
//         }}
          
//         },
//     email:{
//         type:String,
//         required:true,
//         trim:true,//refer schema in documentation
//         lowercase: true,
//         validate(value){
//             if(!validator.isEmail(value))
//             {
//                 throw new Error('Enter a valid email address')
//             }    
//         }},
//     password:{
//             type: String,
//             required: true,
//             trim: true,    
//             minLength: 6,
//             maxLength:12,
//             validate(value){
//                if(value.toLowerCase().includes('password')){
//                 throw new Error('Please reset your password without the word "password')
//                }
//             }
//         }



//         }

       

    
// )      


    


// //creating an instance of database
// const me=new User({
//     name: ' S.Haripriya',
//     age:25,
//     email: 'haripriyasvaz@gmail.com ',
//     password: 'word123'
// })

// //saving the instance
// me.save().then(()=>
// {
//   console.log(me)  
// }).catch((error)=>{
//   console.log('ERROR:',error)
// })
//-------------------------------Task App----------------------------------------------------------



//defining collection
// const Task=mongoose.model('Task',{
//     description:{
//         type: String,
//         trim:true,
//         required: true

//     },
//     completed:{
//         type:Boolean,
//         default: false
//     }
// })

