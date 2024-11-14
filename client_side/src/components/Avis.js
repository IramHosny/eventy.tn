import React, { useState } from 'react';
import AddComment from './AddComment';
import { useSelector } from 'react-redux';

const Avis = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const comments = useSelector((state) => state.comment?.commentlist);
  const user = useSelector((state) => state.user?.user);
  const isAuth = localStorage.getItem("token");

 
  const renderStars = (note) => {
    const fullStar = <span style={{ color: '#ffc107' }}>★</span>; // étoile pleine jaune
    const emptyStar = <span style={{ color: '#ccc' }}>☆</span>;  // étoile vide gris clair
    
    return (
      <>
        {Array.from({ length: note }, (_, i) => (
          <React.Fragment key={i}>{fullStar}</React.Fragment>
        ))}
        {Array.from({ length: 5 - note }, (_, i) => (
          <React.Fragment key={i + note}>{emptyStar}</React.Fragment>
        ))}
      </>
    );
  };

  return (
    <div  style={{marginBottom: '3%'}}>
      {/* Bouton pour ajouter un avis, affiché seulement si l'utilisateur est connecté */}
      {isAuth && user?.role === "user" ? (
        <button style={styles.button} onClick={handleShow}>
          Ajouter un avis
        </button>
      ) : null}

      {/* Formulaire pour ajouter un commentaire */}
      {show && <AddComment onClose={handleClose} />}

      <h2 style={styles.title}>Avis des utilisateurs</h2>
      <div style={styles.commentsContainer}>
        {comments && comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment._id} style={styles.comment}>
              <h4>
                {comment.user_name} ({renderStars(comment.note)})
              </h4>
              <p>{comment.contenu}</p>
            </div>
          ))
        ) : (
          <p>Aucun avis pour le moment.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  button: {
    background: '#ffc107',
    border: 'none',
    color: '#fff',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '4px',
    margin: '2%',
  },
  title: {
    textAlign: 'center',
    color: '#ffc107',
    marginTop: '20px',
  },
  commentsContainer: {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  comment: {
    borderBottom: '1px solid #ddd',
    padding: '10px 0',
  },
};

export default Avis;
