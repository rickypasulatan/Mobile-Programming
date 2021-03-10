/*Name : Pasulatan, Ricky
Parallel : B*/

//Array Exercises
console.log("Array Exercises")
let people = ["Greg", "Mary", "Devon", "James"];

//Nomor 1
console.log("\n Nomor 1 : ")
for (let i=0; i<people.length; i++){
    console.log (people[i]);
}

//Nomor 2
console.log("\n Nomor 2 : ")
people.forEach(function(item) {
    console. log(item);
    });

//Nomor 3  
console.log("\n Nomor 3 : ")  
people.shift();
console.log(people)

//Nomor 4
console.log("\n Nomor 4 : ")
people.pop()
console.log(people)

//Nomor 5
console.log("\n Nomor 5 : ")
people.unshift("Matt");
console.log(people)

//Nomor 6
console.log("\n Nomor 6 : ")
people.push("Ricky");
console.log(people);

//Nomor 7
console.log("\n Nomor 7 : ")
for(let i=0; i<people.length; i++) {
    console.log(people[i])
    if(people[i] === "Mary") {
        break
    }
}

//Nomor 8
console.log("\n Nomor 8 : ")
let peopleCopy = people.slice (2)
console.log(peopleCopy)

//Nomor 9
console.log("\n Nomor 9 : ")
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie")
console.log(people)

//Nomor 10
console.log("\n Nomor 10 : ")
let withBob = people.concat("Bob")
console.log(withBob)

//Object Exercises
console.log("\n\nObject Exercises");
let programming = {
    languages : ["JavaScript", "Python", "Ruby"],
    isChallenging : true,
    isRewarding : true,
    difficulty : 8,
    jokes : "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
}

//Nomor 1
console.log("\n Nomor 1 : ")
programming.languages.push("Go")
console.log (programming)

//Nomor 2
console.log("\n Nomor 2 : ")
programming["difficulty"]=7
console.log (programming)

//Nomor 3
console.log("\n Nomor 3 : ")
delete programming.jokes
console.log (programming)

//Nomor 4
console.log("\n Nomor 4 : ")
programming.isFun = true
console.log (programming)

//Nomor 5
console.log("\n Nomor 5 : ")
programming.languages = programming.languages.map((el, idx) => `${idx} - ${el}`)
console.log (programming)

