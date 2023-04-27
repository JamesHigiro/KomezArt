const readline = require("readline");

const readInputFromUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readInputFromUser.question("Please enter the size of your array: ", (valueEntered) => {
    let theArray = []
    readInputFromUser.question("Enter the values separated by space: ", (values) => {
        theArray = values.split(' ').map((eachValue) => parseInt(eachValue)); // Parse each value as an integer

        if (theArray.length > valueEntered) {
            return console.log("Error: You are exceeding the array size you entered!")
        }

        let uniqueValue = 0;
        let occurrences = {};

        // Count occurrences of each element in the array
        for (let i = 0; i < theArray.length; i++) {
            if (occurrences[theArray[i]] === undefined) {
                occurrences[theArray[i]] = 1;
            } else {
                occurrences[theArray[i]]++;
            }



            let valueToBeSearched = theArray[i]





            if (theArray.indexOf(valueToBeSearched) === theArray.lastIndexOf(valueToBeSearched)) {
                uniqueValue = valueToBeSearched
            }






        }

        let uniqueElementCount = 0;

        // Check if there is exactly one element that occurs only once
        for (let key in occurrences) {
            if (occurrences.hasOwnProperty(key) && occurrences[key] === 1) {
                uniqueElementCount++;
                uniqueValue = parseInt(key);
            }
        }

        if (uniqueElementCount === 1) {
            delete occurrences[uniqueValue]; // Remove the unique value from the object
            for (let key in occurrences) {
                if (occurrences.hasOwnProperty(key) && occurrences[key] === 1) {
                    console.log("Error: Array contains more than one unique value!");
                    return;
                }
            }
            console.log(`the unique is : ${uniqueValue}`);
        } else if (uniqueElementCount === 0) {
            for (let key in occurrences) {
                if (occurrences.hasOwnProperty(key) && occurrences[key] === 1) {
                    console.log("Error: Array contains more than one unique value!");
                    return;
                }
            }
            console.log("All elements in the array are duplicates.");
        } else {
            console.log("Error: Array contains more than one unique value!");
        }
    });
});
