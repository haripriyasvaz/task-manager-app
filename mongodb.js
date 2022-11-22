//const mongodb= require('mongodb')//driver
// const mongoClient=mongodb.MongoClient
// const ObjectId=mongodb.ObjectId
const {MongoClient, ObjectId}= require('mongodb')

const id=ObjectId()
console.log(id.id.length)
console.log(id.toHexString())
console.log(id.getTimestamp())


const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser: true},(error,client)=>{    //connecting to the specific server
    if (error){
        return console.log('Unable to connect')
    }

    const db=client.db(databaseName) //creating a database

//         db.collection('Users').insertOne({    //inserting one document in the collection users
//             Name: 'Kumar Chetan',
//             Age: 27
//         })

//         console.log('document added successfully!')

//        const data=db.collection('Tasks').insertMany([
//             {
//                 description: 'Angular',
//                 status: 'incomplete'
//             },
//             {
//                 description:'VueJS',
//                 status:'incomplete'
//             },
//             {
//                 description: 'Bootstrap',
//                 status:'incomplete'
//             }
//             ])
            

// //QUERYING A DOCUMENT
// db.collection('Users').findOne({Age:27}).forEach(console.log)



// //finding documents
// db.collection('Tasks').find({status: 'incomplete'}).forEach(console.log)
//   // 

//updating a document
// const updateone=db.collection('Users').updateOne({
//     _id : new ObjectId("634e22dca2f94f166b83eaf5")
// },{$set:{
//     Name : "Bincy Salim"
// }
// }).then((error)=>
// {console.log(error)
// }).catch((result)=>{
// console.log(result)})


//updating all documents from complete to incomplete
db.collection('Tasks').updateMany({status:'complete'},{
    $set:{
        status: 'incomplete'
    }
}).then((result)=>{ //then for result
    console.log(result)
}).catch(error=>{   //catch for error
    console.log(error)
})


//use deleteOne or deleteMany using the format below
// db.collection('Tasks').deleteOne({
//     description : "VueJS"
// }).then((result)=>{ //then for result
//         console.log(result)
//     }).catch(error=>{   //catch for error
//         console.log(error)})

})



