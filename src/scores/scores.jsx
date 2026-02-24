import React from 'react';

export function Scores() {
    const [scores, setScores] = React.useState([]);
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
    <main className = "container py-4">
            <table className = "table table-striped table-hover shadow">
                <thead className = "table-dark">
                    <tr>
                        <th>Game</th>
                        <th>Opponent</th>
                        <th>Score</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody id = 'scores'>{scoreRows}</tbody>
            </table>
        </main>
  );
}