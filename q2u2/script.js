// $('button').button().draggable({cancel:false});

$('i').click(function () {
    var target = $(this).data('target');
    console.log($('[data-button=' + target + ']'));
    $('[data-button=' + target + ']').remove();
})