import React from 'react';
import { useNavigate } from 'react-router-dom';
import{AuthState} from './authState';

export function Login({userName, authState, onAuthChange}) {
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError]= React.useState('');
    const navigate = useNavigate();

    function login(){
        if (!name||!password){
            setError('Fill in all fields');
            return;
        }
        localStorage.setItem('credentials',JSON.stringify({name, password}));
        onAuthChange(name, AuthState.Authenticated);
        navigate("/opponents");
    }
    function logout(){
        onAuthChange(userName,AuthState.Unauthenticated);
        navigate('/');
    }    

  return (
    <main className = "container py-4">
        {authState===AuthState.Authenticated ?(
            <div className = "card p-4 shadow-sm text-center">
                <h2>Welcome {userName}!</h2>
                <button className = "btn btn-danger mt-3" onClick = {logout}>Logout</button>
            </div>
        ):(
            <div className="card p-4 shadow-sm">
              <h1>Welcome!</h1>
              <p>Login to play!</p>

              
                  <div className="mb-3">
                      <label className = "form-label">Name</label>
                      <input className="form-control" placeholder= "Your name here" onChange ={(e) => setName(e.target.value)}/>
                  </div>
                    <div className="mb-3">
                      <label className = "form-label">Password</label>
                      <input type = "password" className="form-control" placeholder= "Your password here"onChange = {(e) => setPassword(e.target.value)}/>
                  </div>
                  {error&& <p className = "text-danger">{error}</p>}

                  <div className = "d-flex justify-content gap-3">
                    <button className = "button" onClick = {login}>Log In</button>
                    <button className = "button" onClick = {login}>Create</button>
                  </div>
          </div>

        )}
          
      </main>
  );
}