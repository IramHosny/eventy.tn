import React, { useState } from 'react'
import './CSS/UserProfile.css';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import {userEdit } from '../redux/userSlice';

function UserProfile() {
    const user = useSelector((state) => state.user?.user);
    const dispatch = useDispatch();
    const Update = (a)=> Swal.fire({
      title: "Voulez-vous enregistrer les modifications?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Enregistrer",
      denyButtonText: `Annuler`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
          dispatch(userEdit(a));
        Swal.fire("Saved!", "", "success");
        window.location.reload();
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
    const [editeduser, setediteduser] = useState({
      'name' : user?.name,
      'lastname' : user?.lastname,
      'adress' : user?.adress,
      'phonenumber' : user?.phonenumber,
      'email' : user?.email,
      password :user?.password,
      role : "user"
    })
  return (
    <div className="body_profile">
         <form className="form">
      <h2> Bonjour {user?.lastname} {user?.name} </h2>
      <div className="form-group" style={{marginBottom:'1px'}}>
        <label htmlFor="name" style={{fontWeight:'bold'}}>Nom</label>
        <div className="relative">
          <input
            className="form-control"
            id="name"
            type="text"
            pattern="[a-zA-Z\s]+"
            required
            autoFocus
            title="Username should only contain letters. e.g. Piyush Gupta"
            autoComplete="off"
            placeholder={user?.lastname}
            onChange={(e)=>{setediteduser({...editeduser,lastname:e.target.value})}}
          />
        
        </div>
      </div>
      <div className="form-group" style={{marginBottom:'1px'}}>
        <label htmlFor="name" style={{fontWeight:'bold'}}>Prénom</label>
        <div className="relative">
          <input
            className="form-control"
            id="name"
            type="text"
            pattern="[a-zA-Z\s]+"
            required
            autoFocus
            title="Username should only contain letters. e.g. Piyush Gupta"
            autoComplete="off"
            placeholder={user?.name}
            onChange={(e)=>{setediteduser({...editeduser,name:e.target.value})}}
          />
        
        </div>
      </div>
      <div className="form-group" style={{marginBottom:'1px'}}>
      <i className="fa fa-envelope" style={{ marginRight: '8px', color: '#333', fontSize: '18px' }}></i>
        <label htmlFor="email" style={{fontWeight:'bold'}}> Email</label>
        <div className="relative">
          <input
            className="form-control"
            type="email"
            required
            placeholder={user?.email}
            onChange={(e)=>{setediteduser({...editeduser,email:e.target.value})}}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
          />
         
        </div>
      </div>

      <div className="form-group" style={{marginBottom:'1px'}}>
      <i className="fa fa-phone" style={{ marginRight: '8px', color: '#333', fontSize: '18px' }}></i>
        <label htmlFor="contact" style={{fontWeight:'bold'}}> Téléphone</label>
        <div className="relative">
          <input
            className="form-control"
            type="text"
            maxLength="10"
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
            }
            required
            placeholder={user?.phonenumber}
            onChange={(e)=>{setediteduser({...editeduser,phonenumber:e.target.value})}}
          />
         
        </div>
      </div>

      <div className="form-group" style={{marginBottom:'1px'}}>
      <i className="fa fa-building" style={{ marginRight: '8px', color: '#333', fontSize: '18px' }}></i>
        <label htmlFor="company" style={{fontWeight:'bold'}}>Adresse</label>
        <div className="relative">
          <input
            className="form-control"
            type="url"
            pattern="https?://.+"
            required
            placeholder={user?.adress}
            onChange={(e)=>{setediteduser({...editeduser,adress:e.target.value})}}
          />
        
        </div>
      </div>
      <div className="tright">
        <button className="movebtn movebtnre" type="reset" style={{width:'120px',height:'55px', fontWeight:'bold',borderRadius:'20%',marginTop:'10px',background: '#ffc107', border: 'none', cursor: 'pointer', color:'black' }} onClick={()=> Update({id:user?._id,editeduser})}>
         modifier <i className="fa fa-fw fa-refresh"></i> 
        </button>
      </div>
    </form>
    </div>
  )
}

export default UserProfile


