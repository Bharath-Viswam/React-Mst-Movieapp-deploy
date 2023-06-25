//importing

const express =require('express')
const movieModel = require('./model/movieDb')
const cors = require('cors')
const path = require('path')
//intialising

const app = new express()

//middleware

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname,'/build')));

//api creation

//view operation get
app.get('/api/movies',async(req,res)=>{
    var data = await movieModel.find()
    res.json(data)
})


//update operation put

app.put('/api/editmovies/:id',async(req,res)=>{
    let id = req.params.id
    try{
        var data= await movieModel.findByIdAndUpdate(id,req.body)
        res.json({status:"updated"})
    }
    catch(err){
res.status(500).send(err)
    }
})

//delete operation

app.delete('/api/deletemovies/:id',async(req,res)=>{
let id = req.params.id
await movieModel.findByIdAndDelete(id)
res.json({status:'deleted'})
})

//add operation

app.post('/api/addmovies',async(req,res)=>{
    console.log(req.body);
    var data = await new movieModel(req.body)
    data.save()
    res.send({status:"data saved"})
})

app.get('/*', function(req, res) { 
    res.sendFile(path.join(__dirname 
    ,'/build/index.html')); });




//port
app.listen(3005,()=>{
    console.log("Server running on port 3005");
})
