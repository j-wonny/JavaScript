//console.log('Hello Codeit!')

//변수 선언
/*
let espressoPrice = 3000;
let lattePrice = 4000;
let mochaPrice = 4800;

console.log(espressoPrice * 2);
console.log(lattePrice * 4 + mochaPrice * 2);
console.log(lattePrice + mochaPrice);
console.log(espressoPrice + lattePrice * 4 + mochaPrice * 2);
console.log(lattePrice * 3);
*/

/*
//함수 선언
function greetings() {
  console.log('Hi');
  console.log('안녕');
  console.log('こんにちは');
  console.log('你好');
  console.log('Guten Tag');
  console.log('Bonjour');
  console.log('Buongiorno');
}

//함수 호출
greetings();
*/

/*
//파라미터
function welcome(name) {
  console.log('Hello ' + name + '!');
};

welcome('James');
welcome('Apple');

function printSquare(x){
  console.log(x * x);
};

printSquare(2);
printSquare(5);
printSquare(6);
*/

/*
//여러 개의 파라미터
function printSum(num1, num2){
  console.log(num1 + num2);
};

printSum(123, 4);
printSum(56, 7890);

function introduce(name, birth, nationality, job) {
  console.log('안녕하세요! 반갑습니다!');
  console.log('제 이름은 '+ name + ' 입니다.');
  console.log('생년월일은 ' + birth + ' 이고,');
  console.log('국적은 ' + nationality + ' 입니다.');
  console.log('직업은 ' + job + ' 입니다.');
  console.log('잘 부탁드립니다!');
};

introduce('라온', '17.04.12', '한국', '사랑둥이');
*/

/*
//return문
function getTwice(number){
  return number * 2;
};

let x = getTwice(5);
let y = getTwice(2);

console.log(x * y);
*/

/* 23/01/10
//01. 숫자형
//사칙연산
//더하기
console.log(2 + 5);
//빼기
console.log(1 - 2);
//곱하기
console.log(2 * 3);
//나누기
console.log(10 / 2);
//거듭제곱과 나머지 연산 가능
//거듭제곱
console.log(2 ** 3);
//나머지
console.log(7 % 3);
//사칙연산의 우선순위를 따름
console.log(2 + 3 * 2);
console.log((2 + 3) * 2);

//03. 문자열
console.log('char');

//04. 문자열 활용
console.log("He said \"I'm Iron man\"");
console.log('He said "I\'m Iron man\"');
console.log("He said \"I\'m Iron man\"");
console.log('He said \"I\'m Iron man\"'); // \사이의 문자를 기호로 인식\

console.log(`He said "I'm Iron man"`);

// 문자열 연산
console.log('Hello'+'World!');
console.log('3'+'5');

//08. 불린형
console.log(2 > 3);
console.log(2 < 1);
console.log(3 >= 2);
console.log(3 <= 2);
console.log(3 === 3);//일치한다, 같다
console.log(3 !== 3);//!는 not을 의미, 일치하지 않는다, 다르다

console.log('Flower' === 'Flower');
console.log('Flower' !== 'Flower');

//자바스크립트의 불린 연산
//and(&&)
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

//or(||)
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//not(!)
console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);
*/

/* 23-01-13
//11. typeof 연산자
//지금 쓰고 있는 값이 어떤 자료형인지 문자열로 반환
console.log(typeof 101);
console.log(typeof 'Codeit');
console.log(typeof true);

//변수나 함수에도 활용 가능
let name = 'JS';
function sayHello(){
  console.log('Hello');
};
console.log(typeof name);
console.log(typeof sayHello);

//typeof 연산자의 연산식
console.log(typeof 'Hello' + 'JS'); //stringJS
console.log(typeof 8 - 3); //NaN : not a number
// 결과 이유 : 연산의 순서가 의도한 대로 나오지 x
// typeof 연산자는 사칙연산자보다 우선순위가 높음.
// ()를 활용하여 연산자 우선순위를 높여줘야 함.
console.log(typeof ('Hello' + 'JS'));
console.log(typeof (8 - 3));
// typeof도 연산자이기 때문에 연산자 우선순위를 고려해야 함.

console.log(typeof typeof (3 + 5));

//14. 형 변환 1
//형 변환(Type Conversion)
//숫자 -> 문자
let x = 123;
console.log(x);
console.log(String(x));
console.log(typeof x);
console.log(typeof String(x));

console.log('');

//불린 -> 문자
let y = true;
console.log(y);
console.log(String(y));
console.log(typeof y);
console.log(typeof String(y));

//문자 -> 숫자
let x = '문자';
console.log(x);
console.log(Number(x)); //NaN, 문자열이 숫자형태면 형변환 가능
console.log(typeof x);
console.log(typeof Number(x));

console.log('');

//불린 -> 숫자
let y = true;
console.log(y);
console.log(Number(y)); //true는 1, false는 0으로 형변환
console.log(typeof y);
console.log(typeof Number(y));


//문자 -> 불린
let x = '문자';
console.log(x);
console.log(Boolean(x)); //''는 false
console.log(typeof x);
console.log(typeof Boolean(x));

console.log('');

//숫자 -> 불린
let y = 123;
console.log(y);
console.log(Boolean(y)); //0, NaN은 flase
console.log(typeof y);
console.log(typeof Boolean(y));
// '', 0, NaN은 false <- falsy

//16. 형 변환 2
//자바스크립트는 연산을 할 때 일정한 규칙에 따라
//자동으로 형변환하는 특징이 있음

//산술 연산(+, -, *, /, %, **) 
//연산되어지는 두 값을 모두 숫자형으로 변환한 다음 연산
//
console.log(4 + '2'); //주의 : 문자열을 연결하는 기능도 있음
console.log(4 + 2);
console.log(4 - true);
console.log(4 - false);
console.log(4 * false);
console.log(4 / '2');
console.log('4' ** true);
console.log(4 % 'two'); //NaN 출력

//관계 비교 연산(<, <=, >, >=)
//특별한 경우를 제외하면 두 값을 숫자형으로 변환한 다음 비교
console.log(2 < '3');
console.log(2 > true);
console.log('2' <= false);
console.log('two' >= 1); //flase 출력, 'two'가 NaN으로 변환되어 두 값을 비교x

//같음 비교 연산(===, !==, ==, !=)
console.log(1 === '1'); //일치, 불일치(!==)
console.log(1 === true);//일치 비교는 형변환이 일어나지 x
console.log(1 == '1'); //동등, 부등(!=)
console.log(1 == true);//동등 비교는 숫자형으로 형변환이 일어남.

console.log(5 % 2 === Boolean(2) * true);

//18. 템플릿 문자열(template strings)
// template : 일정한 틀, 형식
let year = 2018;
let month = 3;
let day = 11;

console.log('생년월일은 ' + year + '년 ' + month + '월 ' + day + '일 입니다.');
console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`);

let myNumber = 3;

function getTwice(x){
  return x * 2;
};

console.log(`${myNumber}의 두 배는 ${getTwice(myNumber)}입니다.`);

//20. null과 undefined
//'값이 없다'
//null : 의도적으로 '값이 없다'를 표현할 때 사용/의도적인 없음
//undefined : 값을 실행하면서 '값이 없다'는 것을 확인하는 값/처음부터 없음

let x;
console.log(x);
let y = x;
x = null;
console.log(y);
console.log(x);
x = y;
console.log(x);
*/