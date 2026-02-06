import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    // Load favicon when it loads
    useEffect(() => {
    const seed = Math.random().toString(36).substring(7);
    const favicon = document.getElementById("favicon");

    if (favicon) {
      favicon.href = `https://robohash.org/${seed}?set=set2&size=64x64`;
    }
  }, []);

  return (
    <div className="app bg-dark text-light">

      <header>
            <h1>Monster Matching</h1>
            {/* <!-- Navigation Elements to get to each page --> */}
             <nav>
                <menu>
                    <li><a href = "index.html"class = "active">Home</a></li>
                    <li><a href = "opponents.html">Choose Opponent</a></li>
                    <li><a href = "scores.html">Scores</a></li>
                </menu>
             </nav>

        </header>

    </div>
  );
}