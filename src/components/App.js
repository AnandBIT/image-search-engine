import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

let count = 0,
	userTerm,
	nextPage = 1;

class App extends React.Component {
	state = { images: [] };
	async onSearchSubmit(term, n) {
		try {
			userTerm = term;
			nextPage = n;
			const response = await unsplash.get('/search/photos', {
				params: {
					query: userTerm,
					per_page: 30,
					page: nextPage,
				},
			});
			// console.log(this);
			this.setState({ images: response.data.results });
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		console.log(++count);
		return (
			<div className='ui container' style={{ marginTop: '1rem', textAlign: 'center' }}>
				<SearchBar onSubmitRequest={(e, n) => this.onSearchSubmit(e, n)} />
				<ImageList images={this.state.images} />
				<button
					onClick={() => {
						nextPage++;
						this.onSearchSubmit(userTerm, nextPage);
					}}
					style={{
						margin: '1rem',
						padding: '1rem 2rem',
						fontSize: '1.5rem',
						borderRadius: '5px',
						outline: 'none',
						cursor: 'pointer',
					}}
				>
					Next Page
				</button>
			</div>
		);
	}
}

export default App;
