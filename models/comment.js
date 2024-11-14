const mongoose = require("mongoose");
const schema = mongoose.Schema;

const commentSchema = new schema({
    user_name : {type:String , required:true},
    user_email: {type: String, required: true,},
    contenu: {type: String, required: true,},
    note: {type: String, required: true,},
   
    
    
   
});
  
  const comment = mongoose.model('comment', commentSchema);
  module.exports = comment ;
