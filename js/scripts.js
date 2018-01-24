//BACK-END LOGIC

//random number generator
var counter = Math.floor(Math.random() * 7);

function Player (name) {
  this.name = name;
  this.currently = 0;
  this.total = 0;
  this.die1 = [1,2,3,4,5,6];
  this.dieRoll = 0;
}
Player.prototype.roll = function () {
  if(this.dieRoll === 1) {
    this.current = 0;
    counter++;
  } else {
    this.current += this.dieRoll;
    }
  }
  Player.prototype.hold = function() {
    this.total += this.current;
    this.current =0;
  }

//Front-End
$(document).ready(function (){
  //$("#roll").submit(function (event) {

  var die1 = $("#randomnum1").val("counter");
  var die2 = $("#randomnum2").val("counter");

    $("#roll").click(function(){
    var number = Math.ceil(Math.random() * 6);
    console.log(number);
    $("#randomnum1").text(number);
    $("#randomnum2").text(number);
    });
  //});
});
