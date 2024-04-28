//                   Chapter # 17-20  ARRAYS AND LOOPS

/* Q.1. Declare and initialize an empty multidimensional array.
(Array of arrays) */

// let emptyAarray = [[]]

/* Q.2. Declare and initialize a multidimensional array 
representing the following matrix: */

// var multiArray = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// for(var i = 0 ; i<multiArray.length ; i++){
//     for (var j = 0 ; j < 4; j++){
//         document.write(multiArray[i][j]," ")
//     }
//     document.write("<br>")
// }

// /* Q.3. Write a program to print numeric counting from 1 to 10. */

// for (var i = 1 ; i<=10; i++){
//         document.write(i,"<br>")
//     }

/* Q.4. Write a program to print multiplication table of any 
number using for loop. Table number & length should be 
taken as an input from user. */

// var tableNumber = +prompt("Enter a number to show its multiplication table")
// var length = +prompt("Enter length multiplication table")
// for(var i = 1 ; i<=length; i++){
//     document.write(`${tableNumber} x ${i} = ${tableNumber*i} <br>`)
// }

/* Q.5. Write a program to print items of the following array using for loop:
fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] */


// var fruits = ["apple","banana","mango","orange","strawbery"];

// for(fruits i = 0; i < arr.length; i++){
// document.write("</br>"+ fruits[i])
// }

/* Q.6. Generate the following series in your browser. See example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k */


// document.write("<b> a. Counting: </b>", "<br>", "<br>") 
// for(var i = 1 ;i < 16 ; i++){
//     document.write(i,", ")
// }

// document.write("<br>","<br>", "<b> b. Reverse Counting: </b>", "<br>", "<br>") 
// for(var i = 15 ;i > 0 ; i--){
//     document.write(i,", ")
// }

// document.write("<br>","<br>","<b> c. Even: </b>", "<br>", "<br>") 
// for (var i = 0 ; i <= 20 ;i+=2){
//     document.write(i,", ")
// }

// document.write("<br>","<br>","<b> d. Odd: </b>", "<br>", "<br>")
// for (var i = 1 ; i <= 19 ;i+=2){
//     document.write(i,", ")
// }

// document.write("<br>","<br>","<b> e. Series: </b>", "<br>", "<br>") 
// for (var i = 2 ; i <= 20 ;i+=2){
//     document.write(i,"K",", ")
// }

/* Q.7. You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an array.
After searching, prompt the user whether the given item is
found in the list or not. Example: */

// var bakery = ["cake","apple pie","cookie","chips","patties"]
// var customerWant= prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();
// var found = false
// for(var i = 0 ; i<bakery.length; i++){
//     if(customerWant === bakery[i]){
//         document.write(`${customerWant} is available at index ${i} in our bakery`);
//         found = true;
//         break;
//     }   
// }
// if (found==false){
//     document.write(`We are sorry. ${customerWant} is not available in our bakery`)
// }



/* Q.8. Write a program to identify the largest number in the 
given array.
A = [24, 53, 78, 91, 12]. */

// var arr = [24,53,78,91,12,118];
// var max = Math.max(...arr);
// document.write("Array items: " , arr, "<br>")
// document.write("The largest number is: " , max)


/*Q.9. Write a program to identify the smallest number in the 
given array.
A = [24, 53, 78, 91, 12] */

// var arr = [24,53,78,91,12,118];
// var min = Math.min(...arr);
// document.write("Array items: " , arr, "<br>")
// document.write("The largest number is: " , min)



/*Q.10. Write a program to print multiples of 5 ranging 1 to 
100. */

// for(var i = 1 ; i<=100;i++){
//     if(i%5===0){
//         document.write(i,"<br>")
//     }
// }

//                   Chapter # 21-25  STRING METHODS

/* Q.1. Write a program that takes two user inputs for first and 
last name using prompt and merge them in a new variable 
titled fullName. Greet the user using his full name. */

// var fName = prompt("Enter our First name ")
// var lName = prompt("Enter our last name ")
// var fullName =alert("Welcome, " + fName+ " " + lName)

/* 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser. */

// var favMobile = prompt("What is your fav mobile");
// document.write("My favorite mobile is: ",favMobile,"<br>");
// document.write("Length of string ", favMobile.length);

/* 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser. */

// var nationality = "Pakistani";
// var index = nationality.indexOf("n");
// document.write("String: ", nationality,"<br>")
// document.write("Index of 'n': ", index);

/* 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser. */

// var myStr = "Hello World";
// var lIndex = myStr.lastIndexOf("l");
// document.write("String: ", myStr,"<br>")
// document.write("last index of letter 'l': ", lIndex)

/* 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser. */

// var strName = "Pakistani";
// var char = strName.charAt(3);
// document.write("String: ", strName,"<br>")
// document.write("Character at index 3: ", char)

/* 6. Repeat Q1 using string concat() method. */

// var fName = prompt("Enter our First name ")
// var lName = prompt("Enter our last name ")
// var result = fName.concat(lName)
// alert("Hello, " + result);

/* 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser. */

// var oldStr = "Hyderabad";
// var newStr = oldStr.replace("Hyder","Islam");
// document.write("City: " , oldStr,"<br>")
// document.write("After replacement: " , newStr)

/* 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”; */

// var message = '"Ali and Sami are best friends. They play cricket and football together.";';
// var newMessage = message.replace(/and/g,"&");
// document.write(message,"<br>")
// document.write(newMessage)


// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser.

