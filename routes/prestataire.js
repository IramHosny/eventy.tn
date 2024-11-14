const express = require("express");
const prestataire = require("../models/prestataire");
const prestatairerouter = express.Router();
// add prestataire
// POST method

prestatairerouter.post("/addprestataire", async (req, res) => {
  try {
    let newprestataire = new prestataire({ ...req.body });
    let result = await newprestataire.save();
    res.send({ prestataire: result, msg: "successfully added" });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// lister prestataire
// Get method
prestatairerouter.get("/allprestataire", async (req, res) => {
  try {
    let result = await prestataire.find();
    res.send({ prestataire: result, msg: "all prestataires " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// delete prestataire
// Delete method
prestatairerouter.delete("/:id", async (req, res) => {
  try {
    let result = await prestataire.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "prestataire deleted " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});

// update prestataire
// update method
prestatairerouter.put("/:id", async (req, res) => {
  try {
    let result = await prestataire.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send({ msg: " prestataire updated " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
module.exports = prestatairerouter;