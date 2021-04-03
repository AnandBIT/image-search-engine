import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
	console.log(images);
	return (
		<div className='image-list'>
			{/* We should assign an unique key property to the root tag we are returning inside the map statement */}
			{images.map((image) => {
				return <ImageCard image={image} key={image.id} />;
			})}
		</div>
	);
};

export default ImageList;
