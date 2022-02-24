$("[id$='conteudo']").hide();

var botoes = $("[id^='botao']");

botoes.css('cursor', 'pointer');

botoes.mouseenter(function () {
    var cls = $(this).attr('class');
    $('#' + cls + '-conteudo').fadeIn(200);
})

botoes.mouseleave(function () {
    var cls = $(this).attr('class');
    $('#' + cls + '-conteudo').fadeOut(200);
})

$('.form-check-input').change(function () {
    if ($(this).is(':checked')) {
        $('body').css('background-color', '#1C1C1C');
        $('.navbar').css('background-color', '#B9B9B9');
        $('h5, p').css('color', '#fff');
        $('path').css('fill', 'white');
        
        $('.navbar').removeClass('navbar-dark');
        $('#titulo').addClass('titulo-dark');
        botoes.find('rect').addClass('botao-dark');
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