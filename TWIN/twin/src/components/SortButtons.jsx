import React, { useState } from 'react';

export default function SortButtons(props) {
	const [sortFirstName, setSortFirstName] = useState('default');

	const sortAZ = () => {
		if (sortFirstName === 'default') {
			setSortFirstName('asc');
			props.people.sort((a, b) => a.firstname.localeCompare(b.firstname));
			props.setPeople(props.people.slice());
			return;
		}
		if (sortFirstName === 'asc') {
			setSortFirstName('desc');
			props.people.sort((a, b) => b.firstname.localeCompare(a.firstname));
			props.setPeople(props.people.slice());
			return;
		}
		if (sortFirstName === 'desc') {
			setSortFirstName('default');
			props.setPeople(props.people.slice());
			return;
		}
	};

	return (
		<div>
			<button onClick={sortAZ}>Sort A-z</button>
		</div>
	);
}
