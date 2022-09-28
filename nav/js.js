var ser = "my first name is ";
ser += "john";
console.log(ser);

var someAdjectives = "awesome"
var services = "batt is "
services += someAdjectives
console.log(services);

var firstLetterName = "";
var lastName = "LoveLace";

firstLetterName = lastName[0];
console.log(firstLetterName);

var stry = "jello world";
stry = "fegg"
console.log(stry);

var array = [0, 9, 8, 8,];
var fer = array[3]
console.log(fer);

/* you can use arrays to mdify an array value  */
var arhay = [1, 4, 6, 3, 7, 3];
arhay[4] = 67
console.log(arhay);

/* you can also use the bracket notation to select 
elements inthe the multi-layered arrays of arrays */

var arfay = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14, 15]];

var arlay = arfay[3][0];
console.log(arlay);

/* the push function adds another array to the end of the array */
var myArray = [['stacy', 'ret', 'leep']];
myArray.push(['real', 'cat']);
console.log(myArray);

/* the pop function is used to remove the array from an element */
var myArray = [1, 4, 6, 3, 7, 3];
var removeArray = myArray.pop()
console.log(myArray);

/* the shift array removes the first element in the array unlike the pop
which removes the last element in the array */
var myArray = [1, 4, 6, 3, 7, 3];
var removeArray = myArray.shift()
console.log(myArray);

/* the unshift adds an element to the beginning of the array unlike the
push which adds to the end of the element */
var ourArray = ['rent', 'cat', 'welth'];
ourArray.shift()
ourArray.unshift('happy')
console.log(ourArray);


// var myList = [[ceareal, 5], [milk, 5], [banana, 7], [juices, 2], [eggs, 6]];
// this is an array of array

function reusableContent() {
    console.log('hello ma nigga');
}

reusableContent();

// parameters are values that acts as placeholders that are to be inputed into 
// a funtion when it is called

function mat(a, b) {
    console.log(a - b);
}

mat(10, 2)

/* scope reffers to the visibility of variables
global scope means they can be seen everywhere in your JS code
and they are the ones defined outside of the funtion block
GLOBAL SCOPE */

// a global scope
var global = 10;

function fun1() {
    
    // if u use a var keyword in this function it would be scoped to this function
    // but since there is no var keyword it becomes a global var
    oopsglobal = 5;


}

function fun2() {
    
    var output = '';
    if (typeof global != "undefined"){
        output += "myGlobal " + global;
    }

    if (typeof oopsglobal != "undefined"){
        output += "oopsGlobal " + oopsglobal;
    }

    console.log(output);
}

fun1()
fun2()

// local scope declared within the function can only be seen wiithin the function hence local scope
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}

myLocalScope();
// console.log(myVar);

// LOCAL SCOPE AND GLOBAL SCOPE

// Global var
var outerWear = 'T-shirts';

function clothings() {

    // local var took precedence over the global var
    var outerWear = 'socks';

    return outerWear;
}

console.log(clothings());
console.log(outerWear);

// return a value from a function with return
function minusSeven(num) {
    
    return num - 3;
}

console.log(minusSeven(10));

// 
var changed = 0;

function change(num) {
    return (num + 50) / 30;
}

changed = change(1000);

console.log(changed);

function trueOrFalse(wasThatTrue) {
    
    if (wasThatTrue) {
        return 'hell, yeah itssssssss true';
    }
    return 'nah, brah doooooooooooooossso better';

}
console.log(trueOrFalse(true));

// COMPARISON WITH THE EQUALITY OPERATOR
function testEqual(val) {
    if (val == 12) {
        return 'equals';
    }
    return 'not equal';

}
console.log(testEqual(12));

// COMPARISON WITH THE STRICT EQUALITY OPERATOR
function testEquals(val) {
    if (val === 12) {
        return 'yes, its equal';
    }
    return 'no, it not true';

}
console.log(testEquals(12));

// PRACTICE COMPARING DIFFERENT VALUES
// equality 
function compareEquality(a, b) {
    if (a == b) {
        return 'yeah, gud one';
    }
    return 'no';

}
console.log(compareEquality(12, '12'));

// strict equality
function comparEquality(a, b) {
    if (a === b) {
        return 'yeah';
    }
    return 'not true';

}
console.log(comparEquality(12, '12'));

