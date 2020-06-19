import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Header({title, hideHeader}){
    if(hideHeader) return null
    return (
        <DialogTitle id="form-dialog-title">
            {title}
        </DialogTitle>
    )
}