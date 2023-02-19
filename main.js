nameOfTHEStudentArrey = []

function submit ()
{


var name_1 = document.getElementById("nameOfTHEStudent1") .Value;
var name_2 = document.getElementById("nameOfTHEStudent2") .Value;
var name_3 = document.getElementById("nameOfTHEStudent3") .Value;
var name_4 = document.getElementById("nameOfTHEStudent4") .Value;

nameOfTHEStudentArrey.push(name_1)
nameOfTHEStudentArrey.push(name_2)
nameOfTHEStudentArrey.push(name_3)
nameOfTHEStudentArrey.push(name_4)

console.log(nameOfTHEStudentArrey);



document.getElementById("displayName").innerHTML = nameOFTHEStudentArrey;


}
