
import React from 'react';
import { Grid, Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DetailPage from '../detail-page-container/DetailPage'

function ResultsTable({ data = [], errorMessage = '', noResults = false }) {
  console.log("data", data)
  const [open, setOpen] = React.useState(false);
  const [currentReservationData, setCurrentReservationData] = React.useState({});

  const handleClickOpen = (index) => {
    setOpen(true);
    setCurrentReservationData(data[index])
  };

  return (
    <Grid container style={{ margin: "100px 50px 30px 330px" }}>
      {errorMessage && <div> {errorMessage} </div>}
      {noResults && <div> No results for this search </div>}
      <Grid className="grid">
        {console.log("data", data)}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">View Details</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(({ firstName, lastName },index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{firstName}</TableCell>
                  <TableCell align="right">{lastName}</TableCell>
                  <TableCell align="right">
                    <Button variant="outlined" onClick={()=>handleClickOpen(index)}>
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <DetailPage open={open} setOpen={setOpen} currentReservationData={currentReservationData} />
        {/* { data.map(({firstName, lastName}) =>
        <div className="card grid-child">
          <p className="card-text">{firstName + ' ' + lastName}</p>
        </div>
        )} */}
      </Grid>
    </Grid>
  );
}

export default ResultsTable;