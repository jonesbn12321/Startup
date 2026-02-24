import React from 'react';

export function Play({user}) {
    const[msg, setMsg]= React.useState('...listening');
    const [cards, setCards] = React.useState([]);
    const [flipped, setFlipped] = React.useState([]);
    const [matched, setMatched] = React.useState([]);
    const [score, setScore] = React.useState(0);

    React.useEffect(()=>{
        initializeGame();
    },[]);

    function initializeGame(){
        const monsterList = ['monster1.png','monster2.png','monster3.png','monster4.png','monster5.png','monster6.png'];
        const duplicated = [...monsters, ...monsters];
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
            } else {
            setTimeout(() => {
                setFlipped([]);
            }, 800);
            }
        }
    }
    return (
    <main className = "container py-4">

            <div className="text-center mb-3 game-controls">
                <div className="players mb-2">
                    <h4>{user} Score: {score}</h4>
                </div>
                <div className="players mb-2">
                    Player:
                    <span id="player-name"> Player 2</span>
                </div>
                <div className="mb-2">
                    <label>Player 2 Score</label>
                    <input className="form-control d-inline-block w-auto" value="--" readOnly />
                </div>
                <button className="btn btn-danger" onClick={initializeGame}>Reset</button>
            </div>

            

    <div>
       <style>
       
       </style>
        <div className="board-container">
            <div className = "row">
                {cards.map((card, index)=>{
                    const isFlipped = flipped.includes(index)||matched.includes(index);

                    return (
                        <div key={index} className = "col-3 mb-3 text-center">
                            <button className = "sqaure" onClick = {()=>handleClick(index)}>
                                {isFlipped ?(
                                    <img src ={`/src/${card}`}/>
                                ):('?')}
                            </button>
                        </div>
                    );
                })}
            </div>
            </div>
        </div>
        </main>)}