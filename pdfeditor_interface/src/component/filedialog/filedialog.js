import React from 'react';
import { createPortal } from "react-dom";
import { makeStyles } from '@material-ui/core/styles';
import useFileDialog from './hooks';
import HOCLoading from '../hoc/hocloading';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 420,
  },
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  deleteIcon: {
    color: '#F00'
  }
}));

const FileDialog = ({fileList,fileId,setLoading,dispatch}) => {

  let dialog = document.getElementById("dialog-prompt");
  if(!dialog){
    document.getElementById("app").insertAdjacentHTML("beforebegin","<div id='dialog-prompt'></div>");
    dialog = document.getElementById("dialog-prompt");
  }

  const classes = useStyles();

  const {
    file,
    fileCollection,
    deleteFile,
    onChangeHandler,
    updateFile,
    handleClose
  } = useFileDialog(fileId,fileList,setLoading,dispatch);

  return createPortal(
    <div>
      <Dialog disableBackdropClick disableEscapeKeyDown open onClose={handleClose}>
        <DialogTitle>Select the file</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="select-label">File</InputLabel>
              <Select
                labelId="select-label"
                id="file-selection"
                value={file}
                label="File"
                onChange={onChangeHandler}
                renderValue={
                  () => file 
                      ? fileCollection.find(list => list._id === file).name 
                      : fileCollection && fileCollection.length
                        ? "Please select the file"
                        : "No Files Found"
               }
              > 
                <MenuItem value="">
                  <em>
                    {
                      fileCollection && fileCollection.length
                      ? "Please select the file"
                      : "No Files Found"
                    }
                  </em>
                </MenuItem>
                { 
                  fileCollection && fileCollection.length 
                  ? fileCollection.map(fileData => (
                    <MenuItem 
                      key={fileData._id}
                      value={fileData._id} 
                      className={classes.spaceBetween}
                    >
                      {fileData.name}
                      <DeleteForeverIcon 
                        className={classes.deleteIcon} 
                        onClick={e => {
                          e.stopPropagation();
                          deleteFile(fileData._id);
                        }}
                      />
                    </MenuItem>
                    ))
                  : "" 
                }
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={updateFile} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>,
    dialog
  );
}

export default HOCLoading(FileDialog);
