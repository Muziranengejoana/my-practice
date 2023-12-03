let name1 = "Maxwell wright";
const phone1 = '(0191) 719 6495';
let mail1 = "Curabitur.egestas.nunc@nonummyac.co.uk";

let name2 = "Raja Villarreal";
const phone2 = '0866 398 2895';
let mail2 = "Posuere.vulputate@sed.com";



let name3 = "Helen Richards";
const phone3 = '08001111';
let mail3 = "libere@convallis.edu";

console.log("Maxwell wright",'/(0191) 719 6495',"/Curabitur.egestas.nunc@nonummyac.co.uk.");
console.log("Helen Richards",'/08001111',"/libere@convallis.edu");

var globalGreeting  =  "Good  ";
 function testFunction()  {
          var  localGreeting  =  "Morning  ";    
         console.log("function:");
          console.log(globalGreeting);
         console.log(localGreeting);
 }
 testFunction();
console.log("main  program:");

// cheking the operetors
let str = "123";
let n1 = +str;
let n2 = -str;
let n3 = -n2;
let n4 = +"abcd";
console.log(`${str} : ${typeof str}`); // -> 123 : string
console.log(`${n1} : ${typeof n1}`); // -> 123 : number
console.log(`${n2} : ${typeof n2}`); // -> -123 : number
console.log(`${n3} : ${typeof n3}`); // -> 123 : number
console.log(`${n4} : ${typeof n4}`); // -> NaN : number
