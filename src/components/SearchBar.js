import React from 'react';

class SearchBar extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		term: '',
	// 	};
	// }

	state = {
		term: '',
	};

	// onFormSubmit(e) {
	// 	e.preventDefault();
	// 	this.props.onSubmitRequest(this.state.term, 1);
	// 	console.log(this);
	// 	// console.log(this.state.term);
	// }

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmitRequest(this.state.term, 1);
		// console.log(this);
		// console.log(this.state.term);
	};

	render() {
		return (
			<div className='ui segment'>
				<form
					className='ui form'
					onSubmit={this.onFormSubmit}

					// onSubmit={(event) => {
					// 	this.onFormSubmit(event);
					// }}

					// onSubmit={function (e) {
					// 	e.preventDefault();
					// 	console.log(this);
					// }}
				>
					<div className='field'>
						<label htmlFor='searchBox'>Image Search</label>
						<input
							type='text'
							value={this.state.term}
							id='searchBox'
							onChange={(e) => {
								// console.log(this);
								this.setState({
									term: e.target.value,
								});
							}}
							autoComplete='off'
							required
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
