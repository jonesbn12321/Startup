import React from 'react';
import './play.css';

export function Play({user}) {
    const [cards, setCards] = React.useState([]);
    const [flipped, setFlipped] = React.useState([]);
    const [matched, setMatched] = React.useState([]);
    const [score, setScore] = React.useState(0);
    const[match, setMatch] = React.useState(false);
    const matchSound = React.useRef(new Audio("/successSound.mp3"));
    const opponent = localStorage.getItem('opponent') || "Waiting...";

    React.useEffect(()=>{
        initializeGame();
    },[]);
   React.useEffect(() => {
        if (cards.length > 0 && matched.length === cards.length) {
            // Wait a short moment to allow the last flip animation to finish
            const timeout = setTimeout(() => {
                if (score > 3) {
                    saveWin();
                }
                alert("Game Over!");
            }, 500); // 500ms matches your card flip timing

            return () => clearTimeout(timeout); // cleanup if component unmounts
        }
    }, [matched]);

    function initializeGame(){
        const monsterList = ['monster1.png','monster2.png','monster3.png','monster4.png','monster5.png','monster6.png'];
        const duplicated = [...monsterList, ...monsterList];
        const shuffled = duplicated
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(obj => obj.value);
        setCards(shuffled);
        setFlipped([]);
        setMatched([]);
        setScore(0);
    }

    function handleClick(index) {
        if (
            flipped.length === 2 ||
            flipped.includes(index) ||
            matched.includes(index)
        ) {
            return;
        }
        const newFlipped = [...flipped, index];
        setFlipped(newFlipped);

        if(newFlipped.length ===2){
            const [first, second] = newFlipped;

            if (cards[first] === cards[second]) {
                setMatched([...matched, first, second]);
                setScore(prev => prev + 1);
                setFlipped([]);
                setMatch(true);
                setTimeout(()=>{
                    setMatch(false);
                },1000);
                matchSound.current.currentTime = 0;
                matchSound.current.play();
            } else {
            setTimeout(() => {
                setFlipped([]);
            }, 800);
            }
        }

    }

    async function saveWin() {
    const newScore = {
        name: user,
        score: 1,
    };

    try {
        const response = await fetch('/api/score', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newScore),
        });

        const scores = await response.json();
        console.log('Updated scores:', scores);
    } catch (err) {
        console.error('Failed to save score', err);
    }
}

  function updateScoresLocal(newScore) {
    let scores = [];
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (newScore.score > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }

    if (!found) {
      scores.push(newScore);
    }

    if (scores.length > 10) {
      scores.length = 10;
    }
  }
    
    return (
    <main className = "container py-4">

            <div className="text-center mb-3 game-controls">
                <div className="players mb-2">
                    <h4>{user} Score: {score}</h4>
                </div>
                <div className="players mb-2">
                    <h4>{opponent} Score: 0</h4>
                </div>
                <button className="btn btn-danger" onClick={initializeGame}>Reset</button>
            </div>  
        {match&&(
            <div className ="match-popup">Match!</div>
        )}
        <div className="board-container">
            <div className = "board">
                {cards.map((card, index)=>{
                    const isFlipped = flipped.includes(index)||matched.includes(index);

                    return (
                        <div key={index} className={`mycard ${isFlipped ? 'flipped' : ''}`}
                            onClick = {()=> handleClick(index)}>
                            <div className = "mycard-inner">
                                <div className = "mycard-front"></div>
                                <div className = "mycard-back">
                                    <img src = {`/${card}`}alt = "monster" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            </div>
        </main>)}