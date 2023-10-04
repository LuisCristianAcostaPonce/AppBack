const { json } = require('express');
const {model, Schema} = require('mongoose');

//Defino el modelo para la cotización.
const CotizadorSchema = new Schema({
    UserID: String,
    client: String,
    rutClient: String,
    email: String,
    address: String,
    city: String,
    phone: Number,
    date: Date,
    dateUntil: Date,
    CotNumber: Number,
    detail: [{
        code: String,
        description: String,
        amount: Number,
        price: Number,
        subTotal: Number,
        iva: Number,
        total: Number
    }],
    subTotalDocument: Number,
    ivaDocument: Number,
    totalDocument: Number
})



module.exports = model('cotizador', CotizadorSchema);