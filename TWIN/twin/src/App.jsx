import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Article from './Pages/Article';
import Table from './Pages/Table';
import Navbar from './components/Navbar';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='article' element={<Article />}></Route>
				<Route path='table' element={<Table />}></Route>
				<Route path='navbar' element={<Navbar />}></Route>
				<Route path='*' element={<Home />}></Route>
			</Routes>
		</div>
	);
}

export default App;
