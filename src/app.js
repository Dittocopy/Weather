const express =require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;


// Public Static Path

const s_path = path.join(__dirname, "../public");
const temp_path = path.join(__dirname, "../temp/views");
const par_path = path.join(__dirname, "../temp/par");



app.set('view engine', 'hbs');
hbs.registerPartials(par_path);
app.set("views", temp_path);


app.use(express.static(s_path));



// Routing

app.get("",(req, res)=>{
    res.render("index")
})


app.get("/about",(req, res)=>{
    res.render("about")
})


app.get("/weather",(req, res)=>{
    res.render("weather")
})


app.get("/feedback",(req, res)=>{
    res.render("feedback")
})

app.get("/*",(req, res)=>{
    res.render("404er")
})

app.listen(port, ()=>{
    console.log(`lestning to the port at ${port}`)
})