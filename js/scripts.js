// business logic
var whichAnimal = function(animal) {
  if(animal === "Turtles") {
    return "#turtles";
  } else if(animal === "Snakes") {
    return "#snakes";
  } else {
    return "#frogs";
  }
}

// interface logic
$(document).ready(function() {
  $("#animals").submit(function() {
    event.preventDefault();
    var animalSelection = $("#blabla").val();
    var result = whichAnimal(animalSelection);
    $("#turtles").hide();
    $("#snakes").hide();
    $("#frogs").hide();
    $(result).show();
  });

});
