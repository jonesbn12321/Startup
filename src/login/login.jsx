import React from 'react';

export function Login() {
  return (
    <main className = "container py-4">
          <div className="card p-4 shadow-sm">
              <h1>Welcome!</h1>
              <p>Login to play!</p>
              <form method = "get" action = "opponents.html">
                  <div className="mb-3">
                      <label for = "name" className = "form-label">Name</label>
                      <input type = "text" id = "name" className="form-control" placeholder= "Your name here"/>
                  </div>
                    <div className="mb-3">
                      <label for = "password" className = "form-label">Password</label>
                      <input type = "text" id = "name" className="form-control" placeholder= "Your password here"/>
                  </div>
                  
                  <button type="button">Log In</button>
              </form>
          </div>
      </main>
  );
}