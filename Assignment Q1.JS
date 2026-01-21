var dbms = Number(prompt("Enter DBMS marks (out of 70)"));
var wt   = Number(prompt("Enter WT marks (out of 70)"));
var bee  = Number(prompt("Enter BEE marks (out of 70)"));
var fds  = Number(prompt("Enter FDS marks (out of 70)"));
var se   = Number(prompt("Enter SE marks (out of 70)"));

var total = dbms + wt + bee + fds + se;
var percentage = (total / 350) * 100;

var grade;

if (percentage >= 60) {
    grade = "First Class";
}
else if (percentage >= 50) {
    grade = "Second Class";
}
else {
    grade = "Fail";
}

console.log("Total Marks = " + total + " / 350");
console.log("Percentage = " + percentage.toFixed(2) + "%");
console.log("Grade = " + grade);
