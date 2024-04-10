import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/table.scss';
import Single from './Single';
import SortButtons from '../components/SortButtons';

function Table() {
	const [people, setPeople] = useState([]); // mitu tk lehel
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetch('https://midaiganes.irw.ee/api/list?limit=500')
			.then((res) => res.json())
			.then((data) => {
				setPeople(data.list.slice(0, 10));
				setLoading(false);
			});
	}, []);

	const getBirthDate = (personalCode) => {
		const birthDay = personalCode.toString().slice(5, 7);
		const birthMonths = personalCode.toString().slice();
		return birthDay + '.12.2022';
	};

	return (
		<div>
			<Navbar />
			<div className='main-container'>
				<div className='container'>
					<div className='title-wrapper'>
						<h1>Nimekiri</h1>
					</div>
					<div>
						<table className=' table-container'>
							<thead>
								<tr>
									<th>
										Eesnimi
										<SortButtons people={people} setPeople={setPeople} />
									</th>
									<th>Perekonnanimi</th>
									<th>Sugu</th>
									<th>Isikukood</th>
									<th>Telefon</th>
								</tr>
							</thead>
							<tbody>
								{people.map((person) => (
									<tr key={person.id}>
										<td>{person.firstname}</td>
										<td>{person.surname}</td>
										<td>{person.sex}</td>
										<td>{getBirthDate(person.personal_code)}</td>
										<td>{person.phone}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Table;
