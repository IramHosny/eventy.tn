import React from 'react'
import { useSelector } from 'react-redux'
import ProduitCard from './ProduitCard';
import { useParams } from 'react-router-dom';



function ProduitList({ping,setping}) {
  const param = useParams();
  console.log(param)
  const produits= useSelector((state)=>state.produit?.produitlist);
  const pres_produits = produits?.filter((el)=> el?.nom_prestataire === param.name)
  

 
  return (
    <div>
    
      <div className='produit_list' style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap', marginBottom: '5%'}}>
   {pres_produits?.map((el)=>  <ProduitCard  produit={el} />)}  
</div>
   
   
</div>
  )
}

export default ProduitList