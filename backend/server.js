const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config({ path: __dirname + "/.env" });
dotenv.config();
console.log("Environment variables loaded from .env file");
if (process.env.NODE_ENV !== "production") {
    console.log("Mongo URI:", process.env.MONGO_URI);
}

const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(err));

// Basic route
app.get("/", (req, res) => {
    res.send("AgroInsight API is running...");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
