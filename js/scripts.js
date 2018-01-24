//BACK-END LOGIC

//random number generator
var counter = Math.floor(Math.random() * 7);

function Player () {
  this.current = 0;
  this.total = 0;
  this.dieRoll = 0;
  this.turn = turn;
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
    this.current = 0;
  }

  function switchPlayer(){
    if (this.dieRoll === 1) {
      alert("Sorry! Your turn is over.");
    } else {
      return false;
    }
  }

//Front-End
$(document).ready(function (){

  var die1 = $("#randomnum1").val("counter");


    $("#roll").click(function(){
    var number = Math.ceil(Math.random() * 6);
    console.log(number);
    $("#randomnum1").text(number);
    });

    var Player1 = new Player (this.current, this.total, this.dieRoll, this.turn);
    var Player2 = new Player (current, total, dieRoll);

    // if (switchPlayer(this.dieRoll === 1)){
    //   $(alert("Sorry! Your turn is over")).show();
    // } else {
    //   this.current += this.dieRoll;
    // }
});
