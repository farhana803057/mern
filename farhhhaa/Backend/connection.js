const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://farhanaibrahim:fanah808057@cluster0.guowq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to MangoDB");
})



