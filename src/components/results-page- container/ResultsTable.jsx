
import React, { useContext, useEffect, useState } from 'react';
import { Grid, Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from '../modal-container/Modal'
import PropTypes from 'prop-types';
import { ReservationContext } from "../../useContext/context";

const initialFormData = {
		"room": {
			"roomQuantity": 1
		},
		"firstName": "",
		"lastName": "",
		"email": "",
		"phone": "",
		"addressStreet": {
		"streetName": "",
			"streetNumber": ""
		},
		"addressLocation": {
			"zipCode": "",
			"state": "",
			"city": ""
		},
		"extras": [
			"extraBreakfast",
			"extraTV",
		],
		"payment": "cc",
		"note": "",
		"tags": [
			"hotel",
			"booking",
			"labtest"
		],
	"reminder": true,
	"newsletter": true,
	"confirm": false
};


function ResultsTable({ display, justifyContent, margin, minWidth }) {
  const [state, dispatch] = useContext(ReservationContext);
  // const [reservations, setReservations] = useState([]);
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(false);
  const [currentReservationData, setCurrentReservationData] = React.useState(initialFormData);
  const { reservations, noResults } = state;

  const handleView = (index) => {
    setOpen(true);
	  setView(true);
    setCurrentReservationData(reservations[index])
  };
  const handleDelete = (index) => {
	  reservations.splice(index, 1)
	  dispatch({
		  type: "DELETE_RESERVATION",
		  payload: {data: reservations, noResults: reservations?.length === 0}
	  });
  };
  const handleAdd = () => {
    setOpen(true);
	  setView(false);
  };

  return (
    <Grid container style={{ display: display, justifyContent: justifyContent, margin: margin }}>
      <Grid item xs={7} md={7} lg={7} sx={{ padding:"20px 30px" }}>
        <Button data-testid="button3" variant="outlined" sx={{ marginLeft: margin }} onClick={handleAdd}>
          Add Reservations
        </Button>
      </Grid>
      {noResults && <Grid item xs={7} md={7} lg={7} sx={{ padding:"20px 60px" }}> No results for this search </Grid>}
      {!noResults && <Grid className="grid" data-testid="table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: minWidth }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">View Details</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {reservations?.length !== 0 && reservations?.map(({ firstName, lastName }, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{firstName}</TableCell>
                  <TableCell align="right">{lastName}</TableCell>
                  <TableCell align="right">
                    <Button data-testid="button1" variant="outlined" onClick={() => handleView(index)}>
                      VIEW
                    </Button>
                    <Button data-testid="button2" variant="outlined" sx={{ marginLeft: margin }} onClick={() => handleDelete(index)}>
                      DELETE
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      }
	    <Modal open={open} setOpen={setOpen} currentReservationData={currentReservationData} view={view}/>
    </Grid>
  );
}

export default ResultsTable;


ResultsTable.propTypes = {
  minWidth: PropTypes.string,
  display: PropTypes.string,
  justifyContent: PropTypes.string,
  margin: PropTypes.string,

};

ResultsTable.defaultProps = {
  minWidth: '750px !important',
  display: 'flex',
  justifyContent: 'center',
  margin: '30px'
};
