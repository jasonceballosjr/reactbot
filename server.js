//dependencies
const express = require("express");
const app = express();
require("dotenv").config();

//parsing stuff
app.use(express.json());

// routes for api
const watsonRoutes = require("./routes/api/watson");
app.use("/api/watson", watsonRoutes);

//starting server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("server listening on port ", port);
})