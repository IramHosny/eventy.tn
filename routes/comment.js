const express = require("express");
const comment = require("../models/comment");
const commentrouter = express.Router();
// add comment
// POST method

commentrouter.post("/addcomment", async (req, res) => {
  try {
    let newcomment = new comment({ ...req.body });
    let result = await newcomment.save();
    res.send({ comment: result, msg: "successfully added" });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// lister comment
// Get method
commentrouter.get("/allcomment", async (req, res) => {
  try {
    let result = await comment.find();
    res.send({ comment: result, msg: "all comments " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// delete comment
// Delete method
commentrouter.delete("/:id", async (req, res) => {
  try {
    let result = await comment.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "comment deleted " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});

// update comment
// update method
commentrouter.put("/:id", async (req, res) => {
  try {
    let result = await comment.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send({ msg: " comment updated " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
module.exports = commentrouter;