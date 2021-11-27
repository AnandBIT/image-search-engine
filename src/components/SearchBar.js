import React, { Fragment } from 'react';

class SearchBar extends React.Component {
	state = {
		term: '',
	};

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmitRequest(this.state.term, 1);
	};

	render() {
		return (
			<Fragment>
				<form className='ui form' onSubmit={this.onFormSubmit}>
					<input
						type='text'
						value={this.state.term}
						id='searchBox'
						onChange={(e) => {
							this.setState({
								term: e.target.value,
							});
						}}
						autoComplete='off'
						placeholder='Image Search'
						required
					/>
					<button type='submit' className='btn btn-submit'>
						Search
					</button>
				</form>
			</Fragment>
		);
	}
}

export default SearchBar;
