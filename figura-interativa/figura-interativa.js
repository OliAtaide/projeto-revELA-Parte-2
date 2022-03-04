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
  var font_size = parseInt($('span').css('font-size'));
  console.log(font_size);
  if (font_size < 30) {
    font_size = font_size + 1;
    $('span').css('font-size', font_size + 'px');
  }
})

$('.font-minus').click(function () {
  var font_size = parseInt($('span').css('font-size'));
  console.log(font_size);
  if (font_size > 20) {
    font_size = font_size - 1;
    $('span').css('font-size', font_size + 'px');
  }
})

$('.form-check-input').change(function () {
  if ($(this).is(':checked')) {
    $('body').css('background-color', '#000');
    $('h3, span, i').addClass('text-white');
    $('img').addClass('img-dark');
    $('.alert').addClass('alert-dark');
  }
  else {
    $('body').css('background-color', '#fff');
    $('h3, span, i').removeClass('text-white');
    $('img').removeClass('img-dark');
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
    $('button').prop('disabled', true);
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