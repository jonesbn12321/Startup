import React from 'react';

export function Play({user}) {
    const[msg, setMsg]= React.useState('...listening');
    const [cards, setCards] = React.useState([]);
    const [flipped, setFlipped] = React.useState([]);
    const [matched, setMatched] = React.useState([]);
    const [score, setScore] = React.useState(0);

    React.useEffect(()=>{
        setInterval(()=>{
            const names = ['Bob', 'Sue', 'Tim'];
            const randomName = names[Math.floor(Math.random() * names.length)];
            const randomCount = Math.floor((Math.random()*100)+1);
            const newMsg = `${randomName}: ${randomCount}`;
            setMsg(newMsg);
        },10000);
    })

    return (
    <main className = "container py-4">
            {/* <!-- const images = ['monster1.png'] --> */}
            <div>{msg}</div>

            <div className="text-center mb-3 game-controls">
                <div className="players mb-2">
                    Player:
                    <span id="player-name"> {user}</span>
                </div>
                <div className="mb-2">
                    <label>{user} Score</label>
                    <input className="form-control d-inline-block w-auto" value="--" readOnly />
                </div>
                <div className="players mb-2">
                    Player:
                    <span id="player-name"> Player 2</span>
                </div>
                <div className="mb-2">
                    <label>Player 2 Score</label>
                    <input className="form-control d-inline-block w-auto" value="--" readOnly />
                </div>

                <button className="btn btn-danger">Reset</button>
            </div>

            

      <div>
       <style>
       
       </style>
        <div className="board-container">
        <table>
            <tbody>
            <tr>
                <td><button className = "square"></button></td>
                <td><button className = "square"></button></td>
                <td><button className = "square"></button></td>
                <td><button className = "square"></button></td>
            </tr>
            </tbody>
            <tbody>
            <tr>
                <td><button className = "square"></button></td>
                <td><button className = "square"></button></td>
                <td><button className = "square"></button></td>
                <td><button className = "square"></button></td>
            </tr>
            </tbody>
            <tbody>
            <tr>
                <td><button className = "square"></button></td>
                <td><button className = "square"></button></td>
                <td><button className = "square"></button></td>
                <td><button className = "square"></button></td>
            </tr>
            </tbody>
        </table>
        </div>
      </div>
        </main>
  );
}