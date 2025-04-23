const mongoose = require("mongoose");

const GanadoSchema = new mongoose.Schema({
    numeroCrotal: { type: String, required: true, unique: true },
    tipo: { type: String, required: true },
    edad: { type: Number },
    peso: { type: Number },
    raza: { type: String },
});

module.exports = mongoose.model("Ganado", GanadoSchema);
