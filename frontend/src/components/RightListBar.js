import React, { useState } from 'react'
import DefaultButton from './DefaultButton'
import Coming from './Comming';
import ComfirmAlert from './Comfirm';

const RightListBarComponent = ({items,onClose,handleRefreshData,showToast}) => {

	const [isComing,setIsComing] = useState(false);
	const [comFrim,setComFrim] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

	const toggleModal = () => {
		setIsComing(prevState => !prevState);
	};

	const toggleModalComfirm = (id) => {
		setComFrim(false);
	};

	const showComfirmModal = (id) => {
		setSelectedId(id);
		setComFrim(true);
		console.log({comFrim});
	};

	// Ensure items is defined and not empty
	if (!items || items.length === 0) {
		return <div className='text-center'>No items available</div>;
	}
return (
	<>
	<div className='grid grid-cols-4 gap-6 w-full ml-14'>
		{items.map((item, index) =>
		// item
		<div key={item.id} className='w-[270px] rounded-lg bg-gradient-to-r from-violet-200 to-pink-200 p-2 flex flex-col text-center flex-wrap justify-center'>
		{/* <span key={item.id}></span> */}
		<p className='text-center'>{item.name}</p>
		<div>
			<div className='img-div'>
			<img className='img-full' src={"https://picsum.photos/800?id="+item.id}></img>
			{/* <p>{item.released_year}</p> */}
			</div>
		</div>
		<div>Released year : {item.released_year}</div>
		{/* cart */}
			<div className='flex justify-center p-1'>
				<input className='w-10 rounded-lg h-9 mr-2 text-center' maxLength={3} size="3" required></input>
				<DefaultButton onClick={toggleModal} name = {'カートに入れ'}/>
				<DefaultButton id={item.id} onClick={() => showComfirmModal(item.id)} name = {'削除'} type={'delete'}/>
			</div>
		</div>
		)}
	</div>
	{comFrim && <ComfirmAlert showToast={showToast} handleRefreshData={handleRefreshData} onClose={toggleModalComfirm} id={selectedId}></ComfirmAlert>}
	{isComing && <Coming onClose={toggleModal}/>}
	</>

)
}

export default RightListBarComponent