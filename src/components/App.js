import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

let userTerm = '',
	currentPageNumber = 1;

class App extends React.Component {
	state = { images: [] };
	onSearchSubmit = async (term, pageNumber) => {
		try {
			userTerm = term;
			currentPageNumber = pageNumber;
			const response = await unsplash.get('/search/photos', {
				params: {
					query: userTerm,
					per_page: 20,
					page: pageNumber,
				},
			});
			// console.log(this);
			this.setState({ images: response.data.results });
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		// console.log(++count);
		return (
			<div
				className='ui container'
				style={{ marginTop: '1rem', textAlign: 'center' }}
			>
				<SearchBar
					// onSubmitRequest={(e, pageNumber) => {
					// 	this.onSearchSubmit(e, pageNumber);
					// }}

					// onSubmitRequest={function (e, pageNumber) {
					// 	console.log(this);
					// 	// this.onSearchSubmit(e, pageNumber);
					// }}

					onSubmitRequest={this.onSearchSubmit}
					// guessWhoIAm='I am the props object'
				/>
				<ImageList images={this.state.images} />
				<button
					onClick={() => {
						if (userTerm) {
							currentPageNumber++;
							this.onSearchSubmit(userTerm, currentPageNumber);
							window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
						}
					}}
					className='btn'
				>
					Next Page
				</button>
			</div>
		);
	}
}

export default App;
