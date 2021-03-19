//Objects, a more detailed approach

// var person = {
//         firstName: "George",
//         lastName: "Bush",
//         age: 70,
//         fullname: function(){
//             return this.firstName + " " +this.lastName;
//         }
//     };
    
//     console.log("Firstname and age are ",person.firstName,person.age);
//     console.log(person.fullname());
    

// var student = {
//     fullName: "Ramesh C K",
//     age: 14,
//     place: "Hassan",
//     languages: ["English", "Kannada"]
// }

//Constructor Function: Capital letter for Object

// function StudentList (name, age, place, languages){
//     this.name = name;
//     this.age = age;
//     this.place = place;
//     this.languages = languages;
//     this.submit = function (x) {
//         if(x === 1)
//             alert("Project Submitted");
//         else
//             alert("in progress");
//     }

// }
// var student1 = new StudentList("Ramesh C K", 14, "Hassan", ["English", "Kannada"]);

// console.log(student1.submit(0));

// console.log(this);

// function Sports(number) {
//     this.number = number;
// }

// let baseball = new Sports(7);
// let cricket = new Sports(11);

// console.log(baseball);
// console.log(cricket);

//for loop
// var names = [ "Aparna", "Nita", "Rita", "Joseph", "Balu"];
// var text = "";
// var i;
// for (i = 0; i < names.length; i++) {
//   text += names[i] + "<br>";
// }
// document.getElementById("test").innerHTML = text;

// console.log(names);


//for in loop

// var text = "";
// var person = {fname:"Indira", lname:"Gandhi", age:55, place:"Delhi"}; 
// var x;
// for (x in person) {
//   text += person[x] + " ";
// }
// document.getElementById("test").innerHTML = text;

// console.log(person);

// var numbers = [45, 60, 30, 15, 150, 90]
// var x;
// var text ="";
// for ( x in numbers) {
//     text = text + numbers[x] + "<br> ";
// }
// document.getElementById("test").innerHTML = text;

//for of loop


// var numbers = [45, 60, 30, 15, 150, 90]
// var x;
// var text ="";
// for ( x of numbers) {
//     text = text + x + "<br> ";
// }
// document.getElementById("test").innerHTML = text;

//forEach

// var txt = "";
// var numbers = [45, 4, 9, 16, 25];
// numbers.forEach(myFunction);
// document.getElementById("test").innerHTML = numbers;

// // function myFunction(x) {
// //   txt = txt + value + "<br>"; 
// // }
// function myFunction(value, index, array) {
//     array[index] = value * 10;
// }

//While loop
//  var i = 0;
//   while( i < numbers.length){
//       console.log(numbers[i]);
//       i++;
//   }

//do while loop
// var numbers = [45, 4, 9, 16, 25];
//   i = 0;
//   do {
//     console.log(numbers[i]);
//     i++;
//   } 
//   while(i < numbers.length);

//Scope of variable

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

//Swap two numbers

// function swap(a, b){
//     var temp = a;
//     var a = b;
//     var b = temp;
//     console.log("After swap")
//     console.log( "a = " + a + " b = " +  b);
// }

// var a = 3;
// var b = 10;
// console.log("Before swap")
// console.log( "a = " + a + " b = " + b);
// swap ( a, b);


// who is going to host the party?

// var names = ["Mary", "Jill", "Kiran", "Xi", "Peter", "Rachel" ];

// function hostname(host) {
//     console.log("Hosts can be",host);
//     var partyHostName = prompt("Who is going to host the party?")
//     if(host.includes(partyHostName))
//         console.log( partyHostName + " is hosting the next party.");
//     else
//         console.log( partyHostName + " is not in this group");
// }

// console.log("Who is hosting the next party?");
// hostname(names);


//Pick 5 random numbers from 1 to 20
// var array = [];
// var newarray = [];
// for ( var i = 1; i <= 20; i++)
// {
//     array.push(i);
// }

// console.log(array);
// for ( var j = 1; j <= 5; j++)
// {
//     console.log("j = ", j)
//     console.log("Array length",array.length);
//     var randomNumber = Math.floor(Math.random() * array.length + 1);
//     console.log("Random number is",randomNumber);
//     if( newarray.includes(randomNumber)) {
//         j = j-1;
//     }
//     else 
//         newarray.push(randomNumber);
//     console.log("newarray is ",newarray);
    
// }
