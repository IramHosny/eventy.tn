import React from 'react';
import PrestataireCard from './PrestataireCard';
import { useSelector } from 'react-redux';


const Prestataire = () => {
  
 
  const prestataire = useSelector (state => state.prestataire?.prestatairelist);
 


  return (
    <div className="card_container" style={{display:'flex', flexWrap:'wrap',justifyContent:'space-around', marginTop: '5%',margin: '3%', gap: '25px' }}>
   
   {prestataire?.map((el)=>  <PrestataireCard  prestataire={el} />)}  
    </div>
  
  );
};

export default Prestataire;
