import React from 'react';
import {NavLink} from 'react-router-dom';


export function Opponents() {
  return (
    <main className= "container py-4">
            <div className="card p-4 shadow-sm">
                <h1>Available Opponents</h1>
                <ul className="list-unstyled">
                  <li><NavLink className ="nav-button" to="/play"><img src="monster1.png" className="monster-icon" />Opponent 1</NavLink></li>
                  <li><NavLink className ="nav-button" to="/play"><img src="monster2.png" className="monster-icon" />Opponent 2</NavLink></li>
                </ul>
            </div>
        </main>    
  );
}