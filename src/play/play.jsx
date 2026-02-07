import React from 'react';

export function Play() {
  return (
    <main class = "container py-4">
            {/* <!-- const images = ['monster1.png'] --> */}

            <div class="text-center mb-3 game-controls">
                <div class="players mb-2">
                    Player:
                    <span id="player-name">Player 1</span>
                </div>
                <div class="players mb-2">
                    Player:
                    <span id="player-name">Player 2</span>
                </div>
                <div class="mb-2">
                    <label>Score</label>
                    <input class="form-control d-inline-block w-auto" value="--" readonly />
                </div>

                <button class="btn btn-danger">Reset</button>
            </div>

            

      <div>
       <style>
       
       </style>
        <div class="board-container">
        <table>
            <tr>
                <td><button class = "square"></button></td>
                <td><button class = "square"></button></td>
                <td><button class = "square"></button></td>
                <td><button class = "square"></button></td>
            </tr>
            <tr>
                <td><button class = "square"></button></td>
                <td><button class = "square"></button></td>
                <td><button class = "square"></button></td>
                <td><button class = "square"></button></td>
            </tr>
            <tr>
                <td><button class = "square"></button></td>
                <td><button class = "square"></button></td>
                <td><button class = "square"></button></td>
                <td><button class = "square"></button></td>
            </tr>
        </table>
        </div>
      </div>
        </main>
  );
}