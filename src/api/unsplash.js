import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID bTx9oeqo0ZA358Mae4GQo3dBk2lwDOAuAYqs-Ww9tlA',
	},
});
