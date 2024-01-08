'use client';

import { useRef, useState } from 'react';
import classes from './ImagePicker.module.css';
import Image from 'next/image';

const ImagePicker = ({ label, name }) => {
	const [image, setImage] = useState(null);

	const inputRef = useRef();

	const handlePickClick = () => {
		inputRef.current.click();
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (!file) {
			setImage(null);
			return;
		}

		const fileReader = new FileReader();

		fileReader.onload = () => {
			setImage(fileReader.result);
		};

		fileReader.readAsDataURL(file);
	};

	return (
		<div className={classes.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={classes.controls}>
				<div className={classes.preview}>
					{!image && <p>No image selected</p>}
					{image && <Image src={image} alt="image picked by a user" fill />}
				</div>
				<input
					type="file"
					accept="image/png, image/jpeg, image/jpg"
					name={name}
					className={classes.input}
					ref={inputRef}
					onChange={handleImageChange}
					required
				/>
				<button
					className={classes.button}
					type="button"
					onClick={handlePickClick}
				>
					Pick an Image{' '}
				</button>
			</div>
		</div>
	);
};

export default ImagePicker;
