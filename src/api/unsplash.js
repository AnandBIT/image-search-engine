import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	// timeout: 100,
	headers: {
		Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
	},
});
