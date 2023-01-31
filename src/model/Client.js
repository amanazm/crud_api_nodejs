const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    client_name: { type: String, default: null },
    email: { type: String, default: null },
    phone_number: { type: String, default: null },
    total_bill:{type :String, default:null},
    client_id: { type: String, unique:true },
    agency_id: { type: String, default: null }
});

module.exports = mongoose.model("Client", clientSchema);