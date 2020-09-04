// import "../src/style.css"; 
import maxPrice from '../../homework1/js/prise';
import N from "../../homework2/js/num";
import getMaxDigit from "../../homework3/js/digit";
import getStudentsPairs from "../../homework4/js/pairs";
import getRandomArray from "../../homework5/js/randomArr";
import calculateWordLetters from "../../homework6/js/students";
import getMyTaxes from "../../homework7/js/tax";
import {Student} from "../../homework8/js/student";
import getGenerateSquareColor from "../../homework9/js/color";
import getRandomChines from "../../homework11/js/chines";
import getPlanet from "../../homework12/js/planet";
// import "./style.css";
// import './img/1.jpg'
//3
console.log(getMaxDigit(867357909755) );

//4
console.log(getStudentsPairs() );

//5
console.log(getRandomArray(15, 1, 100));

//6
 console.log(calculateWordLetters('Test'))

 //7
 console.log(`${getMyTaxes(1500)} UAH`);

 //8
 let student = new Student(
    "Вищої Школи Психотерапії м.Одеса",
    4,
    "Остап Бендер"
  );
  console.log(student);

//9
console.log(getGenerateSquareColor());

//11
console.log(getRandomChines(8));

//12
getPlanet(3).then((res) => console.log(res));









   
 
