import React, { useState } from "react";
import "./CSS/Dashboard.css";
import { useNavigate } from 'react-router-dom';

const DashboardAdmin = () => {
  const navigate = useNavigate();

  const redirectToPrestAdmin = () => {
    navigate('/prestadmin');
  };
  const redirectToUserAdmin = () => {
    navigate('/usersadmin');
  };
  const redirectToProduitAdmin = () => {
    navigate('/produitadmin');
  };
  const redirectToCommandAdmin = () => {
    navigate("/adminorders");
  };
  return (
    <div className="dashboard" style={{marginBottom:'10%'}}>
      <h1> Admin Dashboard - EVENTY.TN</h1>
      <div className="button-container">
        <button onClick={redirectToPrestAdmin}>Voir la liste des prestataires</button>
        <button onClick={redirectToUserAdmin} >Voir la liste des utilisateurs</button>
        <button onClick={redirectToProduitAdmin} >Voir la liste des produits</button>
        <button  onClick={redirectToCommandAdmin}>Suivre les réservations</button>
      </div>

      {/* Table for Providers */}
         
      
      

    
   
        

    
    </div>
  );
};

export default DashboardAdmin
