import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game from './Game.jsx';
import { BrowserRouter } from 'react-router-dom';
// import GameHistoryContext from './context/GameHistoryContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <GameHistoryContext> */}
		<BrowserRouter>
			<Game />
		</BrowserRouter>
		{/* </GameHistoryContext> */}
	</React.StrictMode>
);
