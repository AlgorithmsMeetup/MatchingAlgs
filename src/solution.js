window.solve = function(input) {
  var humanPrefs = input.humans;
  var puppyPrefs = input.puppies;
  var humans = _.keys(humanPrefs);
  var puppies = _.keys(puppyPrefs);
  var matchByHuman = {};
  var matchByPuppy = {};
  var matchedAll = false;

  // Log out people and puppes
  console.log('Humans: ', humans);
  console.log('Puppies: ', puppies);

  //Log out preferences
  console.log('Human Preferences: ', humanPrefs)
  console.log('Puppy Preferences: ', puppyPrefs);

  //Naieve first solution: just match human at index i with puppy at index i
  while (!matchedAll) {
    for (var human_index in humans) {
      var human = humans[human_index]
      var puppy = puppies[human_index]
      matchByHuman[human] = puppy;
      matchByPuppy[puppy] = human;
    }
    matchedAll = true;
  }

  var solution = prepareSolution(matchByHuman, matchByPuppy)
  console.log('Your solution should look like this:', solution)
  return solution
};


function prepareSolution(humanMatches, puppyMatches) {
  solution = [];
  for (puppy in puppyMatches) {
    human = puppyMatches[puppy];
    solution.push({
      human: human,
      puppy: puppy
    });
  }
  return solution
}  
