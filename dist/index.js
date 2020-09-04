"use strict";

var _prise = require("../../homework1/js/prise");

var _prise2 = _interopRequireDefault(_prise);

var _num = require("../../homework2/js/num");

var _num2 = _interopRequireDefault(_num);

var _digit = require("../../homework3/js/digit");

var _digit2 = _interopRequireDefault(_digit);

var _pairs = require("../../homework4/js/pairs");

var _pairs2 = _interopRequireDefault(_pairs);

var _randomArr = require("../../homework5/js/randomArr");

var _randomArr2 = _interopRequireDefault(_randomArr);

var _students = require("../../homework6/js/students");

var _students2 = _interopRequireDefault(_students);

var _tax = require("../../homework7/js/tax");

var _tax2 = _interopRequireDefault(_tax);

var _student = require("../../homework8/js/student");

var _color = require("../../homework9/js/color");

var _color2 = _interopRequireDefault(_color);

var _chines = require("../../homework11/js/chines");

var _chines2 = _interopRequireDefault(_chines);

var _planet = require("../../homework12/js/planet");

var _planet2 = _interopRequireDefault(_planet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import "./style.css";
// import './img/1.jpg'
//3
console.log((0, _digit2.default)(867357909755));

//4
// import "../src/style.css"; 
console.log((0, _pairs2.default)());

//5
console.log((0, _randomArr2.default)(15, 1, 100));

//6
console.log((0, _students2.default)('Test'));

//7
console.log((0, _tax2.default)(1500) + " UAH");

//8
var student = new _student.Student("Вищої Школи Психотерапії м.Одеса", 4, "Остап Бендер");
console.log(student);

//9
console.log((0, _color2.default)());

//11
console.log((0, _chines2.default)(8));

//12
(0, _planet2.default)(3).then(function (res) {
  return console.log(res);
});