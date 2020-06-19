'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Popup = exports.closePopup = exports.openPopup = exports.popupReducer = undefined;

var _Popup = require('./components/Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _actions = require('./state/actions');

var _reducer = require('./state/reducer');

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.popupReducer = _reducer2.default;
exports.openPopup = _actions.openPopup;
exports.closePopup = _actions.closePopup;
exports.Popup = _Popup2.default;