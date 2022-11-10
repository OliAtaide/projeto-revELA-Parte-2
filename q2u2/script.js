// $('button').button().draggable({cancel:false});

var valor;

$('.field').on('click', 'i', function () {
    var target = $(this).data('target');
    $('#' + target).removeClass('hidden');
    $('[data-button=' + target + ']').remove();
})

$('button').focus(function () {
    if ($(this).data('movable')) {
        valor = $(this).attr('id');
        $(this).addClass('ativo');
    }
})

$('.field').click(function () {
    var color = $('#' + valor).attr('color');

    if($('.ativo').length != 0){
        $(this).append(
            '<h5 class="added" data-button="' + valor + '"><span class="badge rounded-pill bg' + color + '">' +
                $('#' + valor).text() +
            '<i data-target="' + valor + '" class="bi bi-x-circle-fill"></i></span></h5>'
        )
    }

    $('#' + valor).addClass('hidden');
    $('.ativo').removeClass('ativo');
})