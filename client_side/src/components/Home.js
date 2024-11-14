import React from 'react'
import './CSS/Home.css';
import { Link } from 'react-router-dom';
import Home2 from './Home2';

function Home() {
  return (
    <div style={{backgroundColor:'#faf0e4'}}>
      <video autoPlay muted loop width={'100%'} height={'auto'}>
    <source src="./home.mp4" type="video/mp4"/>
    </video>
    <marquee style={{marginTop:'2%'}} > 
      <h1 style={{textDecoration:'none' , color:'black',fontWeight:'bold', display:'inline',fontSize:'50px'}}>Découvrez nos </h1> <h1 style={{textDecoration:'none' , color:'#ffc107',fontWeight:'bold', display:'inline',fontSize:'50px'}}>prestataires </h1>
    </marquee>
    <div className="prestataire" style={{display:'flex', flexWrap:'wrap',justifyContent:'center'}}>
    <div className="box">
        <div className="imgBx">
          <img
            src="https://www.cma-hautsdefrance.fr/wp-content/uploads/2020/08/photographe-face.jpg"
            alt="Les photogtaphes"
            style={{ height: '255px' }}
          />
        </div>
        <div className="content">
         <Link style={{textDecoration:'none'}} to={`/photographe/prestataire`}><h2 style={{color:'#ffc107', fontSize:'30px',fontWeight:'bold'}}>
            Les photogtaphes <br /> 
          </h2> </Link> 
        </div>
      </div>

      <div className="box">
        <div className="imgBx">
          <img
            src="https://www.crazytiff.fr/data/uploads/2022/12/Crazy-Tiff-114.jpg"
            alt="Les coiffeurs"
            style={{ height: '255px'  }}
          />
        </div>
        <div className="content">
        <Link style={{textDecoration:'none'}} to={`/coiffeur/prestataire`}> <h2 style={{color:'#ffc107', fontSize:'30px',fontWeight:'bold'}}>
            Les coiffeurs <br /> 
          </h2> </Link>
         
        </div>
      </div>

      <div className="box">
        <div className="imgBx">
          <img
            src="https://images.thebusinessplanshop.com/2204/etude-de-marche-d-un-fleuriste.jpg"
            alt="Les fleuristes"
            style={{ height: '255px' }}
          />
        </div>
        <div className="content">
        <Link style={{textDecoration:'none'}} to={`/fleuriste/prestataire`}> <h2 style={{color:'#ffc107', fontSize:'30px',fontWeight:'bold'}}>
            Les fleuristes <br /> 
          </h2> </Link>
        </div>
      </div>
      <div className="box">
        <div className="imgBx">
          <img
            src="https://cdn0.mariages.net/article-vendor/7212/original/1280/jpg/anniversaire-lillo-024-copie_3_227212-160189016335878.jpeg"
            alt="Les salles des fêtes"
            style={{ height: '255px' }}
          />
        </div>
        <div className="content">
        <Link style={{textDecoration:'none'}} to={`/salles/prestataire`}> <h2 style={{color:'#ffc107', fontSize:'30px',fontWeight:'bold'}}>
            Les salles des fêtes <br /> 
          </h2> </Link>
        </div>
      </div>
      <div className="box">
        <div className="imgBx">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo7OXE5JltSCBLSyzDH2enNcmencJwpdm6Vg&s"
            alt="les traiteurs"
            style={{ height: '255px' }}
          />
        </div>
        <div className="content">
        <Link style={{textDecoration:'none'}} to={`/traiteur/prestataire`}> <h2 style={{color:'#ffc107', fontSize:'30px',fontWeight:'bold'}}>
            Les traiteurs<br /> 
          </h2> </Link>
        </div>
      </div>
      <div className="box">
        <div className="imgBx">
          <img
            src="https://lh4.googleusercontent.com/proxy/qVo4nHEJ1Gwaczwx4o2jYJp0zk_2T32SpnffnqlIPYsMwLyqVdEsfoBLAvUbkuslLW8CTCkQmhYFAsJwLLREnSZObub6ll2JSsyBf1WkJfWi71SAPA"
            alt="les décorateurs"
            style={{ height: '255px' }}
          />
        </div>
        <div className="content">
        <Link style={{textDecoration:'none'}} to={`/decorateur/prestataire`}> <h2 style={{color:'#ffc107', fontSize:'30px',fontWeight:'bold'}}>
            Les décorateurs <br /> 
          </h2> </Link>
        </div>
      </div>

    </div>
    <div style={{marginTop:'1%'}} > 
      <h1 style={{textDecoration:'none' , color:'black',fontWeight:'bold', display:'inline',fontSize:'50px'}}>Revivez les moments forts </h1> <h1 style={{textDecoration:'none' , color:'#ffc107',fontWeight:'bold', display:'inline',fontSize:'45px'}}>de nos derniers événements ! </h1>
    </div>
    <Home2/>
    </div>
  )
}

export default Home