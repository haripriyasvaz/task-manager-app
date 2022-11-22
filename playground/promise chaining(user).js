const mongooseconnection=require('../src/db/mongoose.js')
const User=require('../src/models/user.js')


//https://mongoosejs.com/docs/queries.html

User.findByIdAndUpdate("636615480ec7a34345514bfa",{age:26}).then((user)=>{
console.log(user)
return User.countDocuments({age:26})
}).then((result)=>{
console.log(result)
}).catch((e)=>{
    console.log(e)
})




const updateandcount=async(id,age)=>{
    const update= await User.findByIdAndUpdate(id,{age:age})
    const count=  await User.countDocuments({age:age})
    return count
}


updateandcount("636615480ec7a34345514bfa",26).then((result)=>{
console.log(result)
}).catch((e)=>{
console.log(e)
})