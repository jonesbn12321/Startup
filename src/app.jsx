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

      <header className="container-fluid">
        <nav className="navbar fixed-top navbar-dark">
          <div className="navbar-brand">
            Monster Matching
          </div>
        </nav>
      </header>

      <main className="container-fluid mt-5 pt-4">
        <h1>Monster Matching</h1>
      </main>

    </div>
  );
}