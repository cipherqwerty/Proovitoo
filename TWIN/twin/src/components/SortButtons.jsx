import React from 'react';

export default function SortButtons(props) {
	const sortAZ = () => {
		props.people.sort((a, b) =>
			a.list.firstname.toString().localeCompare(b.list.firstname)
		);
		props.setPeople(props.product.slice());
	};

	return (
		<div>
			<button onClick={sortAZ}>Sort A-z</button>
		</div>
	);
}
