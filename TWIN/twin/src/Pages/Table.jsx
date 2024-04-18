import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Single from './Single';
import SortButtons from '../components/SortButtons';
import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import '../styles/table.scss';

function Table() {
	const [people, setPeople] = useState([]); // mitu tk lehel
	const [dbPeople, setDbPeople] = useState([]);
	const [loading, setLoading] = useState(false);
	const [selectedRow, setSelectedRow] = useState(-1);
	const [pageNumbers, setPageNumbers] = useState([]);
	const [totalPages, setTotalPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(0);

	useEffect(() => {
		generatePageNumbers();
		fetch('https://midaiganes.irw.ee/api/list?limit=500')
			.then((res) => res.json())
			.then((data) => {
				setPeople(data.list.slice(0, 10));
				setDbPeople(data.list);
				setLoading(false);
				setTotalPages(Math.ceil(data.list.length / 10));
				generatePageNumbers(1, Math.ceil(data.list.length / 10));
			});
	}, []);

	const getBirthDate = (personalCode) => {
		const birthDay = personalCode.toString().slice(5, 7);
		const birthMonths = personalCode.toString().slice();
		return birthDay + '.12.2022';
	};

	const openDetails = (personId) => {
		if (personId === selectedRow) {
			setSelectedRow(-1);
		} else {
			setSelectedRow(personId);
		}
	};

	const generatePageNumbers = (activePage, initialPageNumbers) => {
		// 1-5 leht 1
		// 1-5 leht 2
		// 1-5 leht 3
		// 2-6 leht 4
		// 3-7 leht 5

		if (activePage === 1 || activePage === 2) {
			activePage = 3;
		}

		const pagesCount =
			initialPageNumbers === undefined ? totalPages : initialPageNumbers;

		if (activePage === pagesCount || activePage === pagesCount - 1) {
			activePage = pagesCount - 2;
		}

		const totalPageNumbers = Math.min(pagesCount, activePage + 2);
		const numbers = [];
		for (let i = activePage - 2; i <= totalPageNumbers; i++) {
			numbers.push(i);
		}
		setPageNumbers(numbers);
	};

	const changePage = (pageNumber) => {
		setCurrentPage(pageNumber);
		setPeople(dbPeople.slice(pageNumber * 10 - 10, pageNumber * 10));
		generatePageNumbers(pageNumber);
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
								{people.map((person, index) => (
									<React.Fragment key={person.id}>
										<tr onClick={() => openDetails(person.id)}>
											<td>{person.firstname}</td>
											<td>{person.surname}</td>
											<td>{person.sex}</td>
											<td>{getBirthDate(person.personal_code)}</td>
											<td>{person.phone}</td>
										</tr>
										{selectedRow === person.id && ( // Kui rida on valitud, näita täiendavat teavet
											<tr>
												<td colSpan='5'>
													{/* Siin saad lisada täiendava teabe või pildi */}
													<div className='raw_border'>
														<img
															className='raw_img'
															src={person.image.small}
															alt=''
														/>
														<span
															className='raw_info'
															dangerouslySetInnerHTML={{
																__html:
																	person.body.length > 50
																		? person.body.substring(0, 500) + '...'
																		: person.body,
															}}
														></span>
														<br />
													</div>
												</td>
											</tr>
										)}
									</React.Fragment>
								))}
							</tbody>
						</table>
						<div className='pagination'>
							<Pagination>
								<Pagination.Prev
									onClick={() => changePage(currentPage - 1)}
									disabled={currentPage === 1}
								/>
								{pageNumbers.map((pageNumber) => (
									<Pagination.Item
										key={pageNumber}
										onClick={() => changePage(pageNumber)}
										active={pageNumber === currentPage}
									>
										{pageNumber}
									</Pagination.Item>
								))}
								<Pagination.Next
									onClick={() => changePage(currentPage + 1)}
									disabled={currentPage === totalPages}
								/>
							</Pagination>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Table;
