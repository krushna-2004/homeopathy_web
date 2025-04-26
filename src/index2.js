const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const collection = require("./mongodb")

const templatePath = path.join(__dirname, '../template')

app.use(express.static("public"));
app.use(express.static("img"));
app.use(express.static("js"));
app.use(express.json())
app.set("view engine", "hbs")
app.set("views", templatePath)
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.render("index2")
})
app.get("/contact", (req, res) => {
    res.render("contact")
})
app.get("/diseases", (req, res) => {
    res.render("diseases")
})
app.get("/done", (req, res) => {
    res.render("done")
})
app.get("/about", (req, res) => {
    res.render("about")
})



app.post("/contact", async (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        feedback: req.body.feedback
    }

    await collection.insertMany([data])
    .then(()=>{

    }).catch(()=>{
        res.status(400).send("Item was not save to the database")
    })
})
app.listen(3000, () => {
    console.log("port connected");
})

