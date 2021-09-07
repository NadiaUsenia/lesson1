// Задание 1
let str1 = 'aaa@bbb@ccc';
console.log(str1.replace(/@/g, '!'));
// Задание 2 В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
let date2 = '2025-12-31';
let arr2 = date2.split('-');
let newDate = arr2[2] + '/' + arr2[1] + '/' + arr2[0];
console.log(newDate);

// Задание 3

let str3 = 'Я учу javascript!';
let sub3 = str3.substr(2, 14);
let substring3 = str3.substring(2, 15);
let slice3 = str3.slice(2, -1);
console.log(sub3, substring3, slice3);

// Задание 4

let arr4 = [4, 2, 5, 19, 13, 0, 10];
let sum4 = 0;
for (let i = 0; i < arr4.length; i++) {
    sum4 += Number(Math.pow(arr4[i], 3))
}
console.log(Math.sqrt(sum4));

// Задание 5
let a = 3,
    b = 5;
let c = a - b;
console.log(Math.abs(c));

// Задание 6

var date = new Date();
function getZero(num){
	if (num > 0 && num < 10) { 
		return '0' + num;
	} else {
		return num;
	}
}

console.log(getZero(date.getHours()) + ':' + getZero(date.getMinutes()) + ':' + getZero(date.getSeconds()) + ' ' + getZero(date.getDate()) + '.' + getZero(date.getMonth() + 1) + '.' + date.getFullYear());

// Задание 7

let str7 = 'aa aba abba abbba abca abea';
console.log(str7.replace(/ab+a/g, '!')); 

// Задание 8
function ValidateUSPhoneNumber(phoneNumber) {
    var regExp = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
    var phone = phoneNumber.match(regExp);
    if (phone) {
      console.log('yes');
      return true;
    }
    console.log('no');
    return false;
  }
  
// Задание 9

function ValidateEmail(email) {
  var regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var email9 = email.match(regExpEmail);
  if (email9) {
    console.log('yes');
    return true;
  }
  console.log('no');
  return false;
}
// Задание 10
