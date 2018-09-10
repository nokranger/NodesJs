const express = require('express')
const mongodb = require('mongodb')

var app = express()

let student = [
    {
        id:'st1',name:'aaa'
    },
    {
        id:'st2',name:'bbb'
    },
    {
        id:'st3',name:'ccc'
    }
]
app.get('/',(req,res)=>{
    res.send('Hello')
})

app.get('/all-Student',(req,res)=>{
    res.send(student)
})
app.get('/all-Student/:id',(req,res)=>{
    let studentID = req.params.id
    for(let i=0;i<student.length;i++){
        if(studentID == student[i].id){
            res.send(student[i])
            break
        }
    }
    res.send('not found this id : '+ studentID)
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