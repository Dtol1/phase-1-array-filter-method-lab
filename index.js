// Code your solution here
function findMatching(drivers, string){
    return drivers.filter(function (drivers) {
        return drivers.toLowerCase() === string.toLowerCase()

    })
    
} 

//fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, 
//and returns all drivers whose names begin with the provided letters.

// it('returns a driver if beginning provided letters match', function () {
    //expect(fuzzyMatch(drivers, 'Sa')).to.have.members(['Sammy', 'Sarah', 'Sally']);
//});

function fuzzyMatch(drivers, string){
    return drivers.filter(drivers => drivers.toLowerCase().substring(0,2) === string.toLowerCase())

}

//matchName - This function takes an array of driver objects and a string as arguments. 
//Each driver object has two properties: name and hometown. 
//The function should return each element whose name property matches the provided string argument.

// describe('matchName()', function () {
//     it('accesses the data structure to check if name matches', function () {
//       const drivers = [
//         {
//           name: 'Bobby',
//           hometown: 'Pittsburgh' },
//         {
//           name: 'Sammy',
//           hometown: 'New York' } ,
//         {
//           name: 'Sally',
//           hometown: 'Cleveland' },
//         {
//           name: 'Annette',
//           hometown: 'Los Angeles' },
//         {
//           name: 'Bobby',
//           hometown: 'Tampa Bay' }
//       ];

//       expect(matchName(drivers, 'Bobby')).to.eql([
//         {
//           name: 'Bobby',
//           hometown: 'Pittsburgh'
//         },
//         {
//           name: 'Bobby',
//           hometown: 'Tampa Bay'
//         }
//       ]);
//     });
//   });
// });


function matchName(drivers, string){
    return drivers.filter(drivers => drivers.name === string) 
}


















