import React from 'react';
import {NavLink} from 'react-router-dom';


export function Opponents() {
  const[players, setPlayers]= React.useState([]);

  React.useEffect(()=>{
    const names = ['Alex', 'Brian','Brooklyn','Matthew','Lee','Emma'];
    const interval=setInterval(()=>{
      const randName = names[Math.floor(Math.random()*names.length)];
      const id = Date.now();

      const monsterNumber = Math.floor(Math.random() * 6) + 1;
      const monsterImage = `monster${monsterNumber}.png`;

      setPlayers(prev =>{
        if(prev.find(p=>p.name===randName)) return prev;
        return [...prev, {id, name: randName, avatar:monsterImage}];
      });
    },3000);

      return ()=>clearInterval(interval);
    })

  return (
    <main className= "container py-4">
            <div className="card p-4 shadow-sm">
                <h1>Available Opponents</h1>
                {players.length === 0 ? (
                <p>Searching for players...</p>
              ) : (
                <ul className="list-unstyled">
                  {players.map(player => (
                    <li key={player.id}>
                      <NavLink className="nav-button" to="/play"onClick={() => localStorage.setItem('opponent', player.name)}>
                        <img src={player.avatar} className="monster-icon" />
                        {player.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
        </main>    
  );
}