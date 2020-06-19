import React from 'react'
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';

export default function Footer({hideFooter, closePopup}){
    if(hideFooter) return null
    return (
        <DialogActions>
          <Button onClick={closePopup} color="primary">
            Cancel
          </Button>
          <Button onClick={closePopup} color="primary">
            OK
          </Button>
        </DialogActions>
    )
}