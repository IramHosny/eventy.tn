import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addproduit } from '../redux/produitSlice';

function AddProduit({ prestataireName,ping, setping }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [produit, setProduit] = useState({
    name: "",
    description: "",
    nom_prestataire: prestataireName,
    prix: "",
    image: "",
  });
  useEffect(() => {
    setProduit(prevProduit => ({
      ...prevProduit,
      nom_prestataire: prestataireName
    }));
  }, [prestataireName]);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduit({ ...produit, [name]: value });
  }
  const handleSubmit = () => {
    dispatch(addproduit(produit));
    handleClose();
  };

  return (
    <div>
      <>
        <Button
          style={{ background: '#ffc107', border: 'none', cursor: 'pointer', marginTop: '2%', fontSize:'15px' }}
          className='btn_add'
          onClick={handleShow}>
          Ajouter un produit
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ajouter un produit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
              <label>Nom</label>
                <Form.Control
                  type="text"
                  placeholder="Entrez le nom du produit"
                  name="name"
                  onChange={handleInputChange}
                />
              </Form.Group>
    
              <Form.Group className="mb-3" controlId="formBasicDescription">
              <label>Description</label>
                <Form.Control
                  type="text"
                  placeholder="Entrez la description du produit"
                  name="description"
                  onChange={handleInputChange}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicRestaurant">
              <label>Prestataire</label>
                <Form.Control
                  type="text"
                  placeholder={prestataireName}
                  name="nom_prestataire"
                  readOnly
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPrix">
              <label>Prix</label>
                <Form.Control
                  type="text"
                  placeholder="Entrez le prix du produit"
                  name="prix"
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicImage">
              <label>Image</label>
                <Form.Control
                  type="text"
                  placeholder="Entrez l'image du produit"
                  name="image"
                  onChange={handleInputChange}
                />
              </Form.Group>
              
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Annuler
            </Button>
            <Button
              style={{ background: '#ffc107', border: 'none', cursor: 'pointer' }}
              variant="primary"
              onClick={handleSubmit}
            >
              Ajouter
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default AddProduit;
