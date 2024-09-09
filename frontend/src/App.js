import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import './toastStyles.css';
import 'primereact/resources/themes/saga-blue/theme.css';  // Theme
import 'primereact/resources/primereact.min.css';            // Core CSS
import 'primeicons/primeicons.css'; 

import RightListBarComponent from './components/RightListBar';
import Header from './components/Header';
import MenuSidebar from './components/MenuSidebar';
import { Getitem } from './api/Getitem';
import useFetchData from './components/useFetchData';
import { Toast } from 'primereact/toast';

const App = () => {
	const { items, fetchData, loading, error  } = useFetchData();
	const [toast, setToast] = useState(null);

	const toastRef = useRef(null);

    const showToast = (message, type) => {
        toastRef.current.show({ 
            severity: type,
            summary: message,
            life: 3000 // Duration in milliseconds
        });
    };

    const hideToast = () => {
        setToast(null);
    };

	const handleRefreshData = async () => {
		try {
			await fetchData(); // Ensure fetchData is properly refreshing data
		} catch (error) {
			console.error('Error refreshing data:', error);
		}
	};

	return (
		<div className="App wrapper pt-5 pb-10 bg-gray-100 px">
			{/* <NavBar/> */}
			<div className='mb-5'>
				<Header />
			</div>
			{/* <Toptitle /> */}
			<div className='flex justify-between'>
				<MenuSidebar handleRefreshData={handleRefreshData} showToast={showToast}/>
				{/* company info */}
				{/* <LeftListBar /> */}
				<RightListBarComponent items={items} handleRefreshData={handleRefreshData} showToast={showToast}/>
			</div>
			<Toast ref={toastRef} />
		</div>
	);
};

export default App;
