const mongoose = require("mongoose");
const schema = mongoose.Schema;

const produitSchema = new schema({
    name : {type:String , required:true},
    description : {type:String , required:true},
    image : {type:String , required:true},
    prix : {type:String , required:true},
    nom_prestataire : {type:String , required:true},
   }
  );
  
  const Produit = mongoose.model('Produit', produitSchema);
  module.exports = Produit ;
