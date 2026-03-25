import React from 'react';

import { useNavigate } from 'react-router-dom';
import{AuthState} from './authState';

export function Login({user, authState, onAuthChange}) {
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError]= React.useState('');
    const navigate = useNavigate();

    async function login(){
        if (!name||!password){
            setError('Fill in all fields');
            return;
        }

        const response = await fetch('/api/auth/login',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email: name, password})
        });

        let data;
        try {
        data = await response.json();
        } catch (err) {
        setError('Server error');
        return;
        }
        if (response.ok) {
            localStorage.setItem('user', data.email);
            onAuthChange(data.email, AuthState.Authenticated);
            navigate('/opponents');
        } else {
        setError('Login failed');
        }
    }

    async function createUser() {
        if (!name || !password) {
            setError('Fill in all fields');
            return;
        }

        const response = await fetch('/api/auth/create', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: name, password })
        });

        let data;
        try {
        data = await response.json();
        } catch (err) {
        setError('Server error');
        return;
        }
        if (response.ok) {
            localStorage.setItem('user', data.email);
            onAuthChange(data.email, AuthState.Authenticated);
            navigate('/opponents');
        } else {
            setError('User already exists');
        }
    }
    
    async function logout(){
        await fetch('/api/auth/logout',{
            method: 'DELETE'
        });
        localStorage.removeItem('user');
        onAuthChange('',AuthState.Unauthenticated);
        navigate('/');
    }    

  return (
    <main className = "container py-4">
        {authState===AuthState.Authenticated ?(
            <div className = "card p-4 shadow-sm text-center">
                <h2>Welcome {user}!</h2>
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
                    <button className = "button" onClick = {createUser}>Create</button>
                  </div>
          </div>

        )}
          
      </main>
  );
}