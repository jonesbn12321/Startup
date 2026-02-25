import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { Opponents } from './opponents/opponents';

export default function App() {
  const[user, setUser]= React.useState(localStorage.getItem('user')||null);

  return (
    <BrowserRouter>
    
      <div className="app">
        <header>
            <h1>Monster Matching</h1>
            {/* <!-- Navigation Elements to get to each page --> */}
              <nav>
                <menu>
                    <li><NavLink className={({ isActive }) => isActive ? "nav-button active" : "nav-button"} to="/">Login</NavLink></li>
                    {user && <li><NavLink className={({ isActive }) => isActive ? "nav-button active" : "nav-button"} to="/opponents">Opponents</NavLink></li>}
                    <li><NavLink className={({ isActive }) => isActive ? "nav-button active" : "nav-button"} to="/scores">Scores</NavLink></li>                </menu>
              </nav>
        </header>
      
        <Routes>
          <Route path='/' element={<Login setUser = {setUser}/>} exact />
          <Route path='/opponents' element={<Opponents />} />
          <Route path='/scores' element={<Scores />} />
          <Route path='/play' element={<Play user = {user}/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
          <hr />
          <p >Brooklyn Jones</p>
          <a href = "https://github.com/jonesbn12321/Startup">GitHub</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}