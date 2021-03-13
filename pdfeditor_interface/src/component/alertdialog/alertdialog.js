import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const AlertDialog = props => {
    
    const { title,content,callback,handleClose } = props;

    return (
        <div>
            <Dialog
                open={true}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                { content }
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button variant="contained" onClick={callback} color="primary">
                    Ok
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Cancel
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AlertDialog;