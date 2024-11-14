import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addprestataire } from '../redux/prestataireSlice';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./CSS/Dashboard.css";
import Form from 'react-bootstrap/Form';

function Addprestataire({ping, setping }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 

  const [prestataire, setPrestataire] = useState({
    name: "",
    adresse: "",
    phone_number: "",
    type: "",
    image: "",
    description: "",
  });
  
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPrestataire({ ...prestataire, [name]: value });
  }
  const handleAddPrestataire = () => {
    dispatch(addprestataire(prestataire));
    handleClose();
  };

  return (
    <div>
      <>
      <Button style={{ background: '#ffc107', border: 'none', cursor: 'pointer' }} className='btn_add' onClick={handleShow}>
                    Ajouter un prestataire
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ajouter un prestataire</Modal.Title>
                    </Modal.Header>
                    <Modal.Body></Modal.Body>
            <form className="add-provider-form">
              <label>Nom du prestataire</label>
              <input type="text" placeholder="Entrez le nom du prestataire" name="name" value={prestataire.name} onChange={handleInputChange} />
              <label>Adresse</label>
              <input type="text" placeholder="Entrez l'adresse du prestataire" name="adresse" value={prestataire.adresse} onChange={handleInputChange} />
              <label>Numéro de téléphone</label>
              <input type="text" placeholder="Entrez le numéro du prestataire" name="phone_number" value={prestataire.phone_number} onChange={handleInputChange} />
              <label>Type de prestataire</label>
              <Form.Select
                  aria-label="Default select example"
                  name="type"
                  value={prestataire.type}
                  onChange={handleInputChange}
                >
                   <option value="">Sélectionnez un type </option>
                <option value="photographe">Photographe</option>
                <option value="traiteur">Traiteur</option>
                <option value="coiffeur">Coiffeur</option>
                <option value="salles">Salles des fêtes</option>
                <option value="decorateur">Décorateur</option>
                <option value="fleuriste">Fleuriste</option>
                <option value="autre">Autre</option>
                </Form.Select>
              <label>Image</label>
              <input type="text" placeholder="Entrez l'image du prestataire" name="image" value={prestataire.image} onChange={handleInputChange} />
              <label>Services offerts</label>
              <input type="text" placeholder="Entrez la description du prestataire" name="description" value={prestataire.description} onChange={handleInputChange} />
              <button type="submit" onClick={handleAddPrestataire}>Ajouter</button>
              <button variant="secondary" onClick={handleClose} >Annuler</button>
            </form>
            </Modal>
      </>
    </div>
  );
}

export default Addprestataire;
