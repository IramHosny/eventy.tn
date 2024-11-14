import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';
import { logout } from '../redux/userSlice';
import { useDispatch, useSelector } from "react-redux";

function CollapsibleExample() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user);
  const isAuth = localStorage.getItem("token");
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"> <Link style={{textDecoration:'none'}} to="/"> <img src='./logo_eventi.png'  alt="" style={{marginLeft:'-70px',width:'170px',height:'40px'}}/> </Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"><Link style={{textDecoration:'none' , color:'black',fontWeight:'bold', paddingLeft: '15px',
  paddingRight:'15px'}} to="/about"> A propos  </Link></Nav.Link>
            <Nav.Link href="#pricing"><Link style={{textDecoration:'none' , color:'black',fontWeight:'bold', paddingLeft: '15px',
  paddingRight:'15px'}} to={`/EVENTY/produit`}> Nos packs  </Link> </Nav.Link>
            <NavDropdown title="Les prestataires" id="collapsible-nav-dropdown" style={{textDecoration:'none' , color:'black',fontWeight:'bold', paddingLeft: '15px',
  paddingRight:'15px'}}>
     <NavDropdown.Item href="#action/3.6"><Link style={{textDecoration:'none' , color:'black',fontWeight:'bold', paddingLeft: '15px',
  paddingRight:'15px'}} to="/prestataires"> Tous les prestataires EVENTY</Link>
               </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1"> <Link style={{textDecoration:'none' , color:'black',fontWeight:'bold', paddingLeft: '15px',
  paddingRight:'15px'}} to={`/photographe/prestataire`}> Les photographes </Link> </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> <Link style={{textDecoration:'none' , color:'black',fontWeight:'bold', paddingLeft: '15px',
  paddingRight:'15px'}} to={`/coiffeur/prestataire`}>  Les coiffeurs  </Link>
               </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link style={{textDecoration:'none' , color:'black',fontWeight:'bold', paddingLeft: '15px',
  paddingRight:'15px'}} to={`/fleuriste/prestataire`}> Les fleuristes </Link> </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"><Link style={{textDecoration:'none' , color:'black',fontWeight:'bold', paddingLeft: '15px',
  paddingRight:'15px'}} to={`/salles/prestataire`}> Les salles des fêtes </Link>
                
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5"><Link style={{textDecoration:'none' , color:'black',fontWeight:'bold', paddingLeft: '15px',
  paddingRight:'15px'}} to={`/traiteur/prestataire`}>  Les traiteurs </Link>
               
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6"><Link style={{textDecoration:'none' , color:'black',fontWeight:'bold', paddingLeft: '15px',
  paddingRight:'15px'}} to={`/decorateur/prestataire`}>    Les décorateurs </Link>
               </NavDropdown.Item>
               
            </NavDropdown>
            <Nav.Link href="#features"><Link style={{textDecoration:'none' , color:'black',fontWeight:'bold', paddingLeft: '15px',
  paddingRight:'15px'}} to="/avis"> Avis  </Link></Nav.Link>
  <Nav.Link href="#features"><Link style={{textDecoration:'none' , color:'black',fontWeight:'bold', paddingLeft: '15px',
  paddingRight:'15px'}} to="/contact"> Contact  </Link></Nav.Link>
  <Nav.Link href="#link"><Link style={{textDecoration:'none' , color:'black',fontStyle:'italic',fontFamily:'cursive',fontWeight:'bold', paddingLeft: '20px',
  paddingRight:'20px'}} to="/login"> </Link>  </Nav.Link>
  {(isAuth&&user?.role==="user")?(
    <>
   <Nav.Link href="#link"><Link style={{textDecoration:'none' , color:'black',fontWeight:'bold', 
   paddingRight:'20px'}} to="/userprofile"> {user?.name} </Link>  </Nav.Link>
    <Nav.Link href="#link"><Link style={{textDecoration:'none' , color:'black',fontWeight:'bold', 
   paddingRight:'20px'}} to="/userorders"> réservations </Link>  </Nav.Link>
   
   <Nav.Link href="#link"><Link style={{textDecoration:'none' , color:'black',fontStyle:'italic',fontFamily:'cursive',fontWeight:'bold', paddingLeft: '20px',
    paddingRight:'20px'}} to="/panier"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={20} height={20}><path fill="#ffc107" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></Link>  </Nav.Link></>
  ):(isAuth&&user?.role==="admin")?(
    <Nav.Link href="#link"><Link style={{textDecoration:'none' , color:'black',fontStyle:'italic',fontFamily:'cursive',fontWeight:'bold', paddingLeft: '250px',
   paddingRight:'20px'}} to="/dashboard"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} height={20}><path fill="#ffc107" d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>  </Link>  </Nav.Link>
  ):null}
          </Nav>
          {
            isAuth?(
            <span style={{border:'none',backgroundColor:'none'}} onClick={()=>{
              dispatch(logout()); 
              navigate("/login")}}> 
            <Nav.Link >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} height={20}><path fill="#ffc107" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/></svg>            </Nav.Link>
            </span>
            )
            :(
            <Link to='/login' style={{textDecoration:"none"}}> 
            <Nav.Link href="#deets">
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 448 512"><path fill="black"  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
            </Nav.Link>
            </Link>)
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;