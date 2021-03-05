import "./index.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import Text from "../common/text/Text";
import { Button, TextField } from "@material-ui/core";

export default function ListItem({ width, hasDatePicker }) {
	const size = { width: `${width}px` };
	const [title, setTitle] = useState("");
	const [items, setItems] = useState([]);
	const [description, setDescription] = useState("");
	const [titleError, setTitleError] = useState(false);
	const [titleErrorMessage, setTitleErrorMessage] = useState("");
	const [descriptionError, setDescriptionError] = useState(false);
	const [descriptionErrorMessage, setDescriptionErrorMessage] = useState("");

	const addItem = () => {
		// validate
		if (!title) {
			setTitleError(true);
			setTitleErrorMessage("لطفا مقدار عنوان را تکمیل کنید.");
			return;
		}
		if (!description) {
			setDescriptionError(true);
			setDescriptionErrorMessage("لطفا مقدار توضیحات را تکمیل کنید.");
			return;
		}
		// add item
		setItems([...items, { title, description }]);
		// clear form
		setTitle("");
		setDescription("");
	};

	const changeTitle = (e) => {
		let value = e.target.value;
		setTitleError(false);
		if (value.length > 50) {
			setTitleError(true);
			setTitleErrorMessage("تعداد حروف عنوان باید کمتر از 50 حرف باشد");
			return;
		}
		setTitle(value);
	};

	const changeDescription = (e) => {
		let value = e.target.value;
		setDescriptionError(false);
		if (value.length > 200) {
			setDescriptionError(true);
			setDescriptionErrorMessage(
				"تعداد حروف توضیحات باید کمتر از 200 حرف باشد"
			);
			return;
		}
		setDescription(e.target.value);
	};

	return (
		<div className="list-item" style={width ? size : {}}>
			<div className="list-item__form">
				<TextField
					size="small"
					label="عنوان"
					value={title}
					variant="outlined"
					error={titleError}
					onChange={changeTitle}
					className="list-item__form--title"
					helperText={titleError ? titleErrorMessage : null}
				/>
				<TextField
					rows={6}
					multiline
					size="small"
					label="توضیحات"
					variant="outlined"
					value={description}
					error={descriptionError}
					onChange={changeDescription}
					className="list-item__form--text"
					helperText={
						descriptionError ? descriptionErrorMessage : null
					}
				/>



				<Button onClick={addItem} variant="contained" color="primary">
					افزودن
				</Button>
			</div>

			<ul className="list-item__list">
				{items.map((item, index) => (
					<li key={index}>
						<Text size="large">{item.title}</Text>
						<Text size="small">{item.description}</Text>
					</li>
				))}
			</ul>
		</div>
	);
}
ListItem.prototype = {
	width: PropTypes.number,
	hasDatePicker: PropTypes.bool
};
