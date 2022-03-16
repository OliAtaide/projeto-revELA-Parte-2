var botoes = $("[id^='botao']");

botoes.css('cursor', 'pointer');

$('.content').hide();
$('#voltar').hide();

botoes.click(function () {
    var cls = $(this).attr('class');
    console.log(cls);
    console.log($('#' + cls))
    $('.main').fadeOut(200);
    $('#voltar').fadeIn(200);
    $('#' + cls).fadeIn(200);
})

$('#voltar').click(function () {
    var cls = $(this).attr('class');
    console.log(cls);
    console.log($('#' + cls))
    $('.main').fadeIn(200);
    $('#voltar').fadeOut(200);
    $('.content').fadeOut(200);
})

// botoes.mouseenter(function () {
//     var cls = $(this).attr('class');
//     $('#' + cls + '-conteudo').fadeIn(200);
// })

// botoes.mouseleave(function () {
//     var cls = $(this).attr('class');
//     $('#' + cls + '-conteudo').fadeOut(200);
// })

$('.form-check-input').change(function () {
    if ($(this).is(':checked')) {
        $('body').css('background-color', '#1C1C1C');
        $('.navbar').css('background-color', '#B9B9B9');
        $('h5, p').css('color', '#fff');
        $('path').css('fill', 'white');

        $('.navbar').removeClass('navbar-dark');
        $('#titulo').addClass('titulo-dark');
        botoes.find('rect').addClass('botao-dark');
        $('.label').find('rect').addClass('botao-dark');
        $('#fase rect').addClass('botao-dark');
    }
    else {
        $('body').css('background-color', 'white');
        $('.navbar').css('background-color', '#5A729A');
        $('h5, p').css('color', '#000');
        $('path').css('fill', 'black');

        $('.navbar').addClass('navbar-dark');
        $('#titulo').removeClass('titulo-dark');
        botoes.find('rect').removeClass('botao-dark');
        $('#fase rect').removeClass('botao-dark');
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

