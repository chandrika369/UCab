const mongoose = require("mongoose");

const cabSchema = new mongoose.Schema(
  {
    driverName: {
      type: String,
      required: true,
    },
    cabNumber: {
      type: String,
      required: true,
      unique: true,
    },
    cabType: {
      type: String,
      enum: ["Mini", "Sedan", "SUV"],
      required: true,
    },
    pricePerKm: {
      type: Number,
      required: true,
    },
    available: {
      type: Boolean,
      default: true,
    },
    currentLocation: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cab", cabSchema);