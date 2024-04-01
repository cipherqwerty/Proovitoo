import '../styles/navbar.scss';
import { Link } from 'react-router-dom';
function Navbar() {
	return (
		<div className='nav-container'>
			<div className='content-wrapper'>
				<Link to='/'>
					<div className='logo-wrapper'>
						<img src='./logo.svg' alt='' />
					</div>
				</Link>
				<div className='text-wrapper'>
					<Link to='/article' style={{ textDecoration: 'none' }}>
						<div className='text'>
							<p>Artikkel</p>
							<img src='../src/assets/images/file.png' alt='file' />
						</div>
					</Link>
					<Link to='/table' style={{ textDecoration: 'none' }}>
						<div className='text'>
							<p>Tabel</p>
							<img src='../src/assets/images/table-grid.png' alt='table' />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
