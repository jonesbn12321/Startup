import React from 'react';
import { useNavigate } from 'react-router-dom';


export function Login({setUser}) {
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError]= React.useState('');
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        
        if(!name||!password){
            setError("Fill in all fields");
            return;
        }
        setError('');
        localStorage.setItem("user", name,password);
        setUser(name);
        navigate("/opponents");
    }

    

  return (
    <main className = "container py-4">
          <div className="card p-4 shadow-sm">
              <h1>Welcome!</h1>
              <p>Login to play!</p>
              <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                      <label htmlFor = "name" className = "form-label">Name</label>
                      <input type = "text" id = "name" className="form-control" placeholder= "Your name here" onChange ={(e) => setName(e.target.value)}/>
                  </div>
                    <div className="mb-3">
                      <label htmlFor = "password" className = "form-label">Password</label>
                      <input type = "password" id = "password" className="form-control" placeholder= "Your password here"onChange = {(e) => setPassword(e.target.value)}/>
                  </div>
                  
                  <button type="submit" disabled={!name || !password} >Log In</button>
                  <button type="button" >Create</button>
              </form>
          </div>
      </main>
  );
}