import React from 'react';
import loader from '../giphy.gif';
import { FiExternalLink } from 'react-icons/fi';

class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { spans: 0 };
		this.imageRef = React.createRef();
	}

	setImgSrc = () => {
		const {
			urls: { thumb },
			alt_description,
		} = this.props.image;

		this.imageRef.current.src = thumb;
		this.imageRef.current.alt = alt_description;
	};

	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		// console.log(height);

		// Adding 2 so that there is 2*4 = 8px more space to behave as margin-bottom
		// 4 is used here as according to each row size specified in css
		const spans = Math.ceil(height / 4) + 2;
		this.setState({ spans });
	};

	componentDidMount() {
		// console.log(this.imageRef);
		// console.log(this.imageRef.current);

		this.imageRef.current.addEventListener('load', this.setImgSrc, {
			once: true,
		});
		this.imageRef.current.addEventListener('load', this.setSpans);
	}

	componentWillUnmount() {
		this.imageRef.current.removeEventListener('load', this.setImgSrc);
		this.imageRef.current.removeEventListener('load', this.setSpans);
	}

	render() {
		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }} className='image__card'>
				<img ref={this.imageRef} src={loader} alt='loading' />
				<a
					href={this.props.image.links.download}
					target='_blank'
					rel='noreferrer noopener'
					className='image__card-description'
				>
					<FiExternalLink
						color='#fff'
						className='image__card-dldIcon'
						title='See original image'
					/>
				</a>
			</div>
		);
	}
}

export default ImageCard;
