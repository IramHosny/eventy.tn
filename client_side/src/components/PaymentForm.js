import React, { useState } from 'react';
import './CSS/PaymentForm.css';

function PaymentForm({ orderId, amount, onClose }) {
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [errors, setErrors] = useState({});

    const validateInputs = () => {
        let errors = {};
        if (cardNumber.length !== 15) {
            errors.cardNumber = 'Le numéro de carte doit contenir 15 chiffres.';
        }
        if (cvv.length !== 8) {
            errors.cvv = 'Le Code secret doit contenir 8 chiffres.';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateInputs()) {
            // Traitement du paiement pour la commande
            console.log(`Paiement pour la commande ${orderId} de ${amount} DT en cours...`);
            onClose();  // Fermer le formulaire de paiement après soumission
        }
    };

    return (
        <div className="pay_form" style={{ marginTop: '20px'}}>
            <h3>Formulaire de paiement pour la commande {orderId}</h3>
            <form onSubmit={handleSubmit}>
                <div>
                <label style={{ fontWeight: 'bold', display: 'inline-block' }}>
    Numéro de carte E-dinar<span style={{ color: 'red'}}> *</span> :
    <input
        type="text"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        maxLength="15"
        placeholder="15 chiffres"
    />
</label>

                    {errors.cardNumber && <p style={{ color: 'red' }}>{errors.cardNumber}</p>}
                </div>
                <div>
                    <label style={{ fontWeight: 'bold', display: 'inline-block' }}>
                        Code secret<span style={{ color: 'red'}}> *</span> ( 8 chiffres)
                        <input
                            type="text"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            maxLength="8"
                            placeholder="8 chiffres"
                        />
                    </label>
                    {errors.cvv && <p style={{ color: 'red' }}>{errors.cvv}</p>}
                </div>
                <div>
                    <label>
                        Montant à payer (DT) :
                        <input type="number" value={amount.toFixed(2)} readOnly />
                    </label>
                </div>
                <button type="submit">Confirmer le paiement</button>
                <button type="button" onClick={onClose} style={{ marginLeft: '10px' }}>Annuler</button>
            </form>
        </div>
    );
}

export default PaymentForm;
