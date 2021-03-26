import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
	state = { images: [] };
	async onSearchSubmit(term) {
		try {
			const response = await axios.get(
				'https://api.unsplash.com/search/photos',
				{
					params: {
						query: term,
					},
					headers: {
						Authorization:
							'Client-ID bTx9oeqo0ZA358Mae4GQo3dBk2lwDOAuAYqs-Ww9tlA',
					},
				}
			);
			console.log(this);
			this.setState({ images: response.data.results });
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		return (
			<div className='ui container' style={{ marginTop: '1rem' }}>
				<SearchBar onSubmitRequest={(e) => this.onSearchSubmit(e)} />
				Found {this.state.images.length} images!
			</div>
		);
	}
}

export default App;
