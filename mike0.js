// Fetch and read the JSON file of Mike Tyson's opponents.

fetch('./ironmike.json')
    .then(response => response.json())
    .then(opponents => {
    // Loop through an array in the JSON data
        opponents.forEach(opponent => {
            
            console.log(`\n Mike Tyson's Big Fights: \n
            Name: ${opponent.oppName}
            Date: ${opponent.fightDate}
            Opponent Age: ${opponent.oppAge}
            Mike's Age: ${opponent.mikeAge}
            Mike's Result: ${opponent.result}
            Type of Win: ${opponent.winType}
            Round Ended: ${opponent.roundEnded}            
            `);
            console.log(fightAge(opponent.oppName, opponent.mikeAge));
            console.log(timeBetweenFights(opponent.fightDate));
            console.log(ageDifference(opponent.oppAge, opponent.mikeAge, opponent.oppName));
        });
    }
    )
    .catch(error => console.error(error));

    function fightAge(oppName, mikeAge) {
        return `Mike Tyson was ${mikeAge} when he fought ${oppName}` ;
    }

    function timeBetweenFights(fightDate) {
        let currentDate = new Date();
        let fightDateObj = new Date(fightDate);
        let diffTime = Math.abs(currentDate - fightDateObj);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        return `The fight was ${diffDays} days ago`;
    }

    function ageDifference(oppAge, mikeAge, oppName) {
        return `Mike Tyson was ${oppAge - mikeAge} years younger than ${oppName}`;
    }

    
// End program