import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addcomment } from '../redux/commentSlice';


const AddComment = ({ onClose }) => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [avis, setAvis] = useState('');
  const [note, setNote] = useState('5');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      user_name: nom,
      user_email: email,
      contenu: avis,
      note: note,
    };

    dispatch(addcomment(newComment))
      .then(() => {
        setMessage('Merci pour votre avis !');
        setNom('');
        setEmail('');
        setAvis('');
        setNote('5');
        onClose();
      })
      .catch(() => {
        setMessage('Une erreur est survenue. Veuillez réessayer.');
      });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Laissez votre avis</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="nom" style={styles.label}>Nom :</label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="avis" style={styles.label}>Votre avis :</label>
          <textarea
            id="avis"
            value={avis}
            onChange={(e) => setAvis(e.target.value)}
            style={styles.textarea}
            required
          ></textarea>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="note" style={styles.label}>Note :</label>
          <select
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            style={styles.select}
            required
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
        <button type="submit" style={styles.button}>Envoyer</button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#ffc107',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    minHeight: '100px',
  },
  select: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#ffc107',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  message: {
    marginTop: '20px',
    textAlign: 'center',
    color: '#28a745',
  },
};

export default AddComment;
