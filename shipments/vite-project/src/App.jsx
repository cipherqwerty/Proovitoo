import './App.css';
import { Routes, Route } from 'react-router-dom';
import Product from './Product';
import OneProduct from './OneProduct';
function App() {
	return (
		<>
			<Routes>
				<Route path='' element={<Product />}></Route>
				<Route path='product/:index' element={<OneProduct />} />
			</Routes>
		</>
	);
}

export default App;
