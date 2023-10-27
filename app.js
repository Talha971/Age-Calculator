// // 1

// var a=+prompt();
// document.write(a+"<br>");
// document.write(Math.round(a)+"<br>");
// document.write(Math.floor(a)+"<br>");
// document.write(Math.ceil(a)+"<br>");

// // 2
// var a=+prompt();
// document.write(a+"<br>");
// document.write(Math.round(a)+"<br>");
// document.write(Math.floor(a)+"<br>");
// document.write(Math.ceil(a)+"<br>");

// // 3
// var a=+prompt();
// document.write(a+"<br>");
// document.write(Math.round(a)+"<br>");
// document.write(Math.floor(a)+"<br>");
// document.write(Math.ceil(a)+"<br>");

// // 4
// var a=+prompt();
// document.write(a+"<br>");
// document.write(Math.round(a)+"<br>");
// document.write(Math.floor(a)+"<br>");
// document.write(Math.ceil(a)+"<br>");

// // 5
// var a=+prompt();
// document.write(Math.abs(a)+"<br>");

// // 6
// document.write(Math.floor(Math.random()*7)+"<br>");

// // 7
// var a = Math.floor(Math.random() * 2) + 1 ;
// if (a == 1) {
//   document.write("HEAD");
// } else if (a == 2) {
//   document.write("TAILS");
// }

// // 8
// document.write(Math.floor(Math.random()*100)+1+"<br>");

// // 9
// var a=prompt("enter weiht");
// document.write("weight is "+a+" kilograms");

// // 10
// var a=+prompt();
// var b= Math.floor((Math.random()*10)+1);
// console.log(b)
// if(a==b){
//     document.write("congrats");

// }
// else{
//     document.write("nikl");

// }

// // 11
// var a = new Date();
//     document.write(a);

// // 12
// const months = [
//     "January", "February", "March", "April",
//     "May", "June", "July", "August",
//     "September", "October", "November", "December"
// ];

// const currentDate = new Date();
// const currentMonth = currentDate.getMonth(); // Get the current month (0-11)

// const currentMonthName = months[currentMonth];

// alert("The current month is" + currentMonthName);

// // 13
// var a = new Date();
// var b = Date().slice(0, 3);
// document.write(b)

// // 14
// var arr = ["sun","mon", "tue", "wed", "thurs", "fri", "sat"];
// var a = new Date();
// var b = a.getDay();
// document.write(arr[b]);
// if(b==5||b==6){
//     document.write("<br>its a funday")
// }

// // 15
// var a = new Date();
// var b = a.getDate();
// console.log(b);
// if(b<=15){
//     document.write("first 15 days")

// }
// else{
//     document.write("last 15 days")

// }

// // 16
// var a = new Date() / 60000;
// document.write("milliseconds " + a);
// var b = new Date() / (60000*60);
// document.write("<br>minutes " + b);

// // 17
// var a = new Date();
// var b = a.getHours();
// if (b <= 12) {
// document.write("its am");
// }
// else{
// document.write("its pm");

// }

// // 18
// var a = new Date("2020,11,31");
// console.log(a);

// // 19
// var a = new Date("1994,11,11");
// var c = new Date();
// var b =  c-a;
// console.log(Math.floor(b/(60000*60*24)));

// // 20
// var a = new Date("2014,12,31");
// var c = new Date("2015,12,5");
// var b =  c-a;
// console.log(Math.floor(b/(60000)));

// 21
// var a = new Date();
// var b = a.getHours();
// a.setHours(b - 1);
// document.write("<br>" + a);

// 22
// var a = new Date();
// var b = a.getFullYear();
// a.setFullYear(b - 100);
// document.write("<br>" + a);

// // 23
// var a = new Date();
// var b = a.getFullYear();
// console.log(b);
// var c = +prompt("eneter your age");
// document.write(b - c);

// // 24
// var a = new Date();
// var b = a.getMonth();
// var months = [
//   "jan",
//   "feb",
//   "mar",
//   "apr",
//   "may",
//   "jun",
//   "jul",
//   "aug",
//   "sep",
//   "oct",
//   "nov",
//   "dec",
// ];
// var d = prompt("eneter your name");
// var e = +prompt("no of units");
// var f = +prompt("charges per units");
// var g = +prompt("late charges");
// document.write("<br>name: " + d);
// document.write("<br>Month: " + months[b]);
// document.write("<br>units: " + e);
// document.write("<br>charges: " + f);
// document.write("<br>net amount within due date: " + e * f);
// document.write("<br>net amount after due date: " + (e * f + g));


