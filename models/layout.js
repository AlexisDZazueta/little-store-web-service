'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LayoutSchema = new Schema({
  ot: { type: String, maxlength: 4, required: true },
  dOp: [{
    alias: { type: String, maxlength: 100 },
    cl: { type: String, maxlength: 20, required: true },
    type: { type: String, maxlength: 2, required: true },
    refn: { type: String, maxlength: 7},
    refa: { type: String, maxlength: 20, required: true },
    amount: { type: String, maxlength: 100 },
    bank: { type: String, maxlength: 5, required: true },
    country: { type: String, maxlength: 2, required: true },
    
  }]
}, { timestamps: true })
