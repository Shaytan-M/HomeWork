"use strict";

var but_open = document.querySelector('.open');
var but_close = document.querySelector('.close');
var modal = document.querySelector('.modal_wrapper');

function openModal() {
  modal.classList.toggle('active');
}