import "./index.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import Text from "../common/text/Text";
import CloseIcon from "@material-ui/icons/Close";
import DateRange from "@material-ui/icons/DateRange";
import {
	Button,
	TextField,
	Checkbox,
	Snackbar,
	IconButton,
} from "@material-ui/core";

export default function ListItem({ width, hasDatePicker, limit }) {
	const size = { width: `${width}px` };
	const [title, setTitle] = useState("");
	const [items, setItems] = useState([]);
	const [endDate, setEndDate] = useState("");
	const [startDate, setStartDate] = useState("");
	const [showToast, setShowToast] = useState(false);
	const [description, setDescription] = useState("");
	const [hasEndDate, setHasEndDate] = useState(true);
	const [titleError, setTitleError] = useState(false);
	const [endDateError, setEndDateError] = useState(false);
	const [startDateError, setStartDateError] = useState(false);
	const [titleErrorMessage, setTitleErrorMessage] = useState("");
	const [descriptionError, setDescriptionError] = useState(false);
	const [descriptionErrorMessage, setDescriptionErrorMessage] = useState("");

	const addItem = () => {
		// validate
		if (!title) {
			setTitleError(true);
			setTitleErrorMessage("لطفا مقدار عنوان را تکمیل کنید.");
			return;
		} else if (!description) {
			setDescriptionError(true);
			setDescriptionErrorMessage("لطفا مقدار توضیحات را تکمیل کنید.");
			return;
		} else if (hasDatePicker && !startDate) {
			setStartDateError(true);
			return;
		} else if (hasDatePicker && hasEndDate && !endDate) {
			setEndDateError(true);
			return;
		} else if (limit && items.length >= limit) {
			setShowToast(true);
			return;
		}
		// add item
		setItems([...items, { title, description, startDate, endDate }]);
		// clear form
		setTitle("");
		setEndDate("");
		setStartDate("");
		setDescription("");
		setHasEndDate(true);
		setEndDateError(false);
		setStartDateError(false);
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

	const submitStartDate = (e) => {
		setStartDateError(false);
		setStartDate(e.target.value);
	};

	const submitEndDate = (e) => {
		setEndDateError(false);
		if (!hasEndDate) return;
		setEndDate(e.target.value);
	};

	const changeCheckBox = () => {
		setHasEndDate(!hasEndDate);
	};

	return (
		<div className="list-item" style={width ? size : {}}>
			<Snackbar
				open={showToast}
				autoHideDuration={6000}
				onClose={() => setShowToast(false)}
				message={`شما حداکثر قادر به افزودن ${limit} آیتم هستید.`}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				action={
					<IconButton
						size="small"
						color="inherit"
						aria-label="close"
						onClick={() => setShowToast(false)}
					>
						<CloseIcon fontSize="small" />
					</IconButton>
				}
			/>

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

				{hasDatePicker ? (
					<div className="list-item__form--date">
						<TextField
							type="date"
							value={startDate}
							label="تاریخ شروع"
							InputLabelProps={{
								shrink: true,
							}}
							error={startDateError}
							onChange={submitStartDate}
							helperText={
								startDateError
									? "لطفا تاریخ شروع را انتخاب کنید."
									: null
							}
						/>
						{hasEndDate ? (
							<TextField
								type="date"
								value={endDate}
								label="تاریخ پایان"
								error={endDateError}
								InputLabelProps={{
									shrink: true,
								}}
								onChange={submitEndDate}
								helperText={
									endDateError
										? "لطفا تاریخ پایان را انتخاب کنید."
										: null
								}
							/>
						) : null}
					</div>
				) : null}

				{hasDatePicker ? (
					<label className="list-item__form--checkbox">
						<Checkbox
							checked={!hasEndDate}
							onChange={changeCheckBox}
						/>
						هم اکنون فعال هستم.
					</label>
				) : null}

				<Button onClick={addItem} variant="contained" color="primary">
					افزودن
				</Button>
			</div>

			<br />

			<ul className="list-item__list">
				{items.map((item, index) => (
					<li key={index}>
						<Text className="list-item__list--title" size="large">
							{item.title}
						</Text>
						<Text
							className="list-item__list--description"
							size="medium"
						>
							{item.description}
						</Text>
						{hasDatePicker ? (
							<div className="list-item__list--date">
								<DateRange />
								<span>از</span>
								<div>{item.startDate}</div>
								<span>تا</span>
								<div>
									{item.endDate ? item.endDate : "کنون"}
								</div>
							</div>
						) : null}
					</li>
				))}
			</ul>
		</div>
	);
}
ListItem.prototype = {
	width: PropTypes.number,
	limit: PropTypes.number,
	hasDatePicker: PropTypes.bool,
};
