// var x = 5;
// var y = 10;

// var z = x + y;
// console.log("The value of z = ",z);

// var name1 = "George";
// var name2 = "Bush";
// var fullname = name1 + " " + name2;

// console.log("Fullname is ", fullname);

// var name = "Aparna";
// var name = 'George';
// alert(name);
// alert(x);
// alert(y);

// const pi = 3.147;
// // pi = 3.147;
// console.log("The value of pi is", pi);

// let x = 3;
// let y = 6;
// let z = x * y;
// console.log("z = ", z);

// var name = "George";
// var x = 5;
// console.log(typeof(true));


// var name1 = "George";
// var name2 = "Bush";
// var x = name1.length;
// console.log("Length of name1", x);
// console.log(name1[0], name[5], name[6]);
// var caps = name1.toUpperCase();
// console.log(caps);
// var caps = name2.toLowerCase();
// console.log(caps);

//  var fruits = "Banana, Orange, Apple";
//  var result = fruits.slice(8, 14);
//     console.log(result, fruits[14], fruits[13]);
// console.log(Math.random());

// var x = 5;
// var y = '5';

// var z = (x === y);

// console.log(z);

// var person = {
//     firstName: "George",
//     lastName: "Bush",
//     age: 70,
//     fullname: function(){
//         return this.firstName + " " +this.lastName;
//     }
// };

// console.log("Firstname and age are ",person.firstName,person.age);
// console.log(person.fullname());

//Operators + , -, * , / , % (modulus), i++, i--

// var x = 100;
// var y = 20;
// // var z = x % y;
// x = x++;
// x = ++x; // x = x + 1 x++
// y = --y; // y = y - 1; y++
// console.log("The value of x and y", x, y);

// JS Functions

// function multiply(x, y) {
//     return result = x * y;
//     // console.log("Result is",result);
// }

// var product = multiply(7, 5);
// console.log("Product is",product);

// Convert Fahrenheit to Celsius
//c = (f - 32) * 5/9 

// var fahrenheit = prompt("Enter the temperature");
// var celsius = tempConversion(fahrenheit);
// console.log("The temp in " + fahrenheit +" is equal to "  + celsius + " degrees");

// function tempConversion(f) {
//     c = (f - 32) * 5/9;
//     return c;
// }

//If else conditions, comparison , logical && || 

// var testScore = Math.floor(Math.random() * 100) + 1;
// // if ( testScore > 35 ) {
// //     console.log("Your score is " + testScore + "  You have cleared");
// // } else {
// //     console.log("Your score is " + testScore + "  Better luck next time.");
// // }

// if ( testScore > 90 ) {
//     console.log("Your score is " + testScore + "  You have A+ grade. ");
// } else if (testScore > 70 && testScore <= 90){
//     console.log("Your score is " + testScore + "  You have A grade .");
// }else if (testScore > 35 && testScore <= 70){
//     console.log("Your score is " + testScore + "  You have B grade .");
// }else {
//     console.log("Your score is " + testScore + "   Better luck next time.");
// }

//JS Arrays
// var x = "Sita";

// var names1 = [ "Aparna", "Nita", "Rita", "Joseph", "Balu"];
// var names2 = ["Bill", "Jill"];
// var names = names1.concat(names2);
// console.log(names);
// names.splice(2, 3, "George", "Joe");
// console.log(names);

// console.log("The length of the array is ", names.length);
// console.log( names[names.length -3] );
// console.log(names[4]);

// names.push("George");
// console.log(names);
// names.pop("George");
// console.log(names);
// var removedName = names.pop();
// console.log(removedName);
// console.log(names);
// var removedName = names.pop();
// console.log(removedName);
// console.log(names);

//Print multiplication table of 5 using increment operator

// 5 * 1 = 5 
// 5 * 2 = 10 
// .
// .
// 5 * 10 = 50


// var i = 1;
// console.log(" 5 * " + i + " = " + 5*i ); 
// console.log(" 5 * " + ++i + " = " + 5*i );
// console.log(" 5 * " + ++i + " = " + 5*i );
// console.log(" 5 * " + ++i + " = " + 5*i );
// console.log(" 5 * " + ++i + " = " + 5*i );
// console.log(" 5 * " + ++i + " = " + 5*i );
// console.log(" 5 * " + ++i + " = " + 5*i );
// console.log(" 5 * " + ++i + " = " + 5*i );
// console.log(" 5 * " + ++i + " = " + 5*i );
// console.log(" 5 * " + ++i + " = " + 5*i );

