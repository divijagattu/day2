const mongoose = require('mongoose');
const express = require('express');
const Student = require('./models/studentmodules');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/addstudent',async (req,res) =>{
    try{
        const student =await Student.create(req.body);
        res.status(201).json(student);
    }catch(err){
        console.log(err);
        res.status(400).json({message: 'Something went wrong'});
    }
}
);
app.get('/getstudents',async (req, res) =>{
    try{
        const students =await Student.find();
        res.status(201).json(students);
    }catch(err){
        console.log(err);
        res.status(400).json({message: 'Something went wrong'});
    }
});

app.delete('/deletestudent/:id',async (req, res) =>{
    try{
        const student =await Student.findByIdAndDelete(req.params.id);
        if(!student){
            res.status(404).json({message: 'Student not found'});
        }
        res.status(201).json(student);
    }catch(err){
        console.log(err);
        res.status(400).json({message: 'Something went wrong'});
    }
});

app.put('/updatestudent/:id',async (req, res) =>{
    try{
        const student =await Student.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!student){
            res.status(404).json({message: 'Student not found'});
        }
        res.status(201).json(student);
    }catch(err){
        console.log(err);
        res.status(400).json({message: 'Something went wrong'});
    }
});

app.get('/getstudent/:id',async (req, res) =>{
    try{
        const student =await Student.findById(req.params.id);
        if(!student){
            res.status(404).json({message: 'Student not found'});
        }
        res.status(201).json(student);
    }catch(err){
        console.log(err);
        res.status(400).json({message: 'Something went wrong'});
    }
});


mongoose.set("strictQuery", false);

mongoose.connect('mongodb://localhost:27017/studentapplication', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to local MongoDB');
    app.listen(3001, () => {
      console.log(`Node API app is running on port 3001`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to local MongoDB:', error);
  });