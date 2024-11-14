import React from 'react';
import './CSS/Card.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link} from 'react-router-dom';


const PrestataiteCard = ({prestataire}) => {
 
  return (
    <div>
  
  <div className="colombia_card">
  <img
    className="colombia_card__background"
    src={prestataire?.image}
    alt=" "
     style={{maxWidth:'1920',minWidth:'1920',
    maxHeightheight:'2193', minHeighth:'2193'}}
  />
  <div className="colombia_card__content | flow">
    <div className="colombia_card__content--container | flow">
      <h2 className="colombia_card__title">{prestataire?.name}</h2>
      <p className="colombia_card__description">
        <h5> <i className="fas fa-map-marker-alt" /> {prestataire?.adresse}</h5>
        <h4> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"> <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg> {prestataire?.phone_number}</h4>
      </p>
    </div>
    <Link style={{ width: '100%', marginTop:'-10px', fontWeight: 'bold',textDecoration:'none'}} to={`/${prestataire?.name}/produit`}>
                <a style={{textDecoration:'none',color:'white'}} className="buttona"> Découvrir Nos Services </a>
              </Link>
  </div>
</div>

    </div>
    
  );
}

export default PrestataiteCard;