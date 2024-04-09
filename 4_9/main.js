function funName() {
    console.log("함수 실행");
}
funName();

function returnFunc() {
    console.log("함수가 실행되었음");
    return 123;
}
const a = returnFunc();
console.log(a);

function sum(a,b) {
    return a+b;
}
const number = sum(1,2);
const number2 = sum(3,4);
const number3 = sum(5,6);

function hello() {
    console.log("hello");
}
hello();

const world = function () {
    console.log("hihi");
}
world();

function handler() {
    console.log("clicked!")
}

document.body.addEventListener('click', handler);
handler();
handler();
document.body.addEventListener('click', function() {

})

const object1 = {
    name : "geunyoung",
    age : 18,
    getName : function() {
        // return this.name;
    }
}
const hisName = object1.getName();
console.log(hisName);
console.log(object1.getName());

const isShow = true;
const checked = false;

if (isShow) {
    console.log("Show!");
    let ABC = "A";
} else {
    console.log("Hide?");
}
if (checked) {
    console.log("Checked!");
}
console.log(ABC);

// switch (condition) {
//     case value1:
//         state1;
//         break;
//     case value2:
//         state2;
//         break;
//     default:
//         state3;
// }
function caseInSwitch(val) {
    let answer = "";
    switch (val) {
        case 1:
            answer = "alpha"
            break;
        case 2:
            answer = "bravo"
            break;
    }
    return answer;
}
console.log(caseInSwitch(3));

function switchOfStuff(val) {
    let answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}
console.log(switchOfStuff(1));
console.log(switchOfStuff("a"));

function size(val) {
    let answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "LOW";
            break;
    }
}

function chainToSwitch(val) {
    let answer = "";
    if (val === "bob") {
        answer = "Marley";
    } else if (val === 42) {
        answer = "The Answer";
    } else if (val === 7) {
        answer = "byebye"
    }
    return answer;
}
function chainToSwitch2(val) {
    let answer = "";
    switch(val) {
        case "bob":
            answer = "Maley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 7:
            answer = ""
    }
}

for(let i=0;i<10;i++) {
    console.log(i);
}

const obj = {
    name : '이름',
    age : '나이'
}

for(const key in obj) {
    console.log(key);
    console.log(obj.name,obj.age);
    console.log(`key값: ${key}`);
    console.log(`value값: ${obj[key]}`);
}

const array = ['1번','2번','3번'];

for(const element of array) {
    console.log(element);
    console.log(array);
}

array.forEach((element)=>{
    console.log(element);
})

while(condition) {

}

do {

} while(condition)