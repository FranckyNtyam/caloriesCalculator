/*
Autor: Ntyam Adjomo Francky Ludovic

App Name: Calorie Calculator

Challenge: Create the program that will help us to determine the actual and ideal calories we consumed after a week. It will return a message based on if you ate too much or too little.
*/



// step 1: Create a function named "enterCaloriesByDay" without parameter .
// step 2: Create the array content the seven days of the week In the function .
// step 3: declare a variable to hold the total of calories for one week.
//step 4: Use for loop:
        //  - to display each day with the number of calories eating.
        //  - create an html <p> element
        // - Appends teh <p> element to the HTML element with an ID of detail.

function enterCaloriesByDay(){
    const weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday", "Sunday"];
    let total = 0;
    for ( let i = 0; i < weekDay.length; i++ ) {
        
        let calorieNum = prompt(`Enter the calorie you have eaten on ${weekDay[i]} `);
        let p =  document.createElement("p");
        p.textContent  = `Calories eat on ${weekDay[i]} is : ${calorieNum}`;
        document.getElementById("detail").appendChild(p);
        total += parseInt(calorieNum);
    }

    return total;
   
}
// step 5: Assign the function enterCaloriesByDay to the HTML element with an ID of "totalcalories ".

document.getElementById("totalcalories").innerHTML = enterCaloriesByDay();

// step 6: create a function named getIdealCalories with no parameters
      // - Inside the function, declare a variable named idealDailyCalories and set its value to your ideal calories consumed per day. Then return the idealDailyCalories multiplied by 7.
const getIdealCalories = () => {
    const idealDailyCalories = 2000;
    return idealDailyCalories * 7;
}

