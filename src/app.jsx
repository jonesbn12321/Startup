import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {

  return (
    <div className="app bg-dark text-light">
      <header>
          <h1>Monster Matching</h1>
          {/* <!-- Navigation Elements to get to each page --> */}
            <nav>
              <menu>
                  <li><a href = "index.html"className = "active">Home</a></li>
                  <li><a href = "opponents.html">Choose Opponent</a></li>
                  <li><a href = "scores.html">Scores</a></li>
              </menu>
            </nav>
      </header>
    
      <main>App Components here</main>

      <footer>
        <hr />
        <p >Brooklyn Jones</p>
        <a href = "https://github.com/jonesbn12321/Startup">GitHub</a>
      </footer>
    </div>
  );
}