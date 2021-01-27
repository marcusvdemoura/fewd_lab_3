// a) Define a function ( expression) greet returning the value 'Haydo!'.
function greet (){
    return "HAydo!"
}

/* b) Declare a variable salutation. Call the function greet and assign the result of the call
to the variable salutation.*/

var salutation = greet();

// Write a function echo that has a parameter called sound and return that passed parameter.

function echo (sound){
    return sound;
}
/*Write a function greet having a parameter called name. Return 'Hello <parameter> !'
where the parameter variable is concatenated with the ‘Hello’ and ‘!’ strings.*/

function greet (name){
    return "Hello" + name + "!";
}

/*Write a function shout that takes a string and returns this string duplicated. In addition,
the return should be logged. The call shout('Fire') should return 'FireFire' and should log
'FireFire' for example.*/

function shout (string){
    
    return string + string;
}

console.log(shout("fire"));

/*Write a function called doSomething with a parameter called name, return the name
parameter. On the next line call the function with a value for the name ( can be any
name you like ).*/

function doSomething (name){
    return name;
}

doSomething("Marcus");

//Define a function called multiplyFive which accepts a number and returns that number multiplied by 5.

function multiplyFive (number){
    return number*5;
}

/*Define a function called myFunction that uses the alert() method with a string value
“Hello World!” inside. Call myFunction on the next line.*/

function myFunction (message){
    alert(message);
}

myFunction("Hello World");

/*Define a variable called isAnswerRight and give it a true value. Use the ternary
operator to console.log the ‘The answer is right!’ if the value is true and ‘The answer is
wrong!’ if the value is false.*/

var isAnswerRight = true;

isAnswerRight ? console.log('The answer is right!') : ('The answer is wrong!');

/*Write a function named tellFortune that: takes 4 arguments: number of children,
partner's name, geographic location, job title. Output your fortune to the screen
like so: "You will be a X in Y, and married to Z with N kids." Call that function
3 times with 3 different values for the arguments.*/

function tellFortune (numberChildren, partnerName, location, jobTitle){
    return "You will be a "+ jobTitle + " in " + location + " and married to " + partnerName
    + " with " + numberChildren+" kids."
}



