/*----- constants -----*/
var NUM_ACROSS = 3;

/*----- app's state (variables) -----*/
var turn = 'X';

var players = {
    'X': 0,
    'O': 0
}

/*----- cached element references -----*/
// var gameBoard = $('.game-board');
// var boxes = $('.box');
// var $playerTurn = $('#playerTurn')
// var player1Score = $('#player1');
// var player2Score = $('#player2');

/*----- event listeners -----*/
$(document).on('click', '.box', handleClick)
$(document).on('click', 'button', newGame)

/*----- functions -----*/

function handleClick() {
    // console.log($(this));
    var $this = $(this);
    if ($this.is(':empty')){
        $this.html(turn);
        checkForWin(turn)
        turn = changeTurn(turn);
        $('#playerTurn').html(turn + ' turn')
    } else {
        alert ('Bad move buddy!')
        return;
    }
}

function changeTurn(turn) {
    var new_turn;

    if (turn == 'X') {
        new_turn = 'O'
    }
    
    if (turn == 'O') {
        new_turn = 'X'
    }

    return new_turn
}

function checkForWin(turn) {
    var draw = checkforDraw();

    if (draw) {
      alert('This game is a draw!');
      newGame();

    } else {

        var $one   = $('.box.1');
        var $two   = $('.box.2');
        var $three = $('.box.3');
        var $four  = $('.box.4');
        var $five  = $('.box.5');
        var $six   = $('.box.6');
        var $seven = $('.box.7');
        var $eight = $('.box.8');
        var $nine  = $('.box.9');

            // 1, 2, 3
        if (($one.html() == turn) && ($two.html() == turn) && ($three.html() == turn)) {
            printWinner(turn);
        }

        // 4, 5, 6
        if (($four.html() == turn) && ($five.html() == turn) && ($six.html() == turn)) {
            printWinner(turn);    
        }

        // 7, 8, 9 
        if (($seven.html() == turn) && ($eight.html() == turn) && ($nine.html() == turn)) {
            printWinner(turn);    
        }

        // 1, 4, 7
        if (($one.html() == turn) && ($four.html() == turn) && ($seven.html() == turn)) {
            printWinner(turn);
        }

        // 2, 5, 8
        if (($two.html() == turn) && ($five.html() == turn) && ($eight.html() == turn)) {
            printWinner(turn);
        }

        // 3, 6, 9
        if (($three.html() == turn) && ($six.html() == turn) && ($nine.html() == turn)) {
            printWinner(turn);
        }

        // 1, 5, 9
        if (($one.html() == turn) && ($five.html() == turn) && ($nine.html() == turn)) {
            printWinner(turn);
        }

        // 3, 5, 7
        if (($three.html() == turn) && ($five.html() == turn) && ($seven.html() == turn)) {
            printWinner(turn);
        }
    }
}

function printWinner(turn) {
    players[turn] += 1;
    writeScore(turn)
    console.log(players)
    setTimeout(function() {
        if (confirm(turn + ' Wins! Want to play again?')) {
            newGame()
        }
    }, 300);
}

function checkforDraw() {
    $('.boxes').each(function(index, elem) {
        if ($(elem).is('.empty')) {
            return true;
        }
    });

    return false;
}

function newGame(){
    $('.box').each(function(index, elem) {
        $(elem).html('');
    });
    // turn = changeTurn(turn)
    $('#playerTurn').html(turn + ' turn');

}

function writeScore(turn) {
    if (turn == 'X') {
        $('#player1').html(players[turn])
    } else {
        $('#player2').html(players[turn])
    }
} 
