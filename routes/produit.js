const express = require("express");
const produit = require("../models/produit");
const produitrouter = express.Router();
// add produit
// POST method

produitrouter.post("/addproduit", async (req, res) => {
  try {
    let newproduit = new produit({ ...req.body });
    let result = await newproduit.save();
    res.send({ produit: result, msg: "successfully added" });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// lister produit
// Get method
produitrouter.get("/allproduit", async (req, res) => {
  try {
    let result = await produit.find();
    res.send({ produit: result, msg: "all produits " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// delete produit
// Delete method
produitrouter.delete("/:id", async (req, res) => {
  try {
    let result = await produit.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "produit deleted " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});

// update produit
// update method
produitrouter.put("/:id", async (req, res) => {
  try {
    let result = await produit.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send({ msg: " produit updated " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
module.exports = produitrouter;