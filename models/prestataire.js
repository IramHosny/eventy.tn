const mongoose = require("mongoose");
const schema = mongoose.Schema;

const prestataireSchema = new schema({
    name : {type:String , required:true},
    adresse : {type:String , required:true},
    description : {type:String , required:true},
    image : {type:String , required:true},
    phone_number : {type:String , required:true},
    type : {type:String , required:true},
   }
  );
  
  const Prestataire = mongoose.model('Prestataire', prestataireSchema);
  module.exports = Prestataire ;
