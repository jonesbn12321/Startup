import React from 'react';

export function Scores() {
  const [scores, setScores] = React.useState([]);
  const [quote, setQuote] = React.useState('');

  React.useEffect(() => {
    fetch('/api/scores',{credentials:'include'})
      .then(res => {
        if (!res.ok) throw new Error(`Scores fetch failed: ${res.status}`);
        return res.json();
      })
      .then(data => setScores(data))
      .catch(err => {
        console.error('Failed to load scores:', err);
        setScores([]); 
      });
  }, []);

  
  React.useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(res => {
        if (!res.ok) throw new Error(`Advice fetch failed: ${res.status}`);
        return res.json();
      })
      .then(data => setQuote(data.slip.advice))
      .catch(err => {
        console.error('Failed to load advice:', err);
        setQuote("Could not load advice."); 
      });
  }, []);

  const scoreRows = scores.length
    ? scores.map((score, i) => (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{score.name.split('@')[0]}</td>
          <td>{score.score}</td>
        </tr>
      ))
    : (
        <tr key='0'>
          <td colSpan='3'>Be the first to score</td>
        </tr>
      );

  return (
    <main className="container py-4">
      <table className="table table-striped table-hover shadow">
        <thead className="table-dark">
          <tr>
            <th>Game</th>
            <th>Name</th>
            <th>Wins</th>
          </tr>
        </thead>
        <tbody id='scores'>{scoreRows}</tbody>
      </table>

      <p className="text-center mt-3">{quote ? `"${quote}"` : "Loading advice..."}</p>
    </main>
  );
}