import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import shipmentJSON from './data/shipments.json';
function Product() {
	const [shipments, setShipments] = useState([]);

	useEffect(() => {
		fetch('https://my.api.mockaroo.com/shipments.json?key=5e0b62d0')
			.then((res) => {
				if (!res.ok) {
					throw new Error('Failed to load data from server');
				}
				return res.json();
			})
			.then((data) => setShipments(data))
			.catch((error) => {
				console.error('ERROR FETCHING DATA', error);
				console.log('Switching to local storage');
				setShipments(shipmentJSON);
			});
	}, []);

	const deleteProduct = (e) => {
		const result = shipments.slice();
		result.splice(e, 1);
		setShipments(result);
	};

	return (
		<div className='flex flex-col items-center'>
			<table className='w-screen'>
				<thead className='h-[50px] bg-gray-100 '>
					<tr>
						<th className='text-sm text-gray-400 font-medium'>ORDERNO</th>
						<th className='text-sm text-gray-400 font-medium'>DELIVERYDATE</th>
						<th className='text-sm text-gray-400 font-medium'>CUSTOMER</th>
						<th className='text-sm text-gray-400 font-medium'>TRACKINGNO</th>
						<th className='text-sm text-gray-400 font-medium'>STATUS</th>
						<th className='text-sm text-gray-400 font-medium'>CONSIGNEE</th>
					</tr>
				</thead>
				<tbody className='text-nowrap'>
					{shipments.map((shipment, index) => (
						<tr key={shipment.orderNo}>
							<td className='pb-10 w-[250px] text-md text-gray-600 border-b-2 border-gray-100 pt-4'>
								{shipment.orderNo}
							</td>
							<td className='w-[250px] pb-10 text-md text-gray-600 border-b-2 border-gray-100 pt-4'>
								{shipment.date}
							</td>
							<td className='pb-10 w-[350px]  text-md text-gray-600 border-b-2 border-gray-100 pt-4'>
								{shipment.customer}
							</td>
							<td className='w-[250px] pb-10 text-md text-gray-600 border-b-2 border-gray-100 pt-4'>
								{shipment.trackingNo}
							</td>
							<td className='pb-10 text-md text-gray-600 border-b-2 border-gray-100 pt-4'>
								{shipment.status}
							</td>
							<td className='w-[300px] pb-10 text-md text-gray-600 border-b-2 border-gray-100 pt-4'>
								{shipment.consignee}
							</td>
							<td className='flex gap-5 items-center mt-3'>
								<td className='h-[40px] w-[60px] bg-cyan-300 rounded-md flex items-center justify-center shadow-md cursor-pointer'>
									<Link to={'/product/' + index}>
										<img src='./card.png' className='h-[15px] ' alt='' />
									</Link>
								</td>
								<td className='flex items-center justify-center h-[40px] w-[60px] bg-red-500 rounded-md shadow-md cursor-pointer'>
									<img
										src='./close.png'
										alt=''
										className='h-[10px] '
										onClick={() => deleteProduct(index)}
									/>
								</td>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Product;
