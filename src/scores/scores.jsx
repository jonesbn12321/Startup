import React from 'react';

export function Scores() {
    React.useEffect(() => {
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
          setScores(JSON.parse(scoresText));
        }
      }, []);

    //Create an array with React  
    const scoreRows = [];
    if (scores.length) {
        for (const [i, score] of scores.entries()) {
        scoreRows.push(
            <tr key={i}>
            <td>{i}</td>
            <td>{score.name.split('@')[0]}</td>
            <td>{score.score}</td>
            <td>{score.date}</td>
            </tr>
        );
        }
    } else {
        scoreRows.push(
        <tr key='0'>
            <td colSpan='4'>Be the first to score</td>
        </tr>
        );
    }

    
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