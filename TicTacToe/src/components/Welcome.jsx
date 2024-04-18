import { useRef, useState } from 'react';
import '../assets/css/Welcome.css';
import GameBoard from './GameBoard';

export default function Welcome() {
	const [playerOne, setPlayerOne] = useState('');
	const [playerTwo, setPlayerTwo] = useState('');
	const playerOneRef = useRef();
	const playerTwoRef = useRef();

	const playerNames = () => {
		const playerOneName = playerOneRef.current.value;
		const playerTwoName = playerTwoRef.current.value;

		setPlayerOne(playerOneName);
		setPlayerTwo(playerTwoName);
	};
	return (
		<div>
			{playerOne && playerTwo && (
				<div>
					<GameBoard playerOne={playerOne} playerTwo={playerTwo} />
				</div>
			)}
			<div className={playerOne && playerTwo ? 'hidden' : 'container'}>
				<div className='game-wrapper'>
					<h1>Welcome to TicTacToe!</h1>
					<div className='player-container'>
						<label>Player One Name</label> <br />
						<input type='text' ref={playerOneRef} /> <br />
					</div>
					<div className='player-container'>
						<label>Player Two Name</label> <br />
						<input type='text' ref={playerTwoRef} /> <br />
					</div>
					<div>
						<button onClick={playerNames}>Play!</button>
					</div>
				</div>
			</div>
		</div>
	);
}
