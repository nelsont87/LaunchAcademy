// YOUR CODE GOES HERE

var crewNames = ["Nelson", "Bob", "Mary", "Kate"];


var launchpad = function(ship, array){
  var cap = ship.captain(crewNames);
  console.log(ship.name + " pre-flight check, green! " + cap + " is our captain!")
  ship.loadCrew(crewMembers);
  ship.mountPropulsion(rocket);
  rocket.addFuel(3);
  ship.takeoff();
};


var Ship = function(name){
  this.name = name;
  crew = [];
  this.loadCrew = function(array){
    for(var i = 0; i < array.length; i++){
      crew.push(array[i]);
      console.log(array[i].name + ' has boarded the ship');
    }
  }
  this.captain = function(arr){
    var randomCaptain = Math.floor(Math.random() * arr.length);
    return arr[randomCaptain];
  }
  propulsion = null;
  this.mountPropulsion = function(obj){
    propulsion = obj;
    console.log('Propulsion mounted')
  }
  this.takeoff = function(){
    if (fire(rocket)){
      console.log('whooossh');
    } else {
      console.log('Takeoff unsuccessful');
    }
  }
};
var ourShip = new Ship('Voyager');



var CrewMember = function(name){
  this.name = name;
  this.trained = false;
};

var trainCrew = function(array){
  var newArr = [];
  for(var i = 0; i < array.length; i++){
    var crew = new CrewMember(array[i]);
    crew.trained = true;
    newArr.push(crew);
  }
  return newArr;
};
var crewMembers = trainCrew(crewNames);

var rocket = {
  fuel: 0,
  addFuel: function(amt){
    this.fuel += amt;
  }
}
var fire = function(rocket){
  if (rocket.fuel === 0){
    console.log('Engines failed to fire');
    return false;
  } else {
    console.log('Engines have fired');
    rocket.fuel--;
    return true;
  }
}

console.log(crewMembers);

launchpad(ourShip);
