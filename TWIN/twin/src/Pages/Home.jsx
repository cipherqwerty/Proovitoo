import '../styles/home.scss';
import Navbar from '../components/Navbar';

function Home() {
	return (
		<div>
			<Navbar />
			<div className='main-container'>
				<div className='container'>
					<div className='text-wrapper'>
						<h1>Trinidad Wiseman</h1>
						<p>SPA proovitöö</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
