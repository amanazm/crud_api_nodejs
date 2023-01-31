const mongoose = require("mongoose");

const agencySchema = new mongoose.Schema({
  agency_id: { type: String, unique: true },
  agency_name: { type: String, default: null },
  address1: { type: String, default: null },
  address2: { type: String, default: null },
  state: { type: String, default: null },
  city: { type: String, default: null },
  phone_number: { type: String, default: null },
});

module.exports = mongoose.model("Agency", agencySchema);
