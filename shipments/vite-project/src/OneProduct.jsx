import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import shipmentsJSON from './data/shipments.json';
function OneProduct() {
	const { index } = useParams();
	const [shipments, setShipments] = useState([]);

	const orderRef = useRef();
	const dateRef = useRef();
	const customerRef = useRef();
	const trackingRef = useRef();
	const statusRef = useRef();
	const consigneeRef = useRef();

	useEffect(() => {
		fetch('https://my.api.mockaroo.com/shipments.json?key=5e0b62d0')
			.then((res) => {
				if (!res.ok) {
					throw new Error('Failed to fetch data');
				}
				return res.json();
			})
			.then((data) => setShipments(data))
			.catch((error) => {
				console.error('FAILED TO LOAD DATA', error);
				console.log('Switching over to local storage...');
				setShipments(shipmentsJSON);
			});
	}, []);
	const displayProduct = shipments[index] || [];

	const editProduct = () => {
		const updatedProduct = shipments.slice();

		updatedProduct[index] = {
			orderNo: orderRef.current.value,
			date: dateRef.current.value,
			customer: customerRef.current.value,
			trackingNo: trackingRef.current.value,
			status: statusRef.current.value,
			consignee: consigneeRef.current.value,
		};
		console.log(updatedProduct);
		setShipments(updatedProduct);
	};

	return (
		<div className='shadow-2xl mt-[100px] container h-[500px] flex flex-col justify-center rounded-[10px] '>
			<div className='mb-6'>
				<div className='border-b-2 border-gray-100'></div>
			</div>
			<div className='container text-left ml-5'>
				<p className=' text-gray-400 text-sm font-semibold '>
					SHIPMENT DETAILS
				</p>
			</div>
			<div className='flex container h-[300px] items-center'>
				<div className='container h-[250px]'>
					<label className=' inline-block text-left w-[550px] my-2 text-sm text-gray-600 font-semibold'>
						orderNo
					</label>{' '}
					<br />
					<input
						className=' w-[550px] bg-gray-200 h-12 rounded p-4  text-gray-400 outline-none'
						type='text'
						placeholder={displayProduct.orderNo}
						ref={orderRef}
					/>{' '}
					<br />
					<label className=' inline-block text-left w-[550px] my-2 text-sm text-gray-600 font-semibold'>
						customer
					</label>{' '}
					<br />
					<input
						className='  w-[550px] bg-gray-200 h-12 rounded p-4 text-sm text-gray-400 outline-none'
						type='text'
						placeholder={displayProduct.customer}
						ref={customerRef}
					/>{' '}
					<br />
					<label className=' inline-block text-left w-[550px] my-2 text-sm text-gray-600 font-semibold'>
						consignee
					</label>{' '}
					<br />
					<input
						className='w-[550px] bg-gray-200 h-12 rounded p-4 text-sm text-gray-400 outline-none'
						type='text'
						placeholder={displayProduct.consignee}
						ref={consigneeRef}
					/>{' '}
					<br />
				</div>

				<div className='container h-[250px]'>
					<label className=' inline-block text-left w-[550px] text-sm text-gray-600 font-semibold'>
						date
					</label>{' '}
					<br />
					<input
						className='w-[550px] bg-gray-200 h-12 rounded p-4 my-2 text-sm text-gray-400 outline-none'
						type='text'
						placeholder={displayProduct.date}
						ref={dateRef}
					/>{' '}
					<br />
					<label className=' inline-block text-left w-[550px] my-2 text-sm text-gray-600 font-semibold'>
						trackingNo
					</label>{' '}
					<br />
					<input
						className='w-[550px] bg-gray-200 h-12 rounded p-4 text-sm text-gray-400 outline-none'
						type='text'
						placeholder={displayProduct.trackingNo}
						ref={trackingRef}
					/>{' '}
					<br />
					<label className='inline-block text-left w-[550px] my-2 text-sm text-gray-600 font-semibold'>
						status
					</label>{' '}
					<br />
					<input
						className='w-[550px] bg-gray-200 h-12 rounded p-4 text-sm text-gray-400 outline-none'
						type='text'
						placeholder={displayProduct.status}
						ref={statusRef}
					/>
				</div>
			</div>
			<div className='px-[30px] mt-10'>
				<div className='border-b-2 border-gray-100'></div>
			</div>
			<div>
				<button
					className=' h-[40px] w-[120px] border-gray-400 border rounded mt-4 active: translate-y-[1px] active:-translate-y-[1px]  hover:bg-gray-400 hover:cursor-pointer hover: transition 1s hover:opacity-90'
					onClick={editProduct}
				>
					Save
				</button>
			</div>
		</div>
	);
}

export default OneProduct;
