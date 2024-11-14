import React from 'react';
import './CSS/ProduitCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';


function ProduitCard({ produit }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state)=>state.user?.user);
  const isAuth = localStorage.getItem("token");
  const handleAddToCart = (produit) => {

    if (isAuth) {dispatch(addToCart(produit));
     navigate("/panier");}
     else { 
       alert("vous devez se connecter !! ")
     }
   }
  return (
  
  <>
    <div className="height d-flex justify-content-center align-items-center" style={{ marginTop: '5%' }}>
      <div className="card p-3" style={{ maxHeight: '300px', minHeight: '300px', maxWidth: '400px', minWidth: '400px', borderBlockColor: '#ffc107', borderBlockStartWidth: '10px' }}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="mt-2">
            <div className="mt-5">
              <h1 className="main-heading mt-0">{produit?.name}</h1>
              <h4 style={{ color: 'black' }}>{produit?.prix+ " DT"}</h4>
            </div>
          </div>
          <div className="image_produit">
            <img style={{ maxHeight: '150px', minHeight: '150px', maxWidth: '150px', minWidth: '150px' }} src={produit?.image} width="200" alt="produit" />
          </div>
        </div>
        <p style={{ color: 'black', marginTop: '2%',fontWeight:'bolder',maxWidth:'350px',minWidth:'350px' ,minWidth:'150px',maxHeight:'150px' }}>{produit?.description}</p>
       
        {!isAuth || (isAuth && user?.role === "user")?(
                  <button style={{ backgroundColor: '#ffc107', border: 'none', fontWeight: 'bolder' }} className="btn btn-danger" onClick={()=> handleAddToCart(produit)} >Réservez maintenant</button>

        ):null}
         <Link style={{ width: '100%', marginBottom: '-50px', fontWeight: 'bolder',color:'#dda62b'}} to={`/produitdetails/${produit?._id}`} >
              <h5 className="button" > Pour plus de détails </h5>
            </Link>
      </div>
    </div>
  </>
);}

export default ProduitCard;
