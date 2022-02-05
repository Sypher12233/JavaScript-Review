let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below

for (let crewMember in spaceship.crew){
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}
for (let cr3wMember in spaceship.crew){
  console.log(`${spaceship.crew[cr3wMember].name}: ${spaceship.crew[cr3wMember].degree}`);
};



/*TWITTER HANDLE:-------AS ALLWAYS, FEEL FREE TO DM ME ON TWITTER @uzairkhan123221 REGARDING ANY ISSUES :) ————*/


  
