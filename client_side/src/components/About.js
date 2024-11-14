import React from 'react'
import  './CSS/About.css'

function About() {
  return (
    <div className='about_page'>
<>
      <main className="about">
        <div className="container">
          <section className="grid info">
            <div className="column-xs-12 column-md-1">
              <div className="about">
                <h1 className="section-heading" style={{marginLeft:'-90px',color:'#ffc107'}}>À propos de EVENTY.TN</h1>
              </div>
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
            <div className="column-xs-12 column-md-4">
            <img 
  src="https://dkk5oy4zs0vc4.cloudfront.net/images/services-landing-pages/bg-image/lander-party.jpg" 
  alt="About eventy.tn" 
  style={{
    width: '75%',
    height: 'auto',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.3)';
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
  }}
/>
            </div>
            <div className="column-xs-12 column-md-7" style={{width:'50%'}}>
              <div className="intro">
               <center> <h2 style={{marginLeft:'-250px'}}> EVENTY<span style={{color:'#ffc107'}}>.TN</span> </h2> </center> 
                <p style={{fontWeight:'bolder',marginLeft:'-210px'}}>Bienvenue sur <span style={{color:'#ffc107'}}>EVENTY.TN</span>, votre plateforme incontournable pour l'organisation de tous vos événements. Que vous planifiiez un mariage, un anniversaire, une fête d'entreprise, ou tout autre événement spécial, nous sommes là pour vous faciliter la tâche.</p>
                <p style={{fontWeight:'bolder',marginLeft:'-210px'}}>Sur <span style={{color:'#ffc107'}}>EVENTY.TN</span>, nous proposons une large gamme de packs adaptés à tous les budgets, vous garantissant des prix raisonnables sans compromis sur la qualité. Grâce à nos prestataires de confiance, vous avez accès à des services professionnels pour chaque aspect de votre événement</p>
                
              </div>
            </div>
            </div>
            <div className="column-xs-12 column-md-7">
              <blockquote>
                <h3>Visitez notre site EVENTY.TN et découvrez une sélection exceptionnelle 
                  de prestataires pour tous vos événements ! Que vous ayez besoin de photographes 
                  talentueux, de coiffeurs professionnels, de salles des fêtes spacieuses, de traiteurs raffinés, 
                  de décorateurs créatifs ou de fleuristes inspirants, nous avons tout ce qu'il vous faut 
                  pour rendre votre événement inoubliable. Ne manquez pas 
                  cette opportunité de rendre vos célébrations encore plus spéciales !</h3>
              </blockquote>
            </div>
            
          </section>
        </div>
      </main>
    </>

    </div>
  )
}

export default About