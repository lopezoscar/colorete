"use strict";


var Game = function(){

    var colors = ["red","green","blue","yellow"];

    var lastColor = nextColor();
    var currentColor;

    var counter = 30;

    var score = 0;

    var lastSelection;

    function startCounter(){
        var interval = setInterval(function(){
            if(counter == 0){
                gameOver();
                clearInterval(interval);
                console.log("Game Over");
                return;
            }
            counter--;
            $("#time").text(counter);
            console.log(counter);

        },1000);
    }

    function gameOver(){
        hide("#noBtn");
        hide("#yesBtn");
        hide(".line");
        show("#startBtn");
    }

    function hide(element){
        $(element).hide();
    }

    function show(element){
        $(element).show();
    }

    function reset(){
        $("#time").text("30s");
        $("#score").text("0");
    }

    //http://stackoverflow.com/questions/1152024/best-way-to-generate-a-random-color-in-javascript
    function nextColor(){
        var color = colors[Math.floor(Math.random() * colors.length)];


        $(".colorPrincipal").fadeOut( 100 ,function(){
            $(".colorPrincipal").css("background-color", color);
            $(".colorPrincipal").fadeIn(100);
        });

        return color;
    }

    function init(){
        hide("#noBtn");
        hide("#yesBtn");
        hide(".line");
    }

    function firstColor(){
        setTimeout(function(){
            console.log("GO!!");
            //currentColor = nextColor();

            startCounter();
        },3000);
    }

    init();

    return {

        start:function(){
            show(".line");
            show("#yesBtn");
            show("#noBtn");
            hide("#startBtn");

            reset();
            firstColor();
        },
        yes:function(){
            lastSelection = true;
            if(lastColor == currentColor){
                score++;
                $("#score").text(score);
            }
            lastColor = currentColor;
            currentColor = nextColor();
        },
        no: function(){
            lastSelection = false;
            if(lastColor != currentColor){
                score++;
                $("#score").text(score);
            }
            lastColor = currentColor;
            currentColor = nextColor();
        }

    }
};

window.Game = new Game();