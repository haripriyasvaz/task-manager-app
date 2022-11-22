const mongoose=require('mongoose')
const validator=require ('validator')

const User=mongoose.model('User',{    //defining the collection
        name:{
            type:String,
            required:true,
            trim:true
          
        },
        age:{
            type:Number,
            default:0,
            //custom validate function
            validate(value){
                if(value<0){
                    throw new Error('Age must be a positive number')
            }}
              
            },
        email:{
            type:String,
            required:true,
            trim:true,//refer schema in documentation
            lowercase: true,
            validate(value){
                if(!validator.isEmail(value))
                {
                    throw new Error('Enter a valid email address')
                }    
            }},
        password:{
                type: String,
                required: true,
                trim: true,    
                minLength: 6,
                maxLength:12,
                validate(value){
                   if(value.toLowerCase().includes('password')){
                    throw new Error('Please reset your password without the word "password')
                   }
                }
            }
    
    
    
            }
    
           
    
        
    )      

    //exporting the collection:
    module.exports=User
    