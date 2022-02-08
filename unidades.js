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
        $('#titulo rect').css('fill', '#838383');
        $('path').css('fill', 'black');
    }
})

$('.font-plus').click(function () {
    var font_size = parseInt($('text').css('font-size'));
    if (font_size < 30) {
        font_size = font_size + 1;
        $('text').css('font-size', font_size + 'px');
    }
})

$('.font-minus').click(function () {
    var font_size = parseInt($('text').css('font-size'));
    if (font_size > 20) {
        font_size = font_size - 1;
        $('text').css('font-size', font_size + 'px');
    }
})