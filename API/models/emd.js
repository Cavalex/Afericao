const mongoose = require("mongoose");

var nomeSchema = new mongoose.Schema({
    primeiro: String,
    último: String
});

// a ordem não é relevante
var emdSchema = new mongoose.Schema({
    _id: String,
    clube: String,
    dataEMD: String,
    index: Number,
    nome: nomeSchema, // pq é um conjunto de vários campos
    idade: Number,
    género: String,
    morada: String,
    modalidade: String,
    clube: String,
    email: String,
    federado: Boolean,
    resultado: Boolean
});
module.exports = mongoose.model("exame", emdSchema);