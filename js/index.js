var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;


$(document).keypress(function () {
    if (!started) {
        $(".scoreboard").text("Level " + level);
        buttonChooser();
        started = true;
    }
});

$(".button").click(clickHandler);

function clickHandler() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    flash(userChosenColor);
    audio(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(function () {buttonChooser();}, 1000);
        }
    }
    else {
        finish();
        start();
    }
}

function finish() {
    $(".scoreboard").text("Game Over! Press any key to restart.");
    $("body").css("background-color", "#f80000");
    audio("wrong");
    setTimeout(function () {$("body").css("background-color", "#161853");}, 200);
}

function start() {
    gamePattern = [];
    started = false;
    level = 0;
}

function buttonChooser() {
    userClickedPattern = [];

    level++;
    $(".scoreboard").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    flash(randomChosenColor);
    audio(randomChosenColor);
}

function flash(id) {
    $("#" + id).animate({ opacity: "0.3" }, 100);
    $("#" + id).animate({ opacity: "1" }, 100);
}

function audio(id) {
    var sound = new Audio("sound/" + id + ".mp3");
    sound.play();
}

function randint() {
    
    return randomNumber;
}