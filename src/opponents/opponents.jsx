import React from 'react';
import {NavLink} from 'react-router-dom';
import './opponents.css';


export function Opponents() {
  const[players, setPlayers]= React.useState([]);
  const [socket, setSocket]=React.useState(null);

  React.useEffect(()=>{
    const ws = new WebSocket("ws://localhost:3000");

    const username = localStorage.getItem("user")?.split("@")[0];
    const num = Math.floor(Math.random()*6)+1;
    const avatar = `monster${num}.png`;

    ws.onopen = () =>{
      console.log("Connected");

      ws.send(JSON.stringify({
        type:"player_join",
        name:username,
        avatar: avatar
      }));

      setPlayers([{name:username, avatar}]);
    };
    ws.onmessage= event=>{
      const data = JSON.parse(event.data);

      if(data.type === "player_join"){
        setPlayers(prev=>{
          if(prev.find(p=>p.name === data.name)) return prev;
          return[...prev, data];
        })
      }
      if(data.type === "player_leave"){
        setPlayers(prev=>
          prev.filter(p=>p.name !== data.name)
        );
      }
    }
    
    

    setSocket(ws);
    return()=>{
      ws.send(JSON.stringify({
        type:"player_leave",
        name:username
      }));
      ws.close();
    }
  },[])

  return (
    <main className= "container py-4">
            <div className="card p-4 shadow-sm">
                <h1>Active Players</h1>
                {players.length === 0 ? (
                <p>Searching for players...</p>
              ) : (
                <ul className="list-unstyled">
                  {players.map(player => (
                    <li key={player.id} className = "player-item">
                      <img src={player.avatar} className="monster-icon" />
                      <span>{player.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="text-center mt-4">
              <NavLink to="/play" className="play-btn">
                Start Game!
              </NavLink>
            </div>
        </main>    
  );
}