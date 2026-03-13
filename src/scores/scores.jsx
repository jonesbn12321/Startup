import React from 'react';

export function Scores() {
    const [scores, setScores] = React.useState([]);

    function loadScores() {
        fetch('/api/scores')
            .then((response) => response.json())
            .then((scores) => setScores(scores));
    }

    React.useEffect(loadScores, []);

    //Create an array with React  
    const scoreRows = [];
    if (scores.length) {
        for (const [i, score] of scores.entries()) {
        scoreRows.push(
            <tr key={i+1}>
            <td>{i+1}</td>
            <td>{score.name.split('@')[0]}</td>
            <td>{score.score}</td>
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
    <main className = "container py-4">
            <table className = "table table-striped table-hover shadow">
                <thead className = "table-dark">
                    <tr>
                        <th>Game</th>
                        <th>Name</th>
                        <th>Wins</th>
                    </tr>
                </thead>
                <tbody id = 'scores'>{scoreRows}</tbody>
            </table>
        </main>
  );
}