import React from 'react';

export function Play({user}) {
  return (
    <main className = "container py-4">
            {/* <!-- const images = ['monster1.png'] --> */}

            <div className="text-center mb-3 game-controls">
                <div className="players mb-2">
                    Player:
                    <span id="player-name"> {user}</span>
                </div>
                <div className="players mb-2">
                    Player:
                    <span id="player-name"> Player 2</span>
                </div>
                <div className="mb-2">
                    <label>Score</label>
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