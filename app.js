let express = require("express");

let app = express();

const path = require("path");

const publicPath = path.join(__dirname,"./public");// aca ya tengo la ruta public definida que la voy a usar para acceder a los recursos estaticos dentro de public
app.use(express.static(publicPath))


app.listen(3000, () => {
    console.log("Servidor Corriendo en el puerto 3030")
});

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "./views/home.html"));
 
 })

 app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname, "./views/register.html"));
 
 })

 app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname, "./views/login.html"));
 
 })

 app.post("/register",(req,res)=>{
    res.redirect("/"); // aca tenes que poner la misma ruta que la fila 15 que es app.get("/")
 
 })
 app.post("/login",(req,res)=>{
    res.redirect("/"); // aca tenes que poner la misma ruta que la fila 15 que es app.get("/")
 
 })

