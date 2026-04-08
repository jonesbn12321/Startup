import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/app';
import {WSProvider} from './src/webSocket'

const root = ReactDOM.createRoot(document.getElementById('root'));
<WSProvider>
    root.render(<App />);
</WSProvider>
