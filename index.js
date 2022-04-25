const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())
const port = 5000;

const users = [
    {id:1, name: 'Nasir', email: 'nasir@gamil.com', address: 'dhaka'}, 
    {id:2, name: 'Shaheen', email: 'shaheen@gamil.com', address: 'dhaka'}, 
    {id:3, name: 'Matiur', email: 'Matiur@gamil.com', address: 'dhaka'}, 
    {id:4, name: 'Robin', email: 'Robin@gamil.com', address: 'dhaka'}, 
    {id:5, name: 'NaKashemsir', email: 'naKashemsir@gamil.com', address: 'dhaka'}
];

app.get('/users', (req, res) => {
    const search = req.query.search;

    // use query parameter
    if(search){
        const searchResult = users.filter(user=>user.name.toLowerCase().includes(search));
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
    
});

// .post data. Method
app.post('/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting the post', req.body)
    // res.send('inside the post');
    res.json(newUser);
})


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id - 1];
    res.send(user)
})

app.get('/fruits', (req, res) =>{
    res.send(['mangoes, apple, banana, oranges'])
})

app.get('/fruits/mangoes/fazli', (req, res) =>{
    res.send('yummy yummy tok marka fazli')
})

app.get('/tree', (req, res) =>{
    res.send(['mango tree, kathal tree, jam tree, jamburea tree'])
})

app.get('/tree/fruits/sweet', (req, res) =>{
    res.send('khub misty and susadu fol ache amader deshe')
})

app.listen(port, ()=> {
    console.log('listening to port ', port)
})