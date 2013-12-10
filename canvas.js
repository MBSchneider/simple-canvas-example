$(document).ready( function (){

  // set canvas and context
  var my_canvas = document.getElementById('canvas');
  var context = my_canvas.getContext('2d');

  // set images
  var scooter = new Image();
  scooter.src="sitScooter.png";
  var scooter2 = new Image();
  scooter2.src="scooter.png";
  var treat = new Image();
  treat.src="treat.png";

  // draw a rectangle
  $('#drectangle').on('click', function(){
    context.strokeStyle = "brown";
    context.strokeRect(50,250,400, 200);
  })

  // draw a circle
  $('#dcircle').on('click', function(){
    context.strokeStyle = "yellow";
    context.beginPath();
    context.arc(50, 50, 35, 0, 2*Math.PI);
    context.closePath();
    context.stroke();
  })

  // fill circle and rectangle
  $('#fill').on('click', function(){
    context.fillStyle = "yellow";
    context.beginPath();
    context.arc(50, 50, 35, 0, 2*Math.PI);
    context.closePath();
    context.fill();
    context.fillStyle = "brown";
    context.fillRect(50,250,400, 200);
  })

  $('#dcouch').on('click', function(){
    drawCouch();
  })

  function drawCouch(){
    context.fillStyle = "brown";
    context.strokeStyle = "white";
    context.lineWidth = 2;
    context.fillRect(50,250,400, 200);
    context.moveTo(75, 300);
    context.lineTo(75, 465);
    context.stroke();
    context.fillRect(475,300,-50, 165);
    context.moveTo(425, 300);
    context.lineTo(425, 465);
    context.stroke();
    context.strokeRect(75,350,350, 50);
    context.moveTo(250, 350);
    context.lineTo(250, 400);
    context.stroke();
    context.beginPath();
    context.arc(451,300,25,Math.PI,2*Math.PI);
    context.lineWidth = 4;
    context.stroke();
    context.closePath();
    context.fill();
    context.beginPath();
    context.arc(49,300,25,Math.PI,2*Math.PI);
    context.lineWidth = 4;
    context.stroke();
    context.closePath();
    context.fill();
    context.fillRect(25,300,50, 165);

  }

  // Draw image
  $('#dimage').on('click', function(){
    context.drawImage(scooter, 75, 250, 125, 150);
  })

  // Draw text
  $('#callscooter').on('click', function(){
    context.fillStyle = "blue";
    context.font = "40px Garamond";
    context.fillText("Want to play ball?",400,100);
  })

  // Throw ball animation
  var counter = 0;
  $('#throwball').on('click', function(){
    nIntervId = setInterval(throwball, 50);
  })

  function throwball() {
    context.fillStyle = "green";
    context.strokeStyle = "white";
    context.beginPath();
    context.arc(800-(counter*10), 250-(4*counter)+(.1*Math.pow(counter, 2)), 25, 0, 2*Math.PI);
    context.closePath();
    context.fill();
    context.stroke();
    counter++;
    if (counter > 85) {
      clearInterval(nIntervId);
      counter = 0;
    }
  }

  $('#clear').on('click', function(){
    clearContext();
  })

  function clearContext(){
    context.fillStyle = "white";
    context.fillRect(0, 0, 800, 600);
  }

  var treatTimer = 0;
  $('#givetreat').on('click', function(){
    mIntervId = setInterval(getTreat, 50);
  })

  function getTreat(){
    clearContext();
    context.fillStyle = "blue";
    context.font = "40px Garamond";
    context.fillText("What about... a treat?",400,100);
    drawCouch();
    context.drawImage(treat, 575, 525, 50, 50);
    context.drawImage(scooter2, 325 + (2*treatTimer), 225 - (5 * treatTimer)+(.065*Math.pow(treatTimer, 2)), 125, 150);
    treatTimer++;
    console.log(treatTimer);
    if (treatTimer > 101) {
      clearInterval(mIntervId);
      treatTimer = 0;
    }
  }
});
