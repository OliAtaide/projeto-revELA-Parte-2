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
        $('.navbar').removeClass('navbar-dark');
        $('h5, p').css('color', '#fff');
        $('#titulo').css('fill', '#fff');
        botoes.find('rect').css('fill', '#B9B9B9');
        $('#fase rect').css('fill', '#B9B9B9');
        $('#titulo rect').css('fill', '#838383');
        $('#titulo rect').css('stroke', 'white');
        $('path').css('fill', 'white');
    }
    else {
        $('body').css('background-color', 'white');
        $('.navbar').css('background-color', '#5A729A');
        $('.navbar').addClass('navbar-dark');
        $('h5, p').css('color', '#000');
        $('#titulo').css('fill', '#000');
        botoes.find('rect').css('fill', '#96D2E7');
        $('#fase rect').css('fill', '#FF8D3E');
        $('#titulo rect').css('fill', '#5a729a');
        $('path').css('fill', 'black');
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