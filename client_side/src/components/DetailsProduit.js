import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate, useParams } from 'react-router-dom'
import { addToCart } from '../redux/cartSlice';


function DetailsProduit () {
  const params=useParams();
    const produits = useSelector(state => state.produit?.produitlist);
    const produit = produits?.filter((el)=> el?._id === params._id)[0]
console.log(produits)
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
   
    <div className='details' style={{ marginTop: '5%', marginLeft: '2%', display: 'flex', alignItems: 'center' ,marginBottom: '3%' }}>
    <img src={produit?.image} alt="" style={{ maxWidth: '500px', minWidth: '500px', maxHeight: '500px', minHeight: '500px', borderRadius: '5%' }} />
    <div style={{ marginLeft: '20px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <h4 className='h1_detail' style={{ color: 'black', marginRight: '20px' }}> <span style={{color: '#ffc107'}}> Nom: </span> {produit?.name}  </h4>
            <h4 className='h1_detail' style={{ color: 'black', marginRight: '20px' }}> <span style={{color: '#ffc107'}}> ,Nom du prestataire: </span> {produit?.nom_prestataire} , </h4>
            <h4 className='h1_detail' style={{ color: 'black' }}> <span style={{color: '#ffc107'}}> Prix: </span> {produit?.prix}</h4>
        </div>
        <p style={{ maxWidth: '800px', minWidth: '800px', maxHeight: '400px', minHeight: '400px', fontSize: '20px', fontWeight: 'bold' }} className='p_detail'> {produit?.description}
        <div style={{marginTop:'2%'}} className='add-cat-container'>
        {!isAuth || (isAuth && user?.role === "user")?(
                  <button style={{ backgroundColor: '#ffc107', border: 'none', fontWeight: 'bolder' }} className="btn btn-danger" onClick={()=> handleAddToCart(produit)} >Réservez maintenant</button>

        ):null}
                    </div></p>

    </div>
    
</div>
  )
}

export default  DetailsProduit

