var g_c1;



window.onload = function(){

var bell1 = new Howl({urls: ["music/templebell.mp3"],loop: true,volume: 0.5,});
var bell2 = new Howl({urls: ["music/templebell2.mp3"],loop: true,volume: 0.5,});
var bell3 = new Howl({urls: ["music/templebell3.mp3"],loop: true,volume: 0.5,});
var bell4 = new Howl({urls: ["music/templebelljapanese.mp3"],loop: true,volume: 0.5,});
var bell5 = new Howl({urls: ["music/templebellzen.mp3"],loop: true,volume: 0.5,});

var paper = new Raphael(document.getElementById('stage-canvas'));
//console.log(paper.width);
var centerWidth = paper.width / 2;

var startingX = paper.width / 6
var startingY = 600;
var circlesClicked = 0;


function clickCircle(circle, bell) {
  circle.playing = false;

  return function() {
    colorChange(circle);

    if (circle.playing == false) {
      bell.play();
      circle.playing = true;
    } else {
      bell.stop();
      circle.playing = false;
    }
  }
}

function colorChange(elem){
  console.log(elem)
  if (elem.attrs.cy === startingY) {
      circlesClicked += 1;
      elem.animate({"stroke-width": 50, cx: centerWidth, cy: startingY - 100 * circlesClicked}, 2000, "bounce");
      console.log(this.id == 0);
  }
  else {
      circlesClicked -= 1;
      elem.animate({"stroke-width": 50, cx: elem.data('startingX'), cy: startingY}, 2000, "elastic");
  }
}


var circle1 = paper.circle(startingX * 1, startingY, 50).data('startingX', startingX * 1).animate({fill: "purple", stroke: "#DDD", "stroke-width": 30, "stroke-opacity": 0.5}, 2000);
var circle2 = paper.circle(startingX * 2, startingY, 50).data('startingX', startingX * 2).animate({fill: "lightpink", stroke: "#DDD", "stroke-width": 30, "stroke-opacity": 0.5}, 2000);
var circle3 = paper.circle(startingX * 3, startingY, 50).data('startingX', startingX * 3).animate({fill: "yellow", stroke: "#DDD", "stroke-width": 30, "stroke-opacity": 0.5}, 2000);
var circle4 = paper.circle(startingX * 4, startingY, 50).data('startingX', startingX * 4).animate({fill: "lightgreen", stroke: "#DDD", "stroke-width": 30, "stroke-opacity": 0.5}, 2000);
var circle5 = paper.circle(startingX * 5, startingY, 50).data('startingX', startingX * 5).animate({fill: "lightblue", stroke: "#DDD", "stroke-width": 30, "stroke-opacity": 0.5}, 2000);


circle1.click(clickCircle(circle1, bell1));
circle2.click(clickCircle(circle2, bell2));
circle3.click(clickCircle(circle3, bell3));
circle4.click(clickCircle(circle4, bell4));
circle5.click(clickCircle(circle5, bell5));

}
