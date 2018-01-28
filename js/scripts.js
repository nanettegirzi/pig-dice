//BACK-END LOGIC

var player1;
var player2;

function Player() {
  this.roundTotal = 0;
  this.totalScore = 0;
  this.roll = 0;
}

function dieRoll(){
    return Math.ceil(Math.random() * 6);
    console.log(number);
}
Player.prototype.roll = function () {
  if(this.roll === 1) {
    this.roundTotal = 0;
    counter++;
  } else {
    this.roundTotal += this.roll;
    }
  }

  Player.prototype.rollOne = function(){
    if(this.roll === 1) {
      this.roundTotal = 0;
      alert("You rolled a ONE! Your turn is OVER! Dundundunnnnnn!! Next Player's Turn.");
    } else {
      this.roundTotal += this.roll;
    }
  }

  Player.prototype.hold = function() {
    this.totalScore += this.roundTotal;
    this.roundTotal = 0;
    alert("Your turn is over. Next player's turn.");
  }

Player.prototype.winnerCheck = function(){
  if (this.totalScore >= 100) {
    alert("YOU WIN!!!! CONGRATULATIONS!!!!!!!");
  }
}

function clearPlayers() {
  $("#Player1Name").val("");
  $("#Player2Name").val("");
  // $("#roll-result1").val("");
  // $("#roundTotal1").val("");
  // $("#roll-result2").val("");
  // $("#roundTotal2").val("");
  // $("#totalScore1").val("");
  // $("#totalScore2").val("");
}


//Front-End
$(document).ready(function () {
  // event.preventDefault;


  player1 = new Player();
  player2 = new Player();

  // var die1 = $("#randomnum1").val("counter");

  //prototype rollOne
    $("#roll1").click(function(){ //grab id roll1 from html
      player1.roll = dieRoll();//play1 rolls die
      $("#roll-result1").text(player1.roll); //die roll print round total
      player1.rollOne();//call rollOne prototype to check if plyr has rlld one it will switch plyrs; if not die roll added to round total
      $("#roundTotal1").text(player1.roundTotal);//round total is printed
    });

    $("#roll2").click(function(){//same as above /
      player2.roll = dieRoll();//same as above /
      $("#roll-result2").text(player2.roll);//same as above /
      player2.rollOne();//same as above /
      $("#roundTotal2").text(player2.roundTotal);//same as above /
    });

// prototype hold
    $("#hold1").click(function(){//call click lister button on player1
      player1.hold();//calling the hold function for ply1 and run in plyr prototype
      $("#totalScore1").text(player1.totalScore);//text value sent to total score in the span class
      $("#roundTotal1").empty();//empties the round total and the roll result for the current game
      $("#roll-result1").empty();
      player1.winnerCheck();
    });

    $("#hold2").click(function(){//call click lister button on player1
      player2.hold();//calling the hold function for ply1 and run in plyr prototype
      $("#totalScore2").text(player2.totalScore);//text value sent to total score in the span class
      $("#roundTotal2").empty();//empties the round total and the roll result for the current game
      $("#roll-result2").empty();
      player1.winnerCheck();
    });

    $("#try-me").click(function () {
      var player1Name = $("#Player1Name").val();
      $("#playerOneName").text(player1Name);
      var player2Name = $("#Player2Name").val();
      $("#playerTwoName").text(player2Name)
      // console.log(player1Name);
      // console.log(player2Name);

      $(".new-game").toggle();
      $(".player").toggle();
    });

  //clearFields();

    $("#new-game-button").click(function () {
      clearPlayers();
      $("#totalScore1").empty();
      $("#totalScore2").empty();

      $(".player").hide();
      $(".new-game").show();

    });
});
