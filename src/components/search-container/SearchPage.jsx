import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';
import './SearchPage.scss';
import PropTypes from 'prop-types';
import { TextField, Typography } from '@mui/material';


function SearchPage({ onChange, label, size, margin, display, justifyContent }) {
  // console.log("props",props)
  return (
    <>
      <Grid container className="search-container"
        style={{
          display: display,
          justifyContent: justifyContent,
          margin: margin
        }} >
        <Grid item xs={size} md={size} lg={size}>
          <Typography variant="h3" gutterBottom>Hotel Reservation System</Typography>
          <TextField type="text"
            fullwidth
            label={label}
            aria-label="Search icons"
            aria-describedby="basic-addon2"
            variant='outlined'
            onChange={onChange} />
            <div>Ex:IDM</div>
        </Grid>
      </Grid>
    </>
  );
}

export default SearchPage;

SearchPage.propTypes = {
  size: PropTypes.number,
  label: PropTypes.string,
  onChange: PropTypes.func,
  inputColor: PropTypes.string,
  display: PropTypes.string,
  justifyContent: PropTypes.string,
  margin: PropTypes.string,

};

SearchPage.defaultProps = {
  size: '6',
  onChange: undefined,
  display: 'flex',
  justifyContent: 'center',
  label: 'Search...',
  margin: '30px'
};