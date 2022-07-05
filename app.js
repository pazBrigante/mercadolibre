
const express = require ('express');

const path = require ('path');

const app = express ();

const publicPath = path.join(__dirname, '/public');

app.use(express.static(publicPath))

app.listen (process.env.PORT || 3000, () =>{
    console.log ("Servidor activo");
});

app.get ("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "views/home.html"))
});

app.get ("/login", (req,res) =>{
    res.sendFile(path.join(__dirname, "views/login.html"))
});

app.get ("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "views/register.html"))
});