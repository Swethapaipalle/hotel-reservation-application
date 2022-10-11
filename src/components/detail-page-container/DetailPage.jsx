import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { InputLabel, ListItemIcon, ListItemText, Select, TextField, MenuItem, Checkbox, Switch } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Tags from '../tags-container/Tags';
import { ReservationContext } from "../../useContext/context";
import { MenuProps, options } from './../../utils/utils';
import Button from "@mui/material/Button";

export default function DetailPage({ data, marginBotton, width, variant, handleClose, view }) {
	const [arrival, setArrival] = React.useState(dayjs(data?.stay?.arrivalDate));
	const [departure, setDeparture] = React.useState(dayjs(data?.stay?.departureDate));
	const [roomSize, setRoomSize] = React.useState(data?.room?.roomSize);
	const [roomQuantity, setRoomQuantity] = React.useState(data?.room?.roomQuantity);
	const [firstName, setFirstName] = React.useState(data?.firstName);
	const [lastName, setLastName] = React.useState(data?.lastName);
	const [email, setEmailName] = React.useState(data?.email);
	const [phone, setPhone] = React.useState(data?.phone);
	const [streetName, setStreetName] = React.useState(data?.addressStreet?.streetName);
	const [streetNumber, setStreetNumber] = React.useState(data?.addressStreet?.streetNumber);
	const [zip, setZip] = React.useState(data?.addressLocation?.zipCode);
	const [stateName, setStateName] = React.useState(data?.addressLocation?.state);
	const [city, setCity] = React.useState(data?.addressLocation?.city);
	const [state, dispatch] = useContext(ReservationContext);
	const [extras, setExtras] = React.useState(data?.extras);
	const [note, setNote] = React.useState(data?.note);
	const [reminder, setReminder] = React.useState(data?.reminder);
	const [newsletter, setNewsletter] = React.useState(data?.newsletter);
	const [confirm, setConfirm] = React.useState(data?.confirm);
	const [tags, setTags] = React.useState(data?.tags);
	const [formData, setFormData] = React.useState({});

	const isAllSelected =
		options?.length > 0 && extras?.length === options?.length;


	const handleSelect = (event) => {
		setRoomSize(event.target.value);
	};
	const arrivalHandleChange = (newValue) => {
		setArrival(newValue);
	};
	const departureHandleChange = (newValue) => {
		setDeparture(newValue);
	};
	const onChangeRoomQuantity = (e) => {
		setRoomQuantity(e.target.value)
	};

	const onChangeFirstName = (e) => {
		setFirstName(e.target.value)
	};

	const onChangeLastName = (e) => {
		setLastName(e.target.value)
	};

	const onChangeEmail = (e) => {
		setEmailName(e.target.value)
	};

	const onChangePhone = (e) => {
		setPhone(e.target.value)
	};

	const onChangeStreetName = (e) => {
		setStreetName(e.target.value)
	};

	const onChangeStreetNumber = (e) => {
		setStreetNumber(e.target.value)
	};

	const onChangeZip = (e) => {
		setZip(e.target.value)
	}

	const onChangeState = (e) => {
		setStateName(e.target.value)
	}

	const onChangeCity = (e) => {
		setCity(e.target.value)
	}

	const onChangeNote = (e) => {
		setNote(e.target.value)
	}

	const label1 = { inputProps: { 'aria-label': 'Send me a remainder' } };
	const label2 = { inputProps: { 'aria-label': 'Subscribe to newsletter' } };
	const label = { inputProps: { 'aria-label': 'Checkbox' } };

	const handleExtrasChange = (event) => {
		const value = event.target.value;
		if (value[value?.length - 1] === "all") {
			setExtras(extras?.length === options?.length ? [] : options);
			return;
		}
		setExtras(value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = {
			noResults: false,
			data: {
				"stay": {
					"arrivalDate": arrival,
					"departureDate": departure
				},
				"room": {
					"roomSize": roomSize,
					"roomQuantity": roomQuantity
				},
				"firstName": firstName,
				"lastName": lastName,
				"email": email,
				"phone": phone,
				"addressStreet": {
					"streetName": streetName,
					"streetNumber": streetNumber
				},
				"addressLocation": {
					"zipCode": zip,
					"state": stateName,
					"city": city
				},
				"extras": extras,
				"payment": "cc",
				"note": note,
				"tags": tags,
				"reminder": true,
				"newsletter": true,
				"confirm": false
			}
		};
		dispatch({
			type: "ADD_RESERVATION",
			payload: data
		});
		handleClose();

	}

	return (
		<form onSubmit={handleSubmit} >
			<Grid container>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<Grid item xs={2.5} md={2.5} lg={2.5} sx={{ marginBottom: marginBotton }}>
						<DesktopDatePicker
							label="Date of arrival"
							inputFormat="MM/DD/YYYY"
							value={arrival}
							onChange={arrivalHandleChange}
							sx={{ width: width, }}
							renderInput={(params) => <TextField variant={variant} {...params} />}
						/>
					</Grid>
					<Grid item xs={9} md={9} lg={9}>
						<DesktopDatePicker
							label="Date of departure"
							inputFormat="MM/DD/YYYY"
							value={departure}
							sx={{ width: width, }}
							onChange={departureHandleChange}
							renderInput={(params) => <TextField variant={variant}{...params} />}
						/>
					</Grid>
					<Grid item xs={2.5} md={2.5} lg={2.5}>
						<InputLabel id="demo-simple-select-label">Room Size</InputLabel>
						<Select
							id="demo-simple-select"
							defaultValue={roomSize || ''}
							label="Room Size"
							variant={variant}
							onChange={handleSelect}
							sx={{ width: width }}>
							<MenuItem
								value={"business-suite"}
							>
								Business-suite
							</MenuItem>
							<MenuItem
								value={"presidential-suite"}
							>
								Presidential-suite
							</MenuItem>
						</Select>
						<InputLabel id="demo-simple-select-label">Choose a room type</InputLabel>
					</Grid>
					<Grid item xs={8} md={8} lg={8}>
						<TextField type="number"
							label='Room quantity'
							aria-label="Search icons"
							aria-describedby="basic-addon2"
							variant="standard"
							defaultValue={roomQuantity}
							onChange={onChangeRoomQuantity}
							error={roomQuantity === "" || roomQuantity < 1 || roomQuantity > 4}
							helperText={!roomQuantity || roomQuantity < 0 || roomQuantity > 4 ? 'Maximum: 5' : ' '}
						/>
					</Grid>
					<Grid item xs={12} md={12} lg={12}>
						<TextField type="text"
							label='First Name'
							aria-label="Search icons"
							aria-describedby="basic-addon2"
							variant="standard"
							defaultValue={firstName}
							onChange={onChangeFirstName}
							error={firstName === "" || firstName?.length > 50}
							helperText={!firstName || firstName?.length > 50 ? 'Please enter your First Name' : ' '}
						/>
						<InputLabel id="demo-simple-select-label">{firstName?.length + '/50'}</InputLabel>
					</Grid>
					<Grid item xs={12} md={12} lg={12}>
						<TextField type="text"
							label='Last Name'
							aria-label="Search icons"
							aria-describedby="basic-addon2"
							variant={variant}
							defaultValue={lastName}
							onChange={onChangeLastName}
							error={lastName === "" || lastName?.length > 50}
							helperText={!lastName || lastName?.length > 50 ? 'Please enter your Last Name' : ' '}
						/>
						<InputLabel id="demo-simple-select-label">{lastName?.length + '/50'}</InputLabel>
					</Grid>
					<Grid item xs={12} md={12} lg={12}>
						<TextField type="text"
							label='Email'
							aria-label="Search icons"
							aria-describedby="basic-addon2"
							variant={variant}
							defaultValue={email}
							error={email === ""}
							helperText={email === "" ? 'Please enter Email' : ' '}
							onChange={onChangeEmail}
						/>
					</Grid>
					<Grid item xs={12} md={12} lg={12}>
						<TextField type="text"
							label='Phone Number'
							aria-label="Search icons"
							aria-describedby="basic-addon2"
							variant={variant}
							defaultValue={phone}
							onChange={onChangePhone}
							error={phone === "" || phone?.length > 10}
							helperText={!phone || phone?.length > 10 ? 'Please enter your Phone Number' : ' '}
						/>
						<InputLabel id="demo-simple-select-label">Add your country code first</InputLabel>
					</Grid>
					<Grid item xs={2} md={2} lg={2}>
						<TextField type="text"
							label='Street Name'
							aria-label="Search icons"
							aria-describedby="basic-addon2"
							variant={variant}
							defaultValue={streetName}
							onChange={onChangeStreetName}
							error={streetName === ""}
							helperText={!streetName ? 'Please enter your Street name' : ' '}
						/>
					</Grid>
					<Grid item xs={9} md={9} lg={9}>
						<TextField type="text"
							label='Street Number'
							aria-label="Search icons"
							aria-describedby="basic-addon2"
							variant={variant}
							defaultValue={streetNumber}
							onChange={onChangeStreetNumber}
							error={streetNumber === "" || streetNumber?.length > 10}
							helperText={!streetNumber || streetNumber?.length > 10 ? 'Please enter your Street number' : ' '}

						/>
					</Grid>
					<Grid item xs={2} md={2} lg={2}>
						<TextField type="text"
							label='Zip'
							aria-label="Search icons"
							aria-describedby="basic-addon2"
							variant={variant}
							defaultValue={zip}
							onChange={onChangeZip}
							error={zip === ""}
							helperText={!zip ? 'Please enter your Zip Code' : ' '}
						/>
					</Grid>
					<Grid item xs={2} md={2} lg={2}>
						<TextField type="text"
							label='State'
							aria-label="Search icons"
							aria-describedby="basic-addon2"
							variant={variant}
							defaultValue={stateName}
							onChange={onChangeState}
							error={stateName === ""}
							helperText={!stateName ? 'Please enter your State' : ' '}
						/>
						{/* <InputLabel id="demo-simple-select-label">AutoComplete</InputLabel> */}
					</Grid>
					<Grid item xs={2} md={2} lg={2}>
						<TextField type="text"
							label='City'
							aria-label="Search icons"
							aria-describedby="basic-addon2"
							variant={variant}
							defaultValue={city}
							onChange={onChangeCity}
							error={city === ""}
							helperText={!city ? 'Please enter your City' : ' '}
						/>
						{/* <InputLabel id="demo-simple-select-label">Maximum: 5</InputLabel> */}
					</Grid>
					<Grid item xs={12} md={12} lg={12}>
						<InputLabel id="demo-simple-select-label">Extras</InputLabel>
						<Select
							labelId="mutiple-select-label"
							multiple
							value={extras||[]}
							onChange={handleExtrasChange}
							renderValue={(selected) => selected.join(", ")}
							MenuProps={MenuProps}
						>
							<MenuItem
								value="all"
								classes={{
									root: isAllSelected ? {
										backgroundColor: "rgba(0, 0, 0, 0.08)",
										"&:hover": {
											backgroundColor: "rgba(0, 0, 0, 0.08)"
										}
									} : ""
								}}
							>
								<ListItemIcon>
									<Checkbox
										classes={{ indeterminate: { color: "#f50057" } }}
										checked={isAllSelected}
										indeterminate={
											extras?.length > 0 && extras?.length < options?.length
										}
									/>
								</ListItemIcon>
								<ListItemText
									classes={{ primary: { fontWeight: 500 } }}
									primary="Select All"
								/>
							</MenuItem>
							{options.map((option) => (
								<MenuItem key={option} value={option}>
									<ListItemIcon>
										<Checkbox checked={extras?.indexOf(option) > -1} />
									</ListItemIcon>
									<ListItemText primary={option} />
								</MenuItem>
							))}
						</Select>
					</Grid>
					<Grid item xs={6} md={6} lg={6}>
						<RadioGroup
							aria-labelledby="demo-radio-buttons-group-label"
							defaultValue="cc"
							name="radio-buttons-group"
							row
						>
							<FormControlLabel value="cc" control={<Radio />} label="Credit Card" />
							<FormControlLabel value="paypal" control={<Radio />} label="Paypal" />
							<FormControlLabel value="cash" control={<Radio />} label="Cash" />
							<FormControlLabel value="bitcoin" control={<Radio />} label="Bitcoin" />
						</RadioGroup>
					</Grid>
					<Grid item xs={12} md={12} lg={12}>
						<InputLabel id="demo-simple-select-label">Personal Note</InputLabel>
						<TextField type="text"
							label='idm lab test'
							aria-label="Search icons"
							aria-describedby="basic-addon2"
							variant={variant}
							defaultValue={note}
							onChange={onChangeNote}
							error={note === ""}
							helperText={!note ? 'Please enter your Idm Lab test' : ' '}
						/>
					</Grid>
					<Grid item xs={12} md={12} lg={12}>
						<InputLabel id="demo-simple-select-label">Tags</InputLabel>
						<Tags data={tags} />
					</Grid>
					<Grid item xs={12} md={12} lg={12}>
						<Switch color="secondary" {...label1} checked={reminder} />
						<span>Send me a remainder</span>
					</Grid>
					<Grid item xs={12} md={12} lg={12}>
						<Switch color="secondary" {...label2} checked={newsletter} />
						<span>Subscribe to newsletter</span>
					</Grid>
					<Grid item xs={12} md={12} lg={12}>
						<Checkbox {...label} checked={confirm} />
						<span>I confirm the information given above</span>
					</Grid>
				</LocalizationProvider>
				<Grid item>
					<Button onClick={handleClose}>Cancel</Button>
					{!view && <Button type="submit">Save</Button>}
				</Grid>
			</Grid>
		</form>
	);
}


DetailPage.propTypes = {
	width: PropTypes.string,
	display: PropTypes.string,
	justifyContent: PropTypes.string,
	marginBottom: PropTypes.string,
	variant: PropTypes.string
};

DetailPage.defaultProps = {
	width: '170px',
	display: 'flex',
	justifyContent: 'center',
	marginBottom: '5',
	variant: "standard"
};
