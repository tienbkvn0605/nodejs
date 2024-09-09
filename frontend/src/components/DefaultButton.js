import React from 'react';

const DefaultButton = ({name, onClick, type, id}) => {
	if (type === 'delete') {
		return (
		<>
			<button data-id={id} onClick={onClick} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
			<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 80 80">
			<path fill="#f78f8f" d="M40 49.007L15.714 73.293 6.707 64.286 30.993 40 6.707 15.714 15.714 6.707 40 30.993 64.286 6.707 73.293 15.714 49.007 40 73.293 64.286 64.286 73.293z"></path><path fill="#c74343" d="M15.714,7.414l23.578,23.578L40,31.7l0.707-0.707L64.286,7.414l8.3,8.3L49.007,39.293L48.3,40 l0.707,0.707l23.578,23.579l-8.3,8.3L40.707,49.007L40,48.3l-0.707,0.707L15.714,72.586l-8.3-8.3l23.579-23.579L31.7,40 l-0.707-0.707L7.414,15.714L15.714,7.414 M64.286,6L40,30.286L15.714,6L6,15.714L30.286,40L6,64.286L15.714,74L40,49.714L64.286,74 L74,64.286L49.714,40L74,15.714L64.286,6L64.286,6z"></path>
			</svg>
			</button>
		</>
		);
	}

	return (
		<>
			<button data-id={id} onClick={onClick} type="button" className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{name}</button>
		</>
	);
}

export default DefaultButton;
