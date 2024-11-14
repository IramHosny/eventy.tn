import React from 'react';
import PrestataireCard from './PrestataireCard';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const PrestataireList = () => {
  
  const param = useParams();
  console.log(param)
  const prestataires = useSelector (state => state.prestataire?.prestatairelist);
  const type_prestataire = prestataires?.filter((el)=> el?.type === param.type)


  return (
    <div className="card_container" style={{display:'flex', flexWrap:'wrap',justifyContent:'space-around', marginTop: '3%',margin: '3%'}}>
   
   {type_prestataire?.map((el)=>  <PrestataireCard  prestataire={el} />)}  
    </div>
  
  );
};

export default PrestataireList;
