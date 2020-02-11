'use strict';

function jediName(firstName, lastName) {
  return `${lastName.slice(0,3)}${firstName.slice(0,2)}`;
}

console.log(jediName('Beyonce', 'Knowles'));

function beyond(num) {
  if(num === Infinity) { console.log('And beyond'); }
  else if(num > 0 && isFinite(num)) { console.log('To infinity'); }
  else if(num < 0 && isFinite(num)) { console.log('To negative infinity'); }
  else if(num === 0) {console.log('Staying home'); }
}

beyond(0);

function decode(word) {
  let code = ' ';
  if(word.charAt(0) === 'a') { code = word.charAt(1) }
  else if(word.charAt(0) === 'b') { code = word.charAt(2) }
  else if(word.charAt(0) === 'c') { code = word.charAt(3) }
  else if(word.charAt(0) === 'd') { code = word.charAt(4) }
  else { return code; }
  return code;
  
}

let message = 'craft block argon meter bells brown croon droop';
let newWord = message.split(' ').map( (word) => { return decode(word); }).join('');
console.log(newWord);

function daysInYear(month, leapYear) {
  let days;

  switch(month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August': 
  case 'October':
  case 'December':
    days = 31;
    break;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    days = 30;
    break;
  case 'February':
    days = 28;
    break;
  default:
    throw Error('Must provide a valid month');
  }

  if(leapYear === true ) { 
    return 'February has 29 days.';
  } 
  return `${month} has ${days} days.`;

}

console.log(daysInYear('Doggy'));