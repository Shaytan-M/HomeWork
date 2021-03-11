"use strict";

var ball = document.querySelector('.ball');
var pitch = document.querySelector('.pitch');
var width = pitch.offsetWidth;
var height = pitch.offsetHeight;
var ball_width = ball.offsetWidth;
var ball_height = ball.offsetHeight;
console.log(width);

function some(event) {
  var x = event.clientX;
  var y = event.clientY;

  if (x > width - ball_width / 3) {
    x = width - ball_width / 3;
  } else if (x < ball_width / 3) {
    x = ball_width / 3;
  } else if (y > height - ball_height / 3) {
    y = height - ball_height / 3;
  } else if (y < ball_height / 3) {
    y = ball_height / 3;
  }

  ball.style.left = x - 75 + 'px';
  ball.style.top = y - 75 + 'px';
}