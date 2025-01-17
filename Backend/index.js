//import
const express = require('express')
require('./connection')
require('./models/employee')
const EmployeeModel = require('./models/employee')

//initialize
const app = express()

//mid
app.use(express.json())

// api creation
app.get('/',(req,res)=>{
    res.send("Heyyy therreee!")
})

//trial api
app.get('/trial',(req,res)=>{
    res.send('trial message')
})
//add api
app.get('/view',async(req,res)=>{
    try{
       const employee= await EmployeeModel.find()
        res.send(employee)
    }catch (error) {
        console.log(error)

    }

})

app.post('/add',async(req,res)=>{
    try{
       await EmployeeModel(req.body).save()
        res.send({message:"data added"})
    }catch (error) {
        console.log(error)
    }


    })

    app.put('/update/:id',async(req,res)=>{
        try{
            await EmployeeModel.findByIdAndUpdate(req.body,req.params.id)
        res.send({message:"update successfully"})
        }catch (error) {
            console.log(error)
    
        }
    
    })

 app.delete('/remove/:id',async(req,res)=>{
        try{
           await EmployeeModel(req.params.id)
            res.send({message:"data deleted"})
        }catch (error) {
            console.log(error)
    
        }
})
//port selling
app.listen(3004,()=>{
    console.log("port is running on 3004")
})

