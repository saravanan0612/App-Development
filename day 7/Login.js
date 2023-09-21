import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { login , logout} from './features/userReducer';
import { useSelector } from 'react-redux';
// import './Login.css';

function Login() {
  const dispatch = useDispatch();

  const [name,setName] = useState('');
  const [age,setAge] = useState(0);
  const [email,setEmail] = useState('');

  const user = useSelector(state => state.user.value)

  return (
    <div>
     { !user.name && (
         <div>
           <input value={name} placeholder="Name"onChange=
           {e=>setName(e.target.value)}/
           >
           <input value={age} placeholder="Age" onChange=
           {e=>setAge(e.target.value)}/
           >
           <input value={email} placeholder="Email"onChange=
           {e=>setEmail(e.target.value)}/
           >
         </div>
     )}

     
      { !user.name ?
        <button onClick={() => dispatch(login(
      {name,age,email}))}>
      Login
      </button> :

      <button onClick={() => dispatch(logout())}>
          Logout
      </button>}

    </div>
  )
}

export default Login