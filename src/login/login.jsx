import React from 'react';

export function Login() {
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    function loginUser(){
        console.log('login '+name + " "+password);
        localStorage.setItem('user', name, password);
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
              <form method = "get" action = "opponents.html">
                  <div className="mb-3">
                      <label htmlFor = "name" className = "form-label">Name</label>
                      <input type = "text" id = "name" className="form-control" placeholder= "Your name here" onChange = {nameChange}/>
                  </div>
                    <div className="mb-3">
                      <label htmlFor = "password" className = "form-label">Password</label>
                      <input type = "text" id = "name" className="form-control" placeholder= "Your password here"onChange = {passChange}/>
                  </div>
                  
                  <button type="button" onClick = {loginUser}>Log In</button>
                  <button type="button" onClick = {loginUser}>Create</button>
              </form>
          </div>
      </main>
  );
}