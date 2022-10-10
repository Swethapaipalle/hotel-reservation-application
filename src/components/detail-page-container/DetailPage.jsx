import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { InputLabel, Select, TextField, MenuItem, Checkbox, Switch } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Tags from '../tags-container/Tags';
import { ReservationContext } from "../../useContext/context";

export default function DetailPage({ data, marginBotton, width, variant }) {
  console.log("data", data)
  const [arrival, setArrival] = React.useState(dayjs(data.stay.arrivalDate));
  const [departure, setDeparture] = React.useState(dayjs(data.stay.departureDate));
  const [roomSize, setRoomSize] = React.useState(data.room.roomSize);
  const [state, dispatch] = useContext(ReservationContext);
  const { reservations, noResults } = state
  console.log("reservations", reservations)
  const handleSelect = (event) => {
    setRoomSize(event.target.value);
  };
  const arrivalHandleChange = (newValue) => {
    setArrival(newValue);
  };
  const departureHandleChange = (newValue) => {
    setDeparture(newValue);
  };
  const label1 = { inputProps: { 'aria-label': 'Send me a remainder' } };
  const label2 = { inputProps: { 'aria-label': 'Subscribe to newsletter' } };
  const label = { inputProps: { 'aria-label': 'Checkbox' } };
  return (
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
            value={roomSize}
            label="Room Size"
            variant={variant}
            onChange={handleSelect}
            sx={{ width: width }}>
            <MenuItem
              value={"business-suite"}
            >
              Business-suite
            </MenuItem> <MenuItem
              value={"Studio"}
            >
              Studio
            </MenuItem>
          </Select>
          <InputLabel id="demo-simple-select-label">Choose a room type</InputLabel>
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <TextField type="text"
            fullwidth
            label='Room quantity'
            aria-label="Search icons"
            aria-describedby="basic-addon2"
            variant="standard"
          // onChange={onChange}
          />
          <InputLabel id="demo-simple-select-label">Maximum: 5</InputLabel>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TextField type="text"
            fullwidth
            label='First Name'
            aria-label="Search icons"
            aria-describedby="basic-addon2"
            variant="standard"
          // onChange={onChange}
          />
          <InputLabel id="demo-simple-select-label">2/5</InputLabel>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TextField type="text"
            fullwidth
            label='Last Name'
            aria-label="Search icons"
            aria-describedby="basic-addon2"
            variant={variant}
          // onChange={onChange}
          />
          <InputLabel id="demo-simple-select-label">3/50</InputLabel>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TextField type="text"
            fullwidth
            label='Email'
            aria-label="Search icons"
            aria-describedby="basic-addon2"
            variant={variant}
          // onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TextField type="text"
            fullwidth
            label='Phone Number'
            aria-label="Search icons"
            aria-describedby="basic-addon2"
            variant={variant}
          // onChange={onChange}
          />
          <InputLabel id="demo-simple-select-label">Add your country code first</InputLabel>
        </Grid>
        <Grid item xs={2} md={2} lg={2}>
          <TextField type="text"
            fullwidth
            label='Street Name'
            aria-label="Search icons"
            aria-describedby="basic-addon2"
            variant={variant}
          // onChange={onChange}
          />
        </Grid>
        <Grid item xs={9} md={9} lg={9}>
          <TextField type="text"
            fullwidth
            label='Street Number'
            aria-label="Search icons"
            aria-describedby="basic-addon2"
            variant={variant}
          // onChange={onChange}
          />
        </Grid>
        <Grid item xs={2} md={2} lg={2}>
          <TextField type="text"
            fullwidth
            label='Zip'
            aria-label="Search icons"
            aria-describedby="basic-addon2"
            variant={variant}
          // onChange={onChange}
          />
        </Grid>
        <Grid item xs={2} md={2} lg={2}>
          <TextField type="text"
            fullwidth
            label='State'
            aria-label="Search icons"
            aria-describedby="basic-addon2"
            variant={variant}
          // onChange={onChange}
          />
          <InputLabel id="demo-simple-select-label">AutoComplete</InputLabel>
        </Grid>
        <Grid item xs={2} md={2} lg={2}>
          <TextField type="text"
            fullwidth
            label='City'
            aria-label="Search icons"
            aria-describedby="basic-addon2"
            variant={variant}
          // onChange={onChange}
          />
          <InputLabel id="demo-simple-select-label">Maximum: 5</InputLabel>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <InputLabel id="demo-simple-select-label">Extras</InputLabel>
          <Select
            id="demo-simple-select"
            value={"extras"}
            label="Extras"
            variant={variant}
            onChange={handleSelect}
            sx={{ width: 200, }}>
          </Select>
        </Grid>
        <Grid item xs={6} md={6} lg={6}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            row
          >
            <FormControlLabel value="female" control={<Radio />} label="Credit Card" />
            <FormControlLabel value="male" control={<Radio />} label="Paypal" />
            <FormControlLabel value="other" control={<Radio />} label="Cash" />
            <FormControlLabel value="other" control={<Radio />} label="Bitcoin" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <InputLabel id="demo-simple-select-label">Personal Note</InputLabel>
          <TextField type="text"
            fullwidth
            label='idm lab test'
            aria-label="Search icons"
            aria-describedby="basic-addon2"
            variant={variant}
          // onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <InputLabel id="demo-simple-select-label">Tags</InputLabel>
          <Tags />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Switch color="secondary" {...label1} defaultChecked />
          <span>Send me a remainder</span>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Switch color="secondary" {...label2} defaultChecked />
          <span>Subscribe to newsletter</span>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Checkbox {...label} />
          <span>I confirm the information given above</span>
        </Grid>
      </LocalizationProvider>
    </Grid>
  );
}


DetailPage.propTypes = {
  width: PropTypes.string,
  display: PropTypes.string,
  justifyContent: PropTypes.string,
  marginBottom: PropTypes.number,
  variant: PropTypes.string
};

DetailPage.defaultProps = {
  width: '170px',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '5',
  variant: "standard"
};
