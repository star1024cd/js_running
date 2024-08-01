
//1. <빈칸>을 작성해주세요
const obj1 = {
    value: 20,
    getValue() {
        return this.value;
    }

}
console.log(obj1.getValue()); //  출력값 20


// 2. 웹 브라우저에서 setTimeout 함수 내에서 this가 가리키는 출력값이 왜 그런지 설명해주세요
// setTimeout 함수 내에서는 항상 전역 객체 window를 this 바인딩 하기 때문에?
const obj2 ={
    method : function(){
        console.log('첫번째 this : ',this);

        const innerMethod = () =>{
            setTimeout(function(){
                console.log('두번째 this : ' , this); 
            });
        }
        innerMethod();
    }
}

obj.method();


