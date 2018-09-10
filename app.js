const express = require('express')
const mongodb = require('mongodb')

var app = express()

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.listen(3000,()=>{
    console.log('Is listen on port 3000')
})
/*
function add(a,b){
    return a+b
}

let add = (a,b) => {
    return a+b
}*/