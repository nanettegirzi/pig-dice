//BACK-END LOGIC

var player1;
var player2;

function Player() {
  this.currentScore = 0;
  this.totalScore = 0;
  this.dieRoll = 0;
  //this.turn = 0;
}

function dieRoll(){
    return Math.ceil(Math.random() * 6);
    console.log(number);
}
Player.prototype.roll = function () {
  if(this.dieRoll === 1) {
    this.currentScore = 0;
    counter++;
  } else {
    this.currentScore += this.dieRoll;
    }
  }
  Player.prototype.hold = function() {
    this.totalScore += this.currentScore;
    this.currentScore = 0;
  }

  Player.prototype.rollOne = function(){
    if(this.dieRoll === 1) {
      this.currentScore = 0;
      alert("You rolled a ONE! Your turn is OVER! Dundundunnnnnn!!");
    } else {
      this.currentScore += this.dieRoll;
    }
  }



//Front-End
$(document).ready(function (){

  var die1 = $("#randomnum1").val("counter");


    $("#roll1").click(function(){
      // dieRoll();
      // var number = Math.ceil(Math.random() * 6);
      // console.log(number);
      $("#roll-result1").text(dieRoll());
    });

    $("#roll2").click(function(){
      // dieRoll();
      // var number = Math.ceil(Math.random() * 6);
      // console.log(number);
      $("#roll-result2").text(dieRoll());
    });

    player1 = new Player();
    player2 = new Player();

    // if (switchPlayer(this.dieRoll === 1)){
    //   $(alert("Sorry! Your turn is over")).show();
    // } else {
    //   this.currentScore += this.dieRoll;
    // }
});
