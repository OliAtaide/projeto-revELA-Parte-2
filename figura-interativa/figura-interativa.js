$('g').not('#linha').hide();
$('#imobilidade').hide();

$('text').click(function () {
  var target = $('#' + $(this).data('target'));
  target.show();
  if (target.data('target') == 'imobilidade') {
    $('#imobilidade').show();
  }
})

var min_width = $('svg').width();
var max_width = min_width * 1.5;

$('.font-plus').click(function () {
  var w = $('svg').width();
  if (w < max_width) {
    w += (min_width * 0.1);
    $('svg').css('width', w + 'px');
  }
})

$('.font-minus').click(function () {
  var w = $('svg').width();
  if (w > min_width) {
    w -= (min_width * 0.1);
    $('svg').css('width', w + 'px');
  }
})

$('.form-check-input').change(function () {
  if ($(this).is(':checked')) {
    $('body').css('background-color', '#000');
    $('h3, i').css('color', '#fff');
    $('text').css('fill', '#fff');
    $('path').css('fill', '#B9B9B9');
    $('path, line').css('stroke', '#B9B9B9');
    $('.alert').addClass('alert-dark');
  }
  else {
    $('body').css('background-color', '#fff');
    $('h3, i').css('color', '#000');
    $('text').css('fill', '#000');
    $('path').css('fill', '#0044F3');
    $('path, line').css('stroke', '#0044F3');
    $('.alert').removeClass('alert-dark');
  }
})

// new

$('.conteudo, .botao, .alerta, .canvas, .conclusao').hide();

$('.titulo').click(function () {
  $('.botao, .alerta').fadeIn(500);
  $('.canvas').fadeOut(500);
})

var imobilidade = false;

$('.imobilidade').click(function () {
  if (imobilidade) {
    $('.alert').not('.conclusao .alert').fadeOut(500);
    $('.conteudo').fadeIn(500);
    $('.conclusao').fadeIn(500);
  }
  else {
    $('.alerta').fadeOut(500);
    $('.canvas').fadeIn(500);
    imobilidade = true;
  }
})

$('.btn').click(function () {
  var target = $(this).data('target');
  console.log($("#" + target));
  $("#" + target).fadeIn(500);
})