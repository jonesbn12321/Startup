import React from 'react';
import { useNavigate } from 'react-router-dom';


export function Login({setUser}) {
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    function loginUser(){
        console.log('login '+name + " "+password);
        localStorage.setItem('user', name, password);
        setUser(name);
        navigate('/opponents');
    }

    function nameChange(e){
        setName(e.target.value);
    }
    function passChange(e){
        setPassword(e.target.value);
    }
  return (
    <main className = "container py-4">
          <div className="card p-4 shadow-sm">
              <h1>Welcome!</h1>
              <p>Login to play!</p>
              <form onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-3">
                      <label htmlFor = "name" className = "form-label">Name</label>
                      <input type = "text" id = "name" className="form-control" placeholder= "Your name here" onChange = {nameChange}/>
                  </div>
                    <div className="mb-3">
                      <label htmlFor = "password" className = "form-label">Password</label>
                      <input type = "text" id = "password" className="form-control" placeholder= "Your password here"onChange = {passChange}/>
                  </div>
                  
                  <button type="button" onClick = {loginUser}>Log In</button>
                  <button type="button" onClick = {loginUser}>Create</button>
              </form>
          </div>
      </main>
  );
}