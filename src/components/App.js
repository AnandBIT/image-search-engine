import React, { Fragment } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

let userTerm = '',
	currentPageNumber = 1;

class App extends React.Component {
	state = {
		images: [],
		isNextBtnVisible: false,
		isContentReady: {
			status: false,
			content: null,
		},
	};
	onSearchSubmit = async (term, pageNumber) => {
		try {
			// Resetting state and showing a loader, each time a new search call is made
			this.setState({
				images: [],
				isNextBtnVisible: false,
				isContentReady: {
					status: false,
					content: <div id='loader'></div>,
				},
			});
			userTerm = term;
			currentPageNumber = pageNumber;
			const response = await unsplash.get('/search/photos', {
				params: {
					query: userTerm,
					per_page: 20,
					page: pageNumber,
				},
			});
			this.setState({
				images: response.data.results,
				isNextBtnVisible: response.data.results.length === 0 ? false : true,
				isContentReady: {
					status: true,
					content: null,
				},
			});
		} catch (err) {
			console.error(err.response);
			this.setState({
				isContentReady: {
					status: false,
					content: (
						<Fragment>
							<h2 style={{ color: 'red', margin: '.5rem 0' }}>
								Server can't be reached!
							</h2>
							<p style={{ color: 'red', fontSize: '1.3rem' }}>
								Please check your Internet Connection
							</p>
						</Fragment>
					),
				},
			});
		}
	};

	renderedContent() {
		// if there is no content to show, show a loader or nothing depending upon search request
		if (!this.state.isContentReady.status) {
			return this.state.isContentReady.content;
		}
		return (
			<Fragment>
				<ImageList images={this.state.images} />
				{this.state.isNextBtnVisible && (
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
				)}
			</Fragment>
		);
	}

	render() {
		return (
			<div className='container' style={{ marginTop: '1rem', textAlign: 'center' }}>
				<SearchBar onSubmitRequest={this.onSearchSubmit} />
				{this.renderedContent()}
			</div>
		);
	}
}

export default App;
