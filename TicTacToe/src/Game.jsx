import { useState } from 'react';
import Welcome from './components/Welcome';
import { Routes, Route } from 'react-router-dom';
import { GameHistoryProvider } from './context/GameHistoryContext';

export default function Game() {
	return (
		<GameHistoryProvider value={{}}>
			<Routes>
				<Route path='/' element={<Welcome />} />
			</Routes>
		</GameHistoryProvider>
	);
}
