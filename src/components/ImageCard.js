import React from 'react';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { spans: 0 };
		this.imageRef = React.createRef();
	}

	componentDidMount() {
		// console.log(this.imageRef);
		// console.log(this.imageRef.current);
		this.imageRef.current.addEventListener('load', this.setSpans);
	}

	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height / 5);
		this.setState({ spans: spans });
	};

	render() {
		const {
			urls: { small },
			alt_description,
		} = this.props.image;
		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img ref={this.imageRef} src={small} alt={alt_description} />
			</div>
		);
	}
}

export default ImageCard;
