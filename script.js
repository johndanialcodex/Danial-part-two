console.log("Danial-Part-Two: August 27th, 2024");
console.log("");

let playerName= prompt("Welcome to GC mini golf! What is your name?") /* Prompting user for their name. */

console.log("Player's Name: " +playerName+"");

let numbersOfHols= prompt("Hi " +playerName+", Would you like to play 3 or 6 holes?"); /* prompting the user if they would like to play 3 or 6 holes of mini golf. */

let holeCount= 1; /* Variable for the number of holes */

let totalOfPutts= 0; /* Keep tracking of put pole ( track of cumulative score) */

let coursePar= 0; /* Decide whether the course par is 9 or 18 depending on the player choice (9 if they chose 3 holes, 18 if they chose 6)*/


/* If the player chooses three holes */
if (numbersOfHols == 3) {
    coursePar += 9
    console.log("" + playerName+" chose to play " + numbersOfHols +  " holes");
    for (let i = 0; i < numbersOfHols; i++) {
        let puttPerHolee = Number(prompt("How many putts for hole " +holeCount+"?"));
        totalOfPutts += puttPerHolee /* Cumulative putts */
        holeCount +=1 /* Tracking the numbers of holes Up to three holes */
        
    }
} 
/* If the player chooses six holes */
else if (numbersOfHols == 6) { 
    coursePar += 18 
    console.log("" + playerName+" chose to play " + numbersOfHols +  " holes");
    for (let i = 0; i < numbersOfHols; i++) {
        let puttPerHolee = Number(prompt("How many putts for hole " + holeCount + "?"));
        totalOfPutts +=puttPerHolee /* Cumulative putts */
        holeCount +=1 /* Tracking the numbers of holes Up to six holes */
        
    }
}

let totalPar= (3*numbersOfHols); /* total course par (9 if they chose 3 holes, 18 if they chose 6 — par is 3 for every hole) to calculate the golfer’s total par for the round.*/

console.log("Total course par: " +totalPar+ ""); /* Total course par */

let yourTotalPar= (totalOfPutts-totalPar) /* Player's total Putts */

console.log("" +playerName+ "' total putts: " +totalOfPutts+ "") /* Player's total Putts */

/* If even with par */
if (yourTotalPar == 0) {
    console.log("Good game " +playerName+", Your total par was: " +yourTotalPar+"");
    alert("Good game " +playerName+", Your total par was: " +yourTotalPar+".");
}
/*If under par */
else if (yourTotalPar < 0) {
    console.log("Great job " +playerName+", Your total par was: " +yourTotalPar+"");
    alert("Great job " +playerName+", Your total par was: " +yourTotalPar+".");
} 
/* If over par, */
else {
    console.log("Nice try " +playerName+", Your total par was: +" +yourTotalPar+"");
    alert("Nice try " +playerName+", Your total par was: +" +yourTotalPar+".");
}
