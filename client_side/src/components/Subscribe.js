import React, { useState } from 'react'
import './CSS/Subscribe.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userRegister } from '../redux/userSlice';

function Subscribe() {
    const dispatch = useDispatch();
    //redirection 
    const navigate = useNavigate();
    //state register
    const [register, setregister] = useState({
      name : "",
      lastname : "" , 
      adress: "",
      phonenumber : "",
      email : "" ,
      password :"" ,
      role : "user"
    });
    const isAuth = localStorage.getItem('token');


  return (
    <>
    {!isAuth?(
        <div className='subscribe'>
        <div className="login-container">
        <div className="login-content">
          <div className="login-content_header">
            <span id="logo">
              <box-icon type="solid" name="landscape" color="#87A922" /> Créer votre compte
            </span>
          </div>
          <div>
            <form className="login-form" onSubmit={(e)=>e.preventDefault()}>
              <input type="text" placeholder="Nom" onChange={(e)=> setregister({...register,lastname : e.target.value})} required />
              <input type="text" placeholder="Prénom" onChange={(e)=> setregister({...register,name : e.target.value})} required/>
              <input type="text" placeholder="Adresse" onChange={(e)=> setregister({...register,adress : e.target.value})} required/>
              <input type="text" placeholder="Téléphone" onChange={(e)=> setregister({...register,phonenumber : e.target.value})} required />
              <input type="email" placeholder="email" onChange={(e)=> setregister({...register,email : e.target.value})} required/>
              <input type="password" placeholder="mot de passe" onChange={(e)=> setregister({...register,password : e.target.value})} required/>
              <input type="submit" onClick={()=>{
                dispatch(userRegister(register));
                setTimeout(() => {
                    navigate("/userprofile")
                  }, 1000);
              }}/>
            </form>
          </div>
        </div>
      </div>
    </div>
    ):navigate("/")}
    
    </>
  )
}

export default Subscribe