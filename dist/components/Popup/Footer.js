'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _DialogActions = require('@material-ui/core/DialogActions');

var _DialogActions2 = _interopRequireDefault(_DialogActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Footer(_ref) {
  var hideFooter = _ref.hideFooter,
      closePopup = _ref.closePopup;

  if (hideFooter) return null;
  return _react2.default.createElement(
    _DialogActions2.default,
    null,
    _react2.default.createElement(
      _Button2.default,
      { onClick: closePopup, color: 'primary' },
      'Cancel'
    ),
    _react2.default.createElement(
      _Button2.default,
      { onClick: closePopup, color: 'primary' },
      'OK'
    )
  );
}