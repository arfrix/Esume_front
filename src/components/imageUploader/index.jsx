import "./sass/index.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import Compressor from "compressorjs";
import PersonIcon from "@material-ui/icons/Person";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";

export default function ImageUploader({
	width,
	height,
	rounded,
	onUpload,
	userIcon,
}) {
	const [image, setImage] = useState(null);
	const [previewImage, setPreviewImage] = useState(null);
	const size = { width: `${width}px`, height: `${height}px` };

    const returnImage = image => onUpload(image)

	const camera = (e) => {
		let previousImageSize = `${(e.target.files[0].size / 1048576).toFixed(2)} MB`;
		new Compressor(e.target.files[0], {
			quality: 0.6,
			success(result) {
				setImage(result);
				setPreviewImage(URL.createObjectURL(result));
				let imageSize = `${(result.size / 1048576).toFixed(2)} MB`;
				console.log(`Image Size: ${previousImageSize} => ${imageSize}`);
                if(onUpload){
                    returnImage(result)
                }
			},
			error(err) {
				console.log("Compressor Error : ", err.message);
			},
		});
	};

	const cleanSelectedImage = () => {
		setImage(null);
		setPreviewImage(null);
        if(onUpload){
            returnImage(null)
        }
	};

	return (
		<div className="image-uploader" style={size}>
			{previewImage ? (
				<img
					style={rounded ? { borderRadius: "100px" } : {}}
					className="image-uploader__preview"
					alt="Your File Is Ready :)"
					src={previewImage}
				/>
			) : null}

			{!image ? (
				<div
					style={rounded ? { borderRadius: "100px" } : {}}
					className="image-uploader__upload-btn"
				>
					{userIcon ? (
						<PersonIcon
							fontSize="large"
							className="image-uploader__upload-btn--icon"
						/>
					) : (
						<PhotoSizeSelectActualIcon
							fontSize="large"
							className="image-uploader__upload-btn--icon"
						/>
					)}
					<input
						className="image-uploader__upload-btn--input"
						onChange={camera}
						accept="image/*"
						type="file"
					/>
				</div>
			) : (
				<button
					className={`image-uploader__clean-btn ${
						!rounded ? "is-not-rounded" : ""
					}`}
					onClick={cleanSelectedImage}
				>
					<DeleteOutlineIcon
						fontSize="large"
						className="image-uploader__clean-btn--icon"
					/>
				</button>
			)}
		</div>
	);
}
ImageUploader.prototype = {
	rounded: PropTypes.bool,
	userIcon: PropTypes.bool,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	onUpload: PropTypes.func.isRequired,
};
