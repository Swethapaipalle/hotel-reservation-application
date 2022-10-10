import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DetailPage from 'components/detail-page-container/DetailPage';
import {Grid} from '@mui/material';

export default function Modal({ open, setOpen,currentReservationData }) {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid >
            <Dialog fullWidth maxWidth='lg' open={open} onClose={handleClose}>
                <DialogContent>
                    <DetailPage data={currentReservationData}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}