//for loop

// for ( var i = 1; i <= 10 ;i++ )
//     {
//         // console.log("The value of i is ",i);
//         console.log(" 5 x " , i + " = " , 5*i );

//     }

// var names = [ "Aparna", "Nita", "Rita", "Joseph", "Balu"];
// console.log(names.length);
// for ( i = 0;  i < names.length ; i++)
// {
//     console.log(names[i]);
// }

//Fibonacci Series
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ...


// function fibonacciSeries(i) {
//     var i;
//     if( i == 1){
//         var output = [0];
//     }else if(i == 2) {
//         var output = [0, 1];
//     }
//     else {
//         output = [0, 1];
//         for( var n = 2; n < i; n++ ) {
//         output.push(output[output.length - 1] + output[output.length - 2]);
        
//         }
//     }
//     console.log("Ouput is ",output);
//     return output;
// }

// var series = fibonacciSeries(10);
// console.log("Series is ",series);


// for in, i refers to index 
// var numbers = [20,100,40,50,60];
// var i = 0;
// // for (i in numbers ){
// //     console.log(numbers[i]);
// // }

// // for of, i refers to the value itself.
// for ( i of numbers) {
//     console.log(i);
// }

//while 
// var names = [ "Aparna", "Nita", "Rita", "Joseph", "Balu"];
// //for ( i = 0;  i < names.length ; i++)
// var i = 0; 
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

//do while
// var names = [ "Aparna", "Nita", "Rita", "Joseph", "Balu"];
// var i = 0;
// do {
//     console.log(names[i]);
//     i++;
// }
// while(i<names.length);

// switch case

// var i = 8;
// switch ( 13 % 7 ) {
//     case 1:
//         console.log("Today is Monday");
//         break;
//     case 2:
//         console.log("Today is Tuesday");
//         break;
//     case 3:
//         console.log("Today is Wednesday");
//         break;
//     case 4:
//         console.log("Today is Thursday");
//         break;
//     case 5:
//         console.log("Today is Friday");
//         break;
//     case 6:
//         console.log("Today is Saturday");
//         break;
//     case 7:
//         console.log("Today is Friday");
//         break;
//     default:
//         console.log("Does not exist");

// }

// var student1 = {
//     fullName: "Ramesh C K",
//     age: 14,
//     location: "Hyderabad",
//     languages: ["Telugu", "English"]
// }

//Constructor

// function Student(fullname, age, location, languages ){
//     this.fullname = fullname;
//     this.age = age;
//     this.location = location;
//     this.languages = languages;

// }

// var student1 = new Student("Ramesh C. K", 13, "Hyderabad",["English, Telugu"]);
// var student2 = new Student("Ram C. T", 13, "Bangalore",["English, Kannada"]);
// console.log(student1.languages);

//Scope of variables


// function print(){
//     var x = 5;
//     let y = 10;
//     console.log("x=", x);
//     console.log("y= ", y);
// }
// print();
// console.log("x=", x);
// console.log("y= ", y);

//Exercise swap or interchange two variables

// a = 10; b = 5;
// a = 5; b = 10;

// var x = 10, y = 5;
// console.log("Before Swapping");
// console.log(" x = " + x + " y = " + y);

// function swap(x, y) {
//     console.log("Inside Function");
//     var temp = x;
//      x = y;
//      y = temp;
//     console.log(" x = " + x + " y = " + y);
//     // return x;
// }
// x = swap(x, y);
// console.log("After Swapping");
// console.log(" x = " + x);

//Who is going to host the party?

// var hostNames = ["Rita", "Jill", "Mary", "Kiran", "Hari", "Xi", "Rachel"];
// var partyHostName = prompt();
// console.log(hostNames.includes(partyHostName));
// if (hostNames.includes(partyHostName)) {
//     console.log(partyHostName + " is giving a party next time");
// }else {
//     console.log(partyHostName + " is not in this group");
// }




