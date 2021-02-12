'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

app.get('/', (req, res) => res.status(200).send({ message: 'Hello there' }));

const port = process.env.PORT || 5000;
app.listen(port);

exports.default = app;