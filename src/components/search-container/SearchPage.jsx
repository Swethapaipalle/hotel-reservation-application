import React, { useState } from 'react';
import ResultsTable from '../results-page- container/ResultsTable';
import { Grid, Button } from '@mui/material';
import './SearchPage.scss';

function SearchPage({loading, onChange}) {

  return (
    <>
      <Grid container className="search-container">
        <Grid item xs={9} md={9} lg={9} className="search-input">
          <input type="text" 
          placeholder="Search..." 
          aria-label="Search icons" 
          aria-describedby="basic-addon2" 
          onChange={onChange} />
          <Button className="search-button">Search</Button>
        </Grid>
      </Grid>
    </>
  );
}

export default SearchPage;


// import React from 'react';

// function Input({loading, onChange}) {
//   return (
//     <div className="input-group mb-3 mt-3">
//       <input type="text" className="form-control" placeholder="Search..." aria-label="Search icons" aria-describedby="basic-addon2" onChange={onChange} />
//       <div className="input-group-append">
//         { loading ?
//           <span className="input-group-text" id="basic-addon2">Loading...</span> :
//           <span className="input-group-text" id="basic-addon2">Ready</span>
//         }
//       </div>
//     </div>
//   );
// }

// export default Input;