// inequality operator
function comparesEquality(val) {
    if (val != 99) {
        return 'not equal';
    }
    return 'no no equal';

}
console.log(comparesEquality(12));

// strict inequality operator
function comparEqualidy(val) {
    if (val !== 99) {
        return 'not so much Equal';
    }
    return 'its equal';

}
console.log(comparEqualidy(12));

// for greater than aswell
// the less than works this way as well
function testGreaterThan(val) {
    if (val > 100) {
        return 'over 100'
    }
    if (val > 10) {
        return 'over 10'
    }
    return '10 or under'
}
console.log(testGreaterThan(4));

// using the greater than or equal to operator
// the less than works this way aswell
function greaterThanOrEqual(val) {
    if (val >= 100) {
        return '100 and running'
    }   
    if (val >= 10) {
        return '10 and running'
    }   
    return 'below that brah'

}
console.log(greaterThanOrEqual(100));

// test AND operator
function testLogicalAnd(val) {
    if (val >= 50 && val <= 25) {
        return 'true bruh'
    }
    return 'nope'
    
}
console.log(testLogicalAnd(30));

// test OR operator
function testLogicalOr(val) {
    if (val < 25 || val > 50) {
        return 'YES'
    }
    return 'NOPE'
    
}
console.log(testLogicalOr(36));

// TEST else
function testElse(val) {
    if (val > 5) {
        return 'bigger than 5'
    } else {
        return '5 or smaller'
    }

}
console.log(testElse(30));

// elseIf statement
function testElseIf(val) {
    if (val > 50) {
        return 'bigger than 50'
    } else if (val > 30) {
        return 'bigger than 30'
    } else {
        return 'prolly smaller who knows'
    }

}
console.log(testElseIf(400));

// chained else if statement
// switch statements
function switchState(val) {
    var answer = '';
    switch (val) {
        case 1:
            answer = 'Alpha';
            break;
        case 2:
            answer = 'Omega';
            break;
        case 3:
            answer = 'beta';
            break;
        case 4:
            answer = 'gamma';
            break;
        default:
            answer = 'stuff innit';
            break;
    }
    return answer;

}
console.log(switchState(5));

// the same output for multiple swicth statement
function identical(val) {

    var answer = '';

    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = 'low'
            break;

        case 4:
        case 5:
        case 6:
            answer = 'mid'
            break;
        case 7:
        case 8:
        case 9:
            answer = 'High'
            break;
        default:
            // answer = 'juy'
            break;
    }
    return answer;

}
console.log(identical(8));

// OBJECTS
var myDog = {
    'name': 'castro',
    'legs': 1,
    'tail': 2,
    'hair': [53, 43]
}
console.log(myDog);

// accesing objects with dot notations
var testObj = {
    'hat': 'baseball',
    'shirts': 'T-shirts',
    'shoes': 'cleats'
}

var hatValue = testObj.hat;
var shirtsValue = testObj.shirts;

// accesing objects with bracket notations which can be used anytime
// but it is required if it has a space in it
var testObj = {
    'a hat': 'baseball',
    'a shirts': 'T-shirts',
    'a shoes': 'cleats'
}

// var hartValue = testObj.['a hat'];
// var shirtValue = testObj.['a shirts'];

// Edit a given property
var myDog = {
    'name': 'castro',
    'legs': 1,
    'tail': 2,
    'hair': [53, 43]
}
myDog.legs = 65
console.log(myDog);

// Adding properties to objects
var myDog = {
    'name': 'castro',
    'legs': 1,
    'tail': 2,
    'hair': [53, 43]
}
myDog['cat'] = 65;
console.log(myDog);

// deleting properties to objects
var myDog = {
    'name': 'castro',
    'legs': 1,
    'tail': 2,
    'hair': [53, 43]
}
delete myDog.tail
console.log(myDog);

function phoneticsLookup(val) {
    
    var bars = '';

    // switch (val) {
    //     case 'alpha':
    //         return 'Adams';
    //         break;
    //     case 'bravo':
    //         return 'boston';
    //         break;
    //     case 'charlie':
    //         return 'confirm';
    //         break;
    //     case 'delta':
    //         return 'dogs';
    //         break;
       
    // }

    var lookup = {
        'alpha': 'Adams',
        'bravo': 'boston',
        'charlie': 'confirm',
        'delta': 'dogs'
    };

    result = lookup[val]

    return bars;
}

