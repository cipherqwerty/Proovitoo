import GameBoard from './components/GameBoard';
import Welcome from './components/Welcome';
import { Routes, Route } from 'react-router-dom';
export default function Game() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Welcome />} />
			</Routes>
		</div>
	);
}
