const express = require('express')
const cors = require("cors")
 const blogs =require("./routes/blog")
require("dotenv").config()
require("./connection/connect")


const app = express();

 app.use(cors());
 app.use(express.json());
//  app.get('/', (request, response) => {
//      response.send("hello")
//  })

 app.use("/api/v1",blogs)

app.listen(process.env.PORT, () => {
    console.log(`Server is Listening on ${process.env.PORT}`)
})