import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
	state = { images: [] };
	async onSearchSubmit(term) {
		try {
			const response = await unsplash.get('/search/photos', {
				params: {
					query: term,
				},
			});
			// console.log(this);
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
