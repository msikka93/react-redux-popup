'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Header;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DialogTitle = require('@material-ui/core/DialogTitle');

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header(_ref) {
    var title = _ref.title,
        hideHeader = _ref.hideHeader;

    if (hideHeader) return null;
    return _react2.default.createElement(
        _DialogTitle2.default,
        { id: 'form-dialog-title' },
        title
    );
}