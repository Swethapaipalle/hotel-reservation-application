import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DetailPage from 'components/detail-page-container/DetailPage';
import {Grid} from '@mui/material';

export default function Modal({ open, setOpen,currentReservationData, view }) {
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Grid >
            <Dialog fullWidth maxWidth='lg' open={open} onClose={handleClose}>
                <DialogContent>
                    <DetailPage data={currentReservationData} handleClose={handleClose} view={view}/>
                </DialogContent>
            </Dialog>
        </Grid>
    );
}

