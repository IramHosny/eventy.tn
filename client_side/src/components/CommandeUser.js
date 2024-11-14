// CommandeUser.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getorders } from '../redux/orderSlice';
import PaymentForm from './PaymentForm';

function CommandeUser() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user?.user);
    const orders = useSelector((state) => state.order?.order);  
    const [userOrders, setUserOrders] = useState([]);  
    const [paymentOrderId, setPaymentOrderId] = useState(null);

    useEffect(() => {
        dispatch(getorders());
    }, [dispatch]);

    useEffect(() => {
        if (orders) {
            const filteredOrders = orders.filter(order => order.current_user === user?.email);
            setUserOrders(filteredOrders);  
        }
    }, [orders, user?.email]);

    // Fonction pour gérer l'affichage du formulaire de paiement
    const handlePaymentClick = (orderId) => {
        setPaymentOrderId(orderId);  // Enregistre l'ID de la commande pour afficher le formulaire
    };

    // Fonction pour fermer le formulaire de paiement
    const closePaymentForm = () => {
        setPaymentOrderId(null);  // Réinitialise paymentOrderId pour masquer le formulaire
    };

    return (
        <div>
            {userOrders.length === 0 ? (
                <p>Aucune commande trouvée.</p>
            ) : (
                <div style={{ marginTop: '2%', marginBottom: '2%' }}>
                    <h2 style={{ marginBottom: '2%', textAlign: 'center' }}>Historique de vos réservations</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Statut</th>
                                <th>Total</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userOrders.map(order => (
                                <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.orderStatus}</td>
                                    <td>{order.orderTotal.toFixed(2)} DT</td>
                                    <td>{new Date(order.date_v).toLocaleDateString()}</td>
                                    <td>
                                        {order.orderStatus === "acceptée" && (
                                            <button onClick={() => handlePaymentClick(order._id)}>
                                                Payer maintenant
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {paymentOrderId && (
                <PaymentForm
                    orderId={paymentOrderId}
                    amount={userOrders.find(order => order._id === paymentOrderId)?.orderTotal}
                    onClose={closePaymentForm}
                />
            )}
        </div>
    );
}

export default CommandeUser;
