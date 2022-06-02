/*
Autor: Ntyam Adjomo Francky Ludovic

App Name: Calorie Calculator

Challenge: Create the program that will help us to determine the actual and ideal calories we consumed after a week. It will return a message based on if you ate too much or too little.
*/



// step 1: Create a function named "totalCaloriesByDay" without parameter .
// step 2: Create the array content the seven days of the week In the function .
// step 3: declare a variable to hold the total of calories for one week.
//step 4: Use for loop:
        //  - to display each day with the number of calories eating.
        //  - create an html <p> element
        // - Appends teh <p> element to the HTML element with an ID of detail.

function totalCaloriesByDay(){
    const weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday", "Sunday"];
    let total = 0;
    for ( let i = 0; i < weekDay.length; i++ ) {
        
        let calorieNum = prompt(`Enter the calorie you have eaten on ${weekDay[i]} `);
        let p =  document.createElement("p");
        p.textContent  = `Calories eat on ${weekDay[i]} is : ${calorieNum}`;
        document.getElementById("detail").appendChild(p);
        total += parseInt(calorieNum);
    }
    document.getElementById("totalcalories").innerHTML = total;
    return total;

    
   
}
// step 5: Assign the function enterCaloriesByDay to the HTML element with an ID of "totalcalories ".



// step 6: create a function named getIdealCalories with no parameters
      // - Inside the function, declare a variable named idealDailyCalories and set its value to your ideal calories consumed per day. Then return the idealDailyCalories multiplied by 7.
const getIdealCalories = () => {
    /* Did you know that food label calorie percentages are based off a 2,000 calorie a day diet? Well, depending on many factors the amount of calories you should consume on a daily basis may be much higher or lower than this.
    */ 
    const idealDailyCalories = 2000;
    return idealDailyCalories * 7;
}

// step 7: Create a function named determineHealthPlan with no parameters.
  //- Inside the function, create variable named idealCalories, set equal to getIdealCalories() function call. Then, create another variable named actualCalories set equal to the totalCaloriesByDay() function call.
 // step 8: we can write a few if/else statements to output the result to console.

 const determineHealthPlan = function() {
     let idealCalories = getIdealCalories();
     let actualCalories = totalCaloriesByDay();
     if (actualCalories == idealCalories){
         return "You ate just the right amount of food!";
     }
     if (actualCalories > idealCalories){
         return "Time to head to the gym!";
     }
     if (actualCalories < idealCalories){
         return "Time for seconds!";
     }

 }

 document.getElementById("advise").innerHTML = determineHealthPlan();