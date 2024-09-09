import { useState, useEffect } from 'react';
import { Getitem } from '../api/Getitem';

const useFetchData = () => {
	const [items, setItems] = useState([]);

	const fetchData = async () => {
		try {
			let allItemData = await Getitem();
			setItems(allItemData);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return { items, fetchData };
};

export default useFetchData;
