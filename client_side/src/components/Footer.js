import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faMastodon } from '@fortawesome/free-brands-svg-icons';
import './CSS/Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo" itemscope="itemscope" itemtype="http://schema.org/WPFooter">
      <div className="footer-container">
        
        <div className="footer-col" role="navigation" aria-labelledby="know-heading">
          <h3 id="know-heading">Savoir plus</h3>
          <ul>
            <li><a href="#" itemprop="url"><Link to="/about"><a href="#">A propos EVENTY</a></Link></a></li>
            <li><a href="#" itemprop="url"><Link to={`/EVENTY/produit`}><a href="#">Packs EVENTY</a></Link></a></li>
            <li><a href="#" itemprop="url"><Link to="/prestataires"><a href="#">Prestataires EVENTY</a></Link></a></li>
            <li><a href="#" itemprop="url"><Link to="/avis"><a href="#">Avis client EVENTY</a></Link> </a></li>
           
          </ul>
        </div>
        <div className="footer-col" role="navigation" aria-labelledby="know-heading">
          <h3 id="know-heading"></h3>
          <ul>
            <li><a href="#" itemprop="url"></a></li>
            <li><a href="#" itemprop="url"></a></li>
            <li><a href="#" itemprop="url"> </a></li>
            <li><a href="#" itemprop="url"> </a></li>
           
          </ul>
        </div><div className="footer-col" role="navigation" aria-labelledby="know-heading">
          <h3 id="know-heading">Contact</h3>
          <ul>
            <li><a href="#" itemprop="url"> <Link to="/contact"><a href="#">Contact EVENTY.TN</a></Link></a></li>
            <li><a href="#" itemprop="url"></a></li>
            <li><a href="#" itemprop="url"> </a></li>
            <li><a href="#" itemprop="url"></a></li>
           
          </ul>
        </div>
        <div className="footer-col" role="navigation" aria-labelledby="know-heading">
          <h3 id="know-heading"> </h3>
          <ul>
            <li><a href="#" itemprop="url"> </a></li>
            <li><a href="#" itemprop="url"></a></li>
            <li><a href="#" itemprop="url"> </a></li>
            <li><a href="#" itemprop="url"> </a></li>
           
          </ul>
        </div>
       
        <div className="footer-col" role="navigation" aria-labelledby="support-heading">
          <h3 id="support-heading"> Support</h3>
          <ul>
            <li><a href="#" itemprop="url">Email: eventy.tn@gmail.com</a></li>
            <li><a href="#" itemprop="url"> Téléphone : +21628994691</a></li>
           
          </ul>
        </div>
        <div className="footer-col social" role="navigation" aria-labelledby="social-heading">
          <h3 id="social-heading">Social</h3>
          <ul className="social-icons">
            <li><a href="#" aria-label="Facebook" itemprop="url"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="#" aria-label="Twitter" itemprop="url"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="#" aria-label="Mastodon" itemprop="url"><FontAwesomeIcon icon={faMastodon} /></a></li>
          </ul>
        </div>
        
        <div className="clearfix"></div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Salwa hajji.</p>
        
      </div>
    </footer>
  );
};

export default Footer;



