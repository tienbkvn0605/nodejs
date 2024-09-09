import axios from 'axios';
import { API_KEY, API_URL, ENV } from '../config';

export	
	async function Getitem () {

		let resData = axios.get(`${API_URL}`)
		.then(response => {
			resData = response.data;
			return response.data;
		})
		.catch(function (error) {
			console.log(error);
		})
		
		return resData;
	}