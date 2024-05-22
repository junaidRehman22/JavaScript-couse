// using variables how we concatenate two or more "strings"
// const firstName = "junaid";
// const repoCount = 7;
// console.log(firstName + repoCount + "value");
// console.log(firstName + repoCount + " value");
// This syntax i'am not recommended for anyone because this is outdated.In modern days no one is using this method .

// console.log(`hello my name is ${firstName}, and my repocount is ${repoCount}`);
// Another method to declare strings 

const gameName = new String("junaid-rehman")
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// and interesting thing is that it does not change the original value because of stack memory.........
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('r'));

// const newString = gameName.substring(0 , 8);
// console.log(newString);

// const anotherString = gameName.slice(-12 , 8);
// console.log(anotherString);

const newStringOne = "  junaid   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = 'https//junaid.com//junaid%20rehman'
console.log(url.replace('%20' , '-'));
console.log(url.includes('junaid'));

console.log(gameName.split('-'));

