const mongooseconnection=require('../src/db/mongoose.js')
const Task=require('../src/models/task.js')

// Task.findByIdAndDelete("6367f6ec2476f20983490418").then((taskdeleted)=>{
//     console.log('The task deleted is:',taskdeleted)
//     return Task.countDocuments({completed:false})
// }).then((count)=>{
//  console.log('The no.of incomplete task is ',count)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteandcount=async(id,status)=>{
const findtodlt= await Task.findById(id)
const count= await Task.countDocuments({completed:status})
return count
}

deleteandcount("637c6892bf84ed1d3ce970ed",false)
.then((result)=>{
console.log(result)})
.catch((e)=>{
console.log(e)
})