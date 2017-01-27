'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* mongodb connection */
var db = _mongoose2.default.connection; /**
                                         * Created by Terry on 2017-01-27.
                                         */

db.on('error', console.error);
db.once('open', function () {
  console.log('Connected to mongodb server ' + process.env.MONGODB_URI);
});
// mongoose.connect('mongodb://username:password@host:port/database=');
_mongoose2.default.connect(process.env.MONGODB_URI);

exports.default = _mongoose2.default;