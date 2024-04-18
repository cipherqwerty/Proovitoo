import React from 'react';

export default function ScoreBoard({ playerOneScore, playerTwoScore }) {
	return (
		<div>
			{playerOneScore}
			{playerTwoScore}
			<div></div>
		</div>
	);
}
