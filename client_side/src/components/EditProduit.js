import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { editproduit } from '../redux/produitSlice';
import Swal from 'sweetalert2';


function EditProduit({ping, setping, produit}) {
const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setedited] = useState({
    name :produit?.name ,
    description:produit?.desciption ,
    nom_prestataire:produit?.nom_prestataire,
    image:produit?.image,
    prix:produit?.prix,
  })
const dispatch= useDispatch();
const Update = (a)=> Swal.fire({
  title: "Voulez vous enregistrer les modifications ?",
  showDenyButton: true,
  showCancelButton: false,
  confirmButtonText: "enregistrer",
  denyButtonText: `annuler`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
      dispatch(editproduit(a));
    Swal.fire("Enregistré!", "", "succés");
    window.location.reload();
  } else if (result.isDenied) {
    Swal.fire("Les modifications sont annulés", "", "info");
  }
});
  return (
    <>
     <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} onClick={handleShow}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M16 3l5 5l-14 14l-5 1l1 -5z" />
                    <line x1="18" y1="7" x2="13.35" y2="11.65" />
                    <line x1="14" y1="4" x2="4" y2="14" />
                </svg>
            </button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Modifier le produit </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <label>Nom</label>
        <Form.Control type="text" placeholder={produit?.name} onChange={(e)=>setedited({...edited, name:e.target.value})} />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <label>Description</label>
        <Form.Control type="text" placeholder={produit?.description} onChange={(e)=>setedited({...edited, description:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <label>Prestataire</label>
        <Form.Control type="text" placeholder={produit?.nom_prestataire} onChange={(e)=>setedited({...edited, nom_prestataire:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <label>Image</label>
        <Form.Control type="text" placeholder={produit?.image} onChange={(e)=>setedited({...edited, image:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <label>Prix</label>
        <Form.Control type="text" placeholder={produit?.prix} onChange={(e)=>setedited({...edited, prix:e.target.value})}/>
      </Form.Group>
      </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Annuler
        </Button>
        <Button variant="primary" style={{ background: '#ffc107', border: 'none', cursor: 'pointer' }} onClick={() => Update ({id:produit?._id,edited})}
        >
          Modifier
        </Button>

      </Modal.Footer>
    </Modal>
  </>
  )
}

export default EditProduit

