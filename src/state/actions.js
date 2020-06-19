import * as actionTypes from './actionTypes'

export function openPopup (modalProps) {
    return {
        type: actionTypes.OPEN_POPUP,
        modalProps: modalProps
    }
}

export function closePopup () {
    return {
        type: actionTypes.CLOSE_POPUP
    }
}
