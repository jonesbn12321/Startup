import React from 'react';

export function Scores() {
  return (
    <main class = "container py-4">
            <table class = "table table-striped table-hover shadow">
                <thead class = "table-dark">
                <tr>
                    <th>Game</th>
                    <th>Opponent</th>
                    <th>Score</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Player 1</td>
                    <td>5-1</td>
                    <td>May 20, 2021</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Annie James</td>
                    <td>4-2</td>
                    <td>June 2, 2021</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Gunter Spears</td>
                    <td>3-3</td>
                    <td>July 3, 2020</td>
                </tr>
                </tbody>
            </table>
        </main>
  );
}