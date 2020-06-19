import * as actionTypes from './actionTypes'

const initialState = {
    open: false,
    modalProps: {
        title: 'Confirm Action',
        confirmButtonLabel: 'Submit',
        hideHeader: false,
        hideFooter: false,
        content: null,
        handleConfirm: () => true,
        handleCancel: () => true
    }
}

export default function(state = initialState, action= {}){
    switch(action.type){
        case actionTypes.OPEN_POPUP:
            return Object.assign({},state,{
                modalProps:Object.assign({}, initialState.modalProps, action.modalProps),
                open: true
            })
        case actionTypes.CLOSE_POPUP:
            return Object,assign({}, state, {modalProps: {}, open: false})   
        default:
            return state 
    }
}