'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../../state/actions');

var popupActions = _interopRequireWildcard(_actions);

var _Dialog = require('@material-ui/core/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogContent = require('@material-ui/core/DialogContent');

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PopupContainer(_ref) {
    var modalProps = _ref.modalProps,
        open = _ref.open,
        closePopup = _ref.closePopup;

    return _react2.default.createElement(
        _Dialog2.default,
        { open: open, onClose: closePopup, 'aria-labelledby': 'form-dialog-title' },
        _react2.default.createElement(_Header2.default, { title: modalProps.title, hideHeader: modalProps.hideHeader }),
        _react2.default.createElement(
            _DialogContent2.default,
            null,
            modalProps.content
        ),
        _react2.default.createElement(_Footer2.default, { hideFooter: modalProps.hideFooter, closePopup: closePopup })
    );
}

function mapStateToProps(_ref2) {
    var popup = _ref2.popup;

    return popup;
}

function mapDispatchToProps(dispatch) {
    return {
        closePopup: function closePopup() {
            return dispatch(popupActions.closePopup());
        },
        confirmAction: function confirmAction(action) {
            return action();
        }
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PopupContainer);