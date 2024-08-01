
// 스코프
//1. 출력값과 출력되는 값의 이유를 설명해주세요
// yuno2 출력. myName() 내에서 var name = yuno2로 바꿔줬기 때문에

var name = "yuno";

function myName(){
    var name = "yuno2";
    function a(){
        console.log(name);
    }
    return a();
}

myName();

//2. 출력값과 출력되는 값의 이유를 설명해주세요
// 2출력. if 조건문 내에서 var x = 2로 바꿔줬기 때문에

function test() {
    var x = 1;

    if(true){
        var x = 2; 
    }

    console.log(x);
}

test();


//3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.
// 화살표 함수는 일반함수와 다르게 호출될 때 호출한 객체를 가리키지 않기 때문에?

const nameObj  = {
    name: "yuno",
    method: function() {
        const arrow = () => {
            console.log(`화살표 함수 : ${this.name}`);
        };
        function normal() {
            console.log(`일반 함수 : ${this.name}`);
        }
        arrow();
        normal();
    }
};

nameObj.method();

