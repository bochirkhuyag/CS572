const express = require('express');
const router = express.Router();
var grades=[{
    id:1,
    name: 'huygaa',
    course : 'CS572',
    grade : 91
},
{
    id:2,
    name: 'ben',
    course : 'CS572',
    grade : 91
}];

//localhost:4000/grades/
router.get('/', (req, res) => {
    console.log(req.body);
    res.json(grades);
})

router.get('/:id', (req, res) => {
    //select grade by id
    let grade=null; 
    
    for(let i=0;i<grades.length;i++){
        if (req.params.id == grades[i].id) grade = grades[i]; 
    }
    console.log(grade);
    if(grade!=null){
        res.json(grade);
    }
    else { 
        res.json('Grade is not found!');
    }
})

router.post('/',(req,res) =>{
    let body = req.body;
    try{
        grades.push(body);
        res.send('Grade is added');
    }
    catch{
        res.send(`Can't add grade`);
    }
    console.log(body);

})

router.delete('/:id',(req,res)=>{
    // let index=null; 

    // for(let i=0;i<grades.length;i++){
    //     if (req.params.id == grades[i].id) index =i; 
    // }
    //console.log(index);
   try{
    grades = grades.filter(grade => grade.id!=req.params.id);
        res.send(`Grade is deleted`);
    }
    catch { 
        res.send(`Can't delete grade`);
    }
})
module.exports = router;