// var favoriteFood = "fried pickles";
// if ( favoriteFood === "fried pickles" || favoriteFood === "peperoni rolls") {
// console.log ("congrats you have excellent taste");
// }

// var 1+1 ==<5
// if (1+1 ==<5)
// {console.log ("true fact")
// }

// Use JavaScript to check and see if the following comparisons are true. For each of the following, log "True fact!" to the console if the condition evaluates to true and "LIES!" to the console if it doesn't.
// Is the sum of 1 and 1 greater than 5?
// Is the product of 4 and 5 less than our equal to 20?
// Is the difference between 6 and 2 greater than or equal to 0?

// In your JavaScript file, write a while loop that outputs the phrase “TWEET TWEET” 100 times to the console.

// var  birdCounter = 0

// while (birdCounter <= 100){
//     console.log ("tweet tweet")
//     birdCounter = birdCounter 
// + 1;
// }

// for(var i = 0; i < 100; i++){console.log (i,"tweet tweet")}

// var cohortOneStudents = ["Sable","David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]

//  for(var i = 0; i < 14; i++) {console.log (cohortOneStudents[i])
//  }

// 2. Interests
// In your JavaScript file, create an array of 5 of your interests.
// Loop through the interests and console log the phrase "One of my interests is: [your interest]." for each of the interests in your array.
// Output:
// One of my interests is: hiking.
// One of my interests is: coding.
// One of my interests is: math.
// One of my interests is: 30 Rock.
// One of my interests is: pizza.

var interests = ["old school games", "history", "music", "philosophy", "science"]

// for(var i = 0; i < 5; i++ ){
//     console.log ("i enjoy", interests[i],)
// }


// 3. Favorite Interest
// Refactor your loop from the previous exercise. Pick one of your interests as your absolute favorite interest. Add a conditional to your loop to check if each interest in the array is your favorite. When the loop gets to your favorite interest, it should print "My absolute favorite interest is:" followed by the name of your interest. Any other interests can be printed the same way that they were in the previous exercise.
// Output:
// One of my interests is: hiking.
// My absolute favorite interest is: coding.
// One of my interests is: math.
// One of my interests is: 30 Rock.
// One of my interests is: pizza.

 for (var i = 0; i < 5; i++) {
     if (interests[i] === "old school games") {
         console.log("absolute favorite", interests[i])
     }
     else {
        console.log("i enjoy", interests[i])
   }

// }


