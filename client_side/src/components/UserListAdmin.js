import React from 'react';
import {  useDispatch,useSelector} from 'react-redux';
import Table from 'react-bootstrap/Table';
import Swal from 'sweetalert2';
import { removeuser } from '../redux/userSlice';
import Button from 'react-bootstrap/Button';


function UserListAdmin() {
    const dispatch=useDispatch()
    const user = useSelector(state => state.user?.user);
    const isAuth = localStorage.getItem('token');
    const users = useSelector((state)=>state.users?.users);
    const Users = users?.filter((el) => el?.email !== 'admin@gmail.com');
    const alert = (a) => Swal.fire({
        title: "Voulez vous supprimer cet utilisateur ?",
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: "Spprimer",
        denyButtonText: `cancel`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          dispatch(removeuser(a));
          Swal.fire("Utilisateur supprimé");
          setTimeout(function(){ window. location. reload(); }, 2000);
  
        }
      });

    return (
        <>
        <header className="bg-white shadow">
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">User List </h1>
    </div>
  </header>
            {isAuth && user?.role === "admin" ? (
                <div className='user-list-container' style={{ marginTop: '5%' }}>
                   
                    <div className="table-container">
                        <Table striped className='user-table'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Lastname</th>
                                    <th>email</th>
                                    <th>phonenumber</th>
                                    <th>address</th>
                                    <th></th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                {Users?.map(el => (
                                    <tr key={el._id}>
                                        <td>{el.name}</td>
                                        <td>{el.lastname}</td>
                                        <td>{el.email}</td>
                                        <td>{el.phonenumber}</td>
                                        <td>{el.adress}</td>
                                        <td><Button variant="danger" onClick={()=>alert(el?._id)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={'15px'} height={'15px'}><path fill="#ffffff" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></Button>{' '}
</td>
                                        </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            ) : (
                <div><center><img src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg" alt="" width={'80%'} height={'auto'} style={{ width: "80%", height: "auto" }} /></center></div>
            )}
        </>
    );
}

export default UserListAdmin;
