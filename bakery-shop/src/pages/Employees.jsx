import { useEffect, useRef, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

function Employees() {
	// TODO: Load data from backend service
	const [employers, setEmployers] = useState([]);
	const [messageID, setMessageID] = useState();
	const [messageAvatar, setMessageAvatar] = useState();
	const [messageName, setMessageName] = useState();
	const [messageEmail, setMessageEmail] = useState();
	const [message, setMessage] = useState('');
	const avatarRef = useRef();
	const idRef = useRef();
	const nameRef = useRef();
	const emailRef = useRef();

	useEffect(() => {
		fetch('https://reqres.in/api/users')
			.then((response) => response.json())
			.then((data) => setEmployers(data.data));
	}, []);

	const addEmployee = () => {
		if (idRef.current.value === '') {
			return setMessageID('Please enter ID');
		} else if (avatarRef.current.value === '') {
			return setMessageAvatar('Please enter your URL');
		} else if (nameRef.current.value === '') {
			return setMessageName('Please enter name');
		} else if (
			nameRef.current.value.toLowerCase()[0] === nameRef.current.value[0]
		) {
			return setMessageName('Please enter correct name');
		} else if (emailRef.current.value === '') {
			return setMessageEmail('Please enter email');
		} else if (emailRef.current.value.includes('@') === false) {
			return setMessageEmail('Please enter correct email');
		} else {
			setMessage('Employee added successfully');
		}

		employers.push({
			avatar: avatarRef.current.value,
			id: Number(idRef.current.value),
			first_name: nameRef.current.value,
			email: emailRef.current.value,
		});
		setEmployers(employers.slice());

		avatarRef.current.value = '';
		idRef.current.value = '';
		nameRef.current.value = '';
		emailRef.current.value = '';

		setMessageAvatar();
		setMessageEmail();
		setMessageID();
		setMessageName();
	};

	const deleteEmployee = (index) => {
		employers.splice(index, 1);
		setEmployers(employers.slice());
	};

	return (
		<div>
			<div className='container'>
				<h2 className='mb-4'>Employees</h2>

				<Table className='table table-hover table-bordered table-sortable'>
					<thead>
						<tr>
							<th scope='col'>Avatar</th>
							<th scope='col'>ID</th>
							<th scope='col'>Name</th>
							<th scope='col'>Email</th>
							<th scope='col'>Actions</th>
						</tr>
					</thead>
					<tbody>
						{employers.map((employee, id) => (
							<tr key={id}>
								<td>
									<img src={employee.avatar} alt='' />
								</td>
								<td>{employee.id}</td>
								<td>{employee.first_name}</td>
								<td>{employee.email}</td>
								<td>
									<Button
										type='button'
										variant='danger'
										onClick={() => deleteEmployee(id)}
									>
										Delete
									</Button>
								</td>
							</tr>
						))}
						<tr className='input-row'>
							<td>
								<input
									type='url'
									placeholder='Avatar'
									className='form-control'
									ref={avatarRef}
								/>
								{messageAvatar}
							</td>
							<td>
								<input
									type='number'
									placeholder='ID'
									className='form-control'
									ref={idRef}
								/>
								{messageID}
							</td>
							<td>
								<input
									type='text'
									placeholder='Name'
									className='form-control'
									ref={nameRef}
								/>
								{messageName}
							</td>
							<td>
								<input
									type='text'
									placeholder='Email'
									className='form-control'
									ref={emailRef}
								/>
								{messageEmail}
							</td>
							<td>
								<Button onClick={addEmployee} type='submit' variant='success'>
									Add
								</Button>
							</td>
						</tr>
					</tbody>
					{message}
				</Table>
			</div>
		</div>
	);
}

export default Employees;
