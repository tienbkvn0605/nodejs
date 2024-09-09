import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DefaultButton from './DefaultButton';
import Modal from './Modal';
import { API_KEY, API_URL, ENV } from '../config';
import Coming from './Comming';

const LeftListBar = ({handleRefreshData,showToast}) => {
	const [info, setInfo] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isComing, setIsComing] = useState(false);

	useEffect(() => {
		axios.get(`${API_URL}id=1`)
			.then(res => {
				const infoData = res.data;
				setInfo(infoData);
			})
			.catch(error => console.log(error));
	}, []); // Empty dependency array means this runs only once after the component mounts

	const toggleModal = () => {
		setIsComing(prevState => !prevState);
	};

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

    const showComing = () => {
        setIsComing(true);
    };

	return (
		<>
			<div>
				<DefaultButton name={'登録する'} onClick={handleOpenModal} />
				<DefaultButton name={'修正する'} onClick={showComing}/>
				<ul>
					{info.map((item, index) => (
						<div key={item.id}>
							<li>{item.designation}</li>
						</div>
					))}
				</ul>
				{isModalOpen && <Modal title={'申込み'} onClose={handleCloseModal} handleRefreshData={handleRefreshData} showToast={showToast} closeName={'閉じる'} submitName={'登録する'}/>}
				{isComing && <Coming  onClose={toggleModal} ></Coming>}
			</div>
		</>
	);
};

export default LeftListBar;
