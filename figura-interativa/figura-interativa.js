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

var font_range = 0;
var text = ['.imobilidade', '.botao i', 'h3', 'button i', 'span i', 'span', '.alert'];

function aumentarFonte() {
  text.forEach(t => {
      var font_size = parseInt($(t).css('font-size'));
      font_size++;
      $(t).css('font-size', font_size + 'px');
  });
}

function diminuirFonte() {
  text.forEach(t => {
      var font_size = parseInt($(t).css('font-size'));
      font_size--;
      $(t).css('font-size', font_size + 'px');
  });
}

$('.font-plus').click(function () {
  if (font_range < 5) {
      aumentarFonte();
      font_range++;
  }
})

$('.font-minus').click(function () {
  if (font_range > 0) {
      diminuirFonte();
      font_range--;
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
    $('button').not('.font-plus, .font-minus, .form-check-input').prop('disabled', true);
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