// var str = "472";
// var num = parseInt(str);
// document.write("value: " , str, "<br>")
// document.write("type: " , typeof(str) ,"<br>")
// document.write("value: " , num, "<br>")
// document.write("type: " , typeof(num), "<br>")


// 10. Write a program that takes user input. Convert and 
// show the input in capital letters.

// var str = "peanuts";
// var strUpper = str.toUpperCase();
// document.write("user input: " , str , "<br>")
// document.write("upper case: " , strUpper , "<br>")

// 11. Write a program that takes user input. Convert and 
// show the input in title case.

// let str = "javascript.";
// function titleCase(str){
//     str = str.toLowerCase();
//     str = str.split(" ");
//     for(let i = 0; i < str.length; i++){
//         str[i] = str[i].charAt(0).toUpperCase()+str[i].slice(1)
//     }

//     return str.join("   ")
// }
// document.write(titleCase(str))

// 12. Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// var str = num.toString();
// document.write("Number: ", num , "<br>")
// document.write("Result: " , str.replace(".","") , "<br>")

// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .


//  14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:

// var item = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var found = false;
// for(var  i = 0 ;i<arr.length; i++){
//     if(arr[i]===item){
//         alert(item + " is available at index " + i + " in our bakery");
//         found = true;
//         break;
//     }
// }
// if(!found){
//     alert("we are sorry. " + item + " is not available in our bakery");
// }



// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// 16. Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi";
// var arr = university.split("");
// for (let i = 0; i < arr.length; i++){
//     document.write(university[i],"<br>")
// }

// 17. Write a program to display the last character of a user 
// input.

// var userInput = prompt("enter your name");
// var lastChar = userInput.charAt(userInput.length-1);
// document.write("User input: " , userInput , "<br>")
// document.write("Last Character of input: " , lastChar);

// 18. You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.

// var str = "The quick brown fox jumps over the lazy dog";
// document.write(str + "<br>")
// str = str.split(" ")
// let count = 0;
// for (let i = 0; i < str.length; i++){
//     if (str[i].toLowerCase()==="the"){
//         count++
//     }
// }
// if (count>0){     
//         document.write("There are " + count + " " + "occurrence(s) of word 'the'")
// }


                // Chapter # 35-38  FUNCTION

// 1. Write a function that displays current date & time in your browser.

// function dateAndTime (){
//     var date = new Date();
//     return date;
// }
// var result = dateAndTime();
// document.write(result);

// 2. Write a function that takes first & last name and then it greets the user using his full name.

// var firstName = prompt("Write a first name :")
// var lastName = prompt("Write a last name :")
// function fullName(firstName, lastName){
//     var fullName= firstName + " " + lastName;
//     return fullName;
// }
// var result = fullName(firstName,lastName);
// alert("Hello, " + result);

// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// var firstInput = +prompt("Write a first number :")
// var secondInput = +prompt("Write a second number :")
// function addition(firstInput,secondInput){
//     var add = firstInput+secondInput;
//     return add;
// }
// alert(addition(firstInput,secondInput));

// 4. Calculator:
// // Write a function that takes three arguments num1, num2 & operator & compute the desired operation.
// Return and show the desired result in your browser.

// var num1 = +prompt("Write a first number :")
// var num2 = +prompt("Write a second number :")
// var operator = prompt("Write a operant :");
// function operations(num1, num2, operator){
//     if(operator === "*"){
//         return num1 * num2;
//     }
//     if(operator === "+"){
//         return num1 + num2;
//     }
//     if(operator === "-"){
//         return num1 - num2;
//     }
//     if(operator === "/"){
//         return num1 / num2;
//     }

// }

// alert(operations(num1,num2,operator))

// 5. Write a function that squares its argument.

// var x = +prompt("Write a number :")
// function square(x){
//     return x*x;
// }

// alert(square(x))

// 6. Write a function that computes factorial of a number.

// var input = prompt("Enter a number");
// function factorial(x){
//     let calculating = 1;
//     for(let i = x; i>0;i--){
//         calculating *=i;
//     }
//     return calculating;
// }

// alert(factorial(input))


// 7. Write a function that take start and end number as inputs & display counting in your browser.

// var startNumber = prompt("Enter start counting number")
// var endNumber = prompt("Enter end counting number")
// function counting(startNumber,endNumber){
//     for(var i= startNumber; i<=endNumber;i++){
//         document.write(i,"<br>")
//     }
// }

// counting(startNumber,endNumber)

// 8. Write a nested function that computes hypotenuse of a right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// var width=+prompt("Enter a width")
// var height=+prompt("Enter a height")
// function calculateArea(width,height){
//     return width*height;
// }
// alert(calculateArea(width,height));

// 10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam.

// 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// var inpStr=prompt("Enter a string");
// function title (strFirst){
//     strFirst = strFirst.split(" ");
//     for (var i = 0 ; i<strFirst.length; i++){
//         strFirst[i]=strFirst[i].charAt(0).toUpperCase() +strFirst[i].slice(1);
//     }
//     return strFirst.join(" ")
// }
// var result=title(inpStr);
// alert(result)

// 12. Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


// 13. Write a JavaScript function that accepts two arguments, a 
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string. 
// Sample arguments : 'JSResourceS.com', 'o'

// var string1 = prompt("Enter a string");
// var letter1 = prompt("Enter a alphabet which you want to find the occurence");
// function occurence(string1,letter1){
//     var count = 0;
//     for(var i=0 ; i<string1.length; i++){
//         if (string1[i] === letter1){
//             count++
//         }
//     }
//     return "Occurence of" + letter1+ "in string is " + count;

// }

// alert(occurence(string1,letter1))

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using 
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area 
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2