$("[id$='conteudo']").hide();

var botoes = $(".botao");

botoes.css('cursor', 'pointer');

botoes.click(
    function () {
        $('#' + $(this).attr('id') + '-conteudo').fadeIn(500);
    }
)

$('.form-check-input').change(function () {
    if ($(this).is(':checked')) {
        $('body').css('background-color', '#1C1C1C');
        $('.header').css('background-color', '#B9B9B9');
        $('.subheader').css('background-color', '#5f5f5f');
        $('h5, p').css('color', '#fff');
        $('path').css('fill', 'white');

        $('#titulo').addClass('titulo-dark');
        $('.header span').removeClass('text-white');
        $('.subheader span').addClass('text-white');
        botoes.find('rect').addClass('botao-dark');
        $('.label').find('rect').addClass('botao-dark');
        $('#fase rect').addClass('botao-dark');
        $('#voltar').addClass('text-white');
    }
    else {
        $('body').css('background-color', 'white');
        $('.header').css('background-color', '#265B88');
        $('.subheader').css('background-color', '#AECBDC');
        $('h5, p').css('color', '#000');
        $('path').css('fill', 'black');

        $('#titulo').removeClass('titulo-dark');
        $('.header span').addClass('text-white');
        $('.subheader span').removeClass('text-white');
        botoes.find('rect').removeClass('botao-dark');
        $('#fase rect').removeClass('botao-dark');
        $('#voltar').removeClass('text-white');
    }
})

var min_width = $('svg').width();
var max_width = min_width * 1.5;
var font_range = 0;
var text = ['h5', 'p', '.navbar-brand'];

function aumentarFonte() {
    text.forEach(t => {
        var font_size = parseInt($(t).css('font-size'));
        font_size++;
        $(t).css('font-size', font_size + 'px');
    });
}

function aumentarImagem() {
    var w = $('svg').width();
    w += (min_width * 0.1);
    $('svg').css('width', w + 'px');
}

function diminuirImagem() {
    var w = $('svg').width();
    w -= (min_width * 0.1);
    $('svg').css('width', w + 'px');
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
        aumentarImagem();
        aumentarFonte();
        font_range++;
    }
})

$('.font-minus').click(function () {
    if (font_range > 0) {
        diminuirImagem();
        diminuirFonte();
        font_range--;
    }
})