console.log(phoneticsLookup('delta'));


// checking if an object has a particular property
var myObj = {
    gift: 'ponty',
    cap: 'baseball',
    well: 'river'
};

function checkObj(chekProps) {
    if (myObj.hasOwnProperty(chekProps)) {
        return myObj[chekProps]
    }
    return 'not found'
}

console.log(checkObj('vh'));

// you can put an object inside an array and arrays inside the objecysts
// Accessing nested objects
var myStorage = {
    car: {
        inside: {
            'glove box': 'map'

        },
        oustide: {
            'yeah yes': 'nopppe'
        }
    }

}
var yeahcontent = myStorage.car.oustide['yeah yes'];
console.log(yeahcontent);

// ACCESSING NESTED ARRAYS
var myPlants = [
    {
        type: 'flowers',
        list: [
            'rose',
            'dandelions',
            'violets'
        ]
    },
    {
        type: 'trees',
        list: [
            'barks',
            'trunks',
            'roots'
        ]
    }

];
var dand = myPlants[1].list[2];
console.log(dand);

// ITERATE WITH WHILE LOOP
var myArray = [];

var i = 0;
while (i < 5) {
    myArray.push(i)
    i++

}
console.log(myArray);

// for loop
var ourArray = [];

for (var i = 1; i < 7; i++) {
    ourArray.push(i);
    
}
console.log(ourArray);

// for loop in even no
var ourArray = [];

for (var i = 0; i < 13; i+= 2) {
    ourArray.push(i);
    
}
console.log(ourArray);

// for loop in odd no
var ourArray = [];

for (var i = 1; i < 13; i+= 2) {
    ourArray.push(i);
    
}
console.log(ourArray);

// for loop in backwards counting
var ourArray = [];

for (var i = 20; i > 1; i -= 2) {
    ourArray.push(i);
    
}
console.log(ourArray);

let loadind = 1;

while (loadind < 20) {
    console.log('hello i comming');

    loadind ++
}

var myArray = [1, 4, 7, 12, 13];
var total = 0;

for (let i = 0; i < myArray.length; i++) {
    total += myArray[i]
    
}
console.log(total);


var mke = 'fgbhnjm'
console.log(mke);

// DO WHILE LOOPS
arr = [];
var i = 10;
//  the do will do it once then obey the while loop
do {
    arr.push(i);
    i++
} while (i < 5);
console.log(arr, i);

// OBJECTS
var contactInfo = [
    {
        name: 'isaiah',
        food: 'soup',
        likes: ['balls', 'cage', 'carnivals']
    },
    {
        name: 'john',
        food: 'soups',
        likes: ['eggs', 'cage', 'carnivals']
    }
]

function lookup(name, prop) {
    for (let i = 0; i < contactInfo.length; i++) {
        if (contactInfo[i].name === name) {
            return contactInfo[i][prop] || 'no such props';
        }
    }
    return 'missed pout';

}
var data = lookup('john', 'likes');
console.log(data);


// GENERATE RANDOM FRACTION
function randomFraction() {
    
    return Math.random();

}
console.log(randomFraction());

// MEKE WHOLE NO. 
function randomWhole() {
    
    return Math.floor(Math.random() * 10)

}
var seen = randomWhole();
console.log(seen); 

// range of whole no
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var  random = randomRange(6, 15)
console.log(random);

// ternary operation
function checkEquals(a, b) {
    return a === b ? true : false;
}

var check =checkEquals(2, 2)
console.log(check);

// Multiple ternary operator
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
var sign = checkSign(0)
console.log(sign);

// VAR AND LET KEYWORD
// Var it is declared globally or locally if declared innside a fun()
// let is limited to the block statement its declared in
const mark = "kill him";

function names() {
let mark = "dfhghj"
    console.log(mark);
}
names()
console.log(mark);

// Object.freeze
// var object = function(a, b) {
//     return a.concat(b)
// }
// console.log(object(21, 45));

// var object = (a, b) => return a.concat(b);

// console.log(object(21, 45));



