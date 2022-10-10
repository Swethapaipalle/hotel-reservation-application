
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

function ResultsTable({ display, justifyContent, margin, minWidth }) {
  const [state, dispatch] = useContext(ReservationContext);
  // const [reservations, setReservations] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentReservationData, setCurrentReservationData] = React.useState({});
  const { reservations, noResults } = state

  const handleView = (index) => {
    console.log("indexview",index)
    setOpen(true);
    setCurrentReservationData(reservations[index])
  };
  const handleDelete = (index) => {
    console.log("indexdelete",index)
    setOpen(true);
    setCurrentReservationData(reservations[index])
  };
  const handleEdit = (index) => {
    console.log("indexedit",index)
    setOpen(true);
    setCurrentReservationData(reservations[index])
  };

  return (
    <Grid container style={{ display: display, justifyContent: justifyContent, margin: margin }}>
      {noResults && <Grid> No results for this search </Grid>}
      {!noResults && <Grid className="grid">

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
              {reservations.length !== 0 && reservations?.map(({ firstName, lastName }, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{firstName}</TableCell>
                  <TableCell align="right">{lastName}</TableCell>
                  <TableCell align="right">
                    <Button variant="outlined" onClick={() => handleEdit(index)}>
                      EDIT
                    </Button>
                    <Button variant="outlined" sx={{ marginLeft: margin }}onClick={() => handleDelete(index)}>
                      DELETE
                    </Button>
                    <Button variant="outlined"sx={{ marginLeft: margin }} onClick={() => handleView(index)}>
                      VIEW
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Modal open={open} setOpen={setOpen} currentReservationData={currentReservationData} />
      </Grid>}
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
