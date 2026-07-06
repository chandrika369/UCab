const Cab = require("../models/Cab");

const addCab = async (req, res) => {
  try {
    const cab = await Cab.create(req.body);
    res.status(201).json({ message: "Cab Added Successfully", cab });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Returns only available cabs (for booking page)
const getCabs = async (req, res) => {
  try {
    const cabs = await Cab.find({ available: true });
    res.status(200).json(cabs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Returns all cabs regardless of availability (for admin/cab list page)
const getAllCabs = async (req, res) => {
  try {
    const cabs = await Cab.find();
    res.status(200).json(cabs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addCab, getCabs, getAllCabs };
