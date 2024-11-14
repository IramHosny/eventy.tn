import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Avis from './components/Avis';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import PrestataireList from './components/PrestataireList';
import Login from './components/Login';
import Subscribe from './components/Subscribe';
import UserProfile from './components/UserProfile';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { userCurrent } from './redux/userSlice';
import { getusers } from './redux/usersSlice';
import DashboardAdmin from './components/DashboardAdmin';
import { getcomment } from './redux/commentSlice';
import { getprestataire } from './redux/prestataireSlice';
import { getproduit } from './redux/produitSlice';
import PrestataireListAdmin from './components/PrestataireListAdmin';
import UserListAdmin from './components/UserListAdmin';
import ProduitListAdmin from './components/ProduitListAdmin';
import ProduitList from './components/ProduitList';
import ClientOrders from './components/ClientOrders';
import AdminOrders from './components/AdminOrders';
import Panier from './components/Panier';
import { getorders } from './redux/orderSlice';
import DetailsProduit from './components/DetailsProduit';
import Footer from './components/Footer';
import Prestataire from './components/Prestataire';
import CommandeUser from './components/CommandeUser';


function App() {
  const dispatch = useDispatch();
  const [ping, setping] = useState(false);

  useEffect(() => {
    dispatch(getusers());
    dispatch(userCurrent());
    dispatch(getcomment());
    dispatch(getprestataire());
    dispatch(getproduit());
    dispatch(getorders());
  }, [ping]);
  return (
    <>
     <Navbarr/>
     <Routes>
     <Route path="/" element={ <Home/> } />
     <Route path="/login" element={<Login />} />
     <Route path="/subscribe" element={<Subscribe />} />
     <Route path="/about" element={ <About/> } />
     <Route path="/contact" element={ <Contact/> } />
     <Route path="avis" element={ <Avis/> } />
     <Route path="prestataires" element={ <Prestataire/> } />
     <Route path="userprofile" element={ <PrivateRoute><UserProfile/></PrivateRoute> } />
     <Route path="/dashboard" element={ <PrivateRoute><DashboardAdmin/></PrivateRoute> } />
     <Route path="/:type/prestataire" element={<PrestataireList ping={ping} setping={setping} />} />
     <Route path="/prestadmin" element={<PrivateRoute><PrestataireListAdmin /></PrivateRoute>} />
     <Route path="/usersadmin" element={<PrivateRoute><UserListAdmin /></PrivateRoute>} />
     <Route path="/produitadmin" element={<PrivateRoute><ProduitListAdmin /></PrivateRoute>} />
     <Route path="/:name/produit" element={<ProduitList ping={ping} setping={setping} />} />
     <Route path="/panier" element={<PrivateRoute><Panier /></PrivateRoute>} />
    <Route path="/clientorders" element={<PrivateRoute><ClientOrders /></PrivateRoute>} />
    <Route path="/adminorders" element={<PrivateRoute><AdminOrders /></PrivateRoute>} />
    <Route path="/userorders" element={<PrivateRoute><CommandeUser /></PrivateRoute>} />
    <Route path="/produitdetails/:_id" element={ <DetailsProduit /> }/>
     </Routes>
     <Footer/>
    </>
  );
}

export default App;
