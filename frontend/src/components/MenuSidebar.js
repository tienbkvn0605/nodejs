import React from 'react';
import LeftListBar from './LeftListBar';

const MenuSidebar = ({handleRefreshData,showToast}) => {
return (
	<div className="flex flex-wrap">
	<div className="bg-white rounded p-3 shadow-lg">
		<div className="flex items-center space-x-4 p-2 mb-5">
		<img
			className="h-12 rounded-full"
			src="http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
			alt="James Bhatta"
		/>
		<div>
			<h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">
			James Bhatta
			</h4>
			<span className="text-sm tracking-wide flex items-center space-x-1">
			<svg
				className="h-4 text-green-500"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
				/>
			</svg>
			<span className="text-gray-600">Verified</span>
			</span>
		</div>
		</div>

		<LeftListBar handleRefreshData={handleRefreshData} showToast={showToast}></LeftListBar>
		
		<ul className="space-y-2 text-sm">
		{[
			{ name: 'Dashboard', path: '#', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
			{ name: 'Notifications', path: '#', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' },
			{ name: 'Personal messages', path: '#', icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z' },
			{ name: 'My profile', path: '#', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
			{ name: 'My orders', path: '#', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
			{ name: 'My wishlist', path: '#', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
			{ name: 'Settings', path: '#', icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' },
			{ name: 'Change password', path: '#', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
			{ name: 'Logout', path: '#', icon: 'M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' }
		].map(({ name, path, icon }) => (
			<li key={name}>
			<a
				href={path}
				className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
			>
				<span className="text-gray-600">
				<svg
					className="h-5"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d={icon}
					/>
				</svg>
				</span>
				<span>{name}</span>
			</a>
			</li>
		))}
		</ul>
	</div>

	{/* <div className="w-9/12">
		<div className="p-4 text-gray-500">Content here...</div>
	</div> */}
	</div>
);
};

export default MenuSidebar;
