let msg1 = 'abc';
console.log(msg1.endsWith('c'));

//But
//It Gives error in ts
//In js intellicence does'nt works
let msg2;
msg2='abc';
console.log(msg2.endsWith('c'))

//It intellicence after type assertion But still gives error in ts
//Works fine in js
let msg3;
msg3='abc';
console.log((<string>msg3).endsWith('c'));
console.log((msg3 as string).endsWith('c'));

//Do not read comments in js file

