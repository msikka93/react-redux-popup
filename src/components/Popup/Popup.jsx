import React from 'react'
import { connect } from 'react-redux'
import * as popupActions from '../../state/actions'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Header from './Header'
import Footer from './Footer'

function PopupContainer ({ modalProps, open, closePopup }) {
    return(
        <Dialog open={open} onClose={closePopup} aria-labelledby="form-dialog-title">
            <Header title={modalProps.title} hideHeader={modalProps.hideHeader} />
            <DialogContent>
                {modalProps.content}
            </DialogContent>
            <Footer hideFooter={modalProps.hideFooter} closePopup={closePopup} />
        </Dialog>
    )
}

function mapStateToProps({ popup }) {
    return popup
}

function mapDispatchToProps(dispatch) {
    return ({
        closePopup: () => dispatch(popupActions.closePopup()),
        confirmAction: (action) => action()
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupContainer)