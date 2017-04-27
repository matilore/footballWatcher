const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const leagueSchema = new Schema({
  name: String,
  leagueLogo: String,
  country: String,
  teams: []
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const League = mongoose.model("League", leagueSchema);

module.exports = League;
