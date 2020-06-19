'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.openPopup = openPopup;
exports.closePopup = closePopup;

var _actionTypes = require('./actionTypes');

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function openPopup(modalProps) {
    return {
        type: actionTypes.OPEN_POPUP,
        modalProps: modalProps
    };
}

function closePopup() {
    return {
        type: actionTypes.CLOSE_POPUP
    };
}