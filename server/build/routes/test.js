"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _multer = require("multer");

var _multer2 = _interopRequireDefault(_multer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var upload = (0, _multer2.default)();
var router = _express2.default.Router();

router.post("/", upload.array(), function (req, res) {
  console.log(req.body.contents);
  return res.json({
    success: true
  });
});

router.get("/", function (req, res) {
  return res.json({
    success: true
  });
});

exports.default = router;