$(document).ready(function () {

    // GLOBAL VARIABLES
    // =================================================================

    // Scores (Current and Target)
    var crystalSumTotal = 0;
    var randomTargetValue = 0;

    // Wins and Losses
    var win = 0;
    var loss = 0;

    // Crystal Object
    var crystal = {
        blue:
            {
                value: 0
            },
        green:
            {
                value: 0
            },
        red:
            {
                value: 0
            },
        yellow:
            {
                value: 0
            }
    };

    // FUNCTIONS
    // =================================================================

    // Helper Function for getting random numbers
    function generateRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

        // Check if User Won or Lost and Reset the Game
    function checkWin() {

        // Check if crystalSumTotal is larger than randomTargetValue
        if (crystalSumTotal > randomTargetValue) {
            alert("Sorry. You lost!");
            console.log("You Lost");

            // Add to Loss Counter
            loss++;

            // Change Loss Count HTML
            $("#loss-count").text(loss);

            // Restart the game
            start();
        }

        else if (crystalSumTotal === randomTargetValue) {
            alert("Congratulations! You Won!");
            console.log("You Won!");

            // Add to the Win Counter
            win++;

            // Change Win Count HTML
            $("#win-count").text(win);

            // Restart the game
            start();
        }

    };

    // Respond to clicks on the crystals
    function addClickedCrystals(clickedCrystal) {

        // Change crystalSumTotal
        crystalSumTotal += clickedCrystal.value;

        // Change the HTML to reflect changes in crystalSumTotal
        $("#crystals-sum-total").text(crystalSumTotal);

        // Call the checkWin Function
        checkWin();

        // Testing Console
        console.log("Your Score: " + crystalSumTotal);
    };

    // Starts the Game (and restarts the game)
    function start() {

        // Set a new Target Score (between 19 and 120)
        randomTargetValue = generateRandomValue(20, 100);

        // Set different values for each of the crystals (between 1 and 10)
        crystal.blue.value = generateRandomValue(1, 10);
        crystal.red.value = generateRandomValue(1, 10);
        crystal.green.value = generateRandomValue(1, 10);
        crystal.yellow.value = generateRandomValue(1, 10);

        // Reset the Crystal Sum Total
        crystalSumTotal = 0;

        // Change the HTML to reflect all of these changes
        $("#crystals-sum-total").text(crystalSumTotal);
        $("#random-target-value").text(randomTargetValue);


        // Testing Console
        console.log("-----------------------------------");
        console.log("Target Score: " + randomTargetValue);
        console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value +
            " | Yellow: " + crystal.yellow.value);
        console.log("-----------------------------------");
    };
    
    // MAIN PROCESS
    // =================================================================

    // Starts the Game the First Time.
    start();

    $("#blue").click( () => {
        addClickedCrystals(crystal.blue);
    });

    $("#red").click( () => {
        addClickedCrystals(crystal.red);
    });

    $("#green").click( () => {
        addClickedCrystals(crystal.green);
    });

    $("#yellow").click( () => {
        addClickedCrystals(crystal.yellow);
    });
});
