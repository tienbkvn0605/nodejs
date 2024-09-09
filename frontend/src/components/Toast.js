// src/components/Toast.js
import React from 'react';
import { useState, useEffect } from 'react';

const Toast = ({ message, type, onClose }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			if (onClose) {
				onClose();
			}
		}, 3000); // Toast will auto-close after 3 seconds

		return () => clearTimeout(timer); // Cleanup timer on component unmount
	}, [onClose]);

	return (
		<div
			className={`fixed bottom-5 right-5 p-4 rounded-md shadow-lg text-white ${type === 'success' ? 'bg-green-700' : 'bg-red-500'}`}
			role="alert"
		>
			{message}
			<button
				className="ml-4 text-white font-bold"
				onClick={onClose}
			>
				&times;
			</button>
		</div>
	);
};

export default Toast;
