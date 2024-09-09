import React, { useState , useRef } from "react";
import { API_KEY, API_URL, ENV } from '../config';
import Alert from "./Alert";

export default function Modal({ title, onClose ,handleRefreshData,showToast, closeName, submitName}) {

	const [alert, setAlert] = useState(null);
    const [error, setError] = useState('');

	const [formData, setFormData] = useState({
		name: '',
		released_year: '',
		email: '',
		phone: '',
		organization: '',
		designation: ''
	});

	const handleChange = (e) => {
		const { id, value } = e.target;
		if (id == "released_year") {
			if ( !(/^\d*$/.test(value)) || !value) {
				setError('Please enter numbers only');
			} else {
				setError('');
			}
		}
		setFormData({ ...formData, [id]: value });
	};
	
	const isSubmitDisabled = error !== '' || formData.name === '' || formData.released_year === '';

	const handleSaveChanges = async (e) => {

		const data = {
			name: formData.name,
			released_year: formData.released_year,
			email: formData.email,
			phone: formData.phone,
			organization: formData.organization,
			designation: formData.designation,
		};

		try {
			const response = await fetch(`${API_URL}createnew`, {
				method: 'POST',
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
	
			if (!response.ok) {
				throw new Error('Network response was not ok');
			} else {

				const result = await response.json();
				if (result.code === 'ER_DUP_ENTRY') {
					// onClose();
					// showToast("登録失敗しました。Nameは存在しています。",'warning');
					setAlert('show');
				} else {

					console.log(result);
					onClose();
					handleRefreshData();
					showToast("新しい登録しました。",'success');
				}

            }
	
		} catch (error) {
			console.error('Error:', error);
		}
	}
return (
	<>
	<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
		<div className="relative w-auto my-6 mx-auto max-w-3xl">
		{/* content */}
		<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
			{/* header */}
			<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
			<h3 className="text-3xl font-semibold">{title || 'hello'}</h3>				
			<button
				className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
				onClick={onClose}
			>
				<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
				×
				</span>
			</button>
			</div>
			{alert && <div className="mx-3"><Alert mess={'Nameが存在しています！'}></Alert></div>}
			{/* body */}
			<div className="relative p-6 flex-auto">
			<form>
			<div className="grid gap-6 mb-6 md:grid-cols-2">
				<div>
					<label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
					<input onBlur={handleChange} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="React" required />
				</div>
				<div>
					<label htmlFor="released_year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Released year</label>
					<input onBlur={handleChange} type="text" id="released_year" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1996" required />
					{error && <p style={{ color: 'red' }}>{error}</p>}
				</div>
				{/* <div>
					<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
					<input onBlur={handleChange} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="sample@gmail.com" required />
				</div>
				<div>
					<label htmlFor="Phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
					<input onBlur={handleChange} type="text" id="Phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0123456" required />
				</div>
				<div>
					<label htmlFor="organization" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organization</label>
					<input onBlur={handleChange} type="text" id="organization" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="BR Softech Pvt Ltd" required />
				</div>
				<div>
					<label htmlFor="designation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Designation</label>
					<input onBlur={handleChange} type="text" id="designation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="React" required />
				</div>
			</div>
			<div className="grid gap-6 mb-6 md:grid-cols-2">
				<div>
					<label htmlFor="start_time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start time</label>
					<input type="text" id="start_time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2024-10-10" required />
				</div>
				<div>
					<label htmlFor="end_time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End time</label>
					<input type="text" id="end_time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2024-12-10" required />
				</div> */}
			</div>
			</form>
			</div>
			{/* footer */}
			<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
			<button
				className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
				type="button"
				onClick={onClose}
			>
				{closeName || 'Close'}
			</button>
			<button disabled={isSubmitDisabled}
				className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
				type="button"
				onClick={handleSaveChanges}
			>
				{submitName || 'Save Changes'}
			</button>
			</div>
		</div>
		</div>
	</div>
	<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
	</>
);
}
