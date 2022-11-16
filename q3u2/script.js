const respostas = ['4', '3', '1', '2', '5']

const parabensModal = new bootstrap.Modal('#parabensModal')

$('.btn-option').button().draggable({
    cancel: false,
    stop: function () {
        var button = $(this);
        $('.slot').each(function (index, value) {
            isOverlapping(button, $(value));
        })
    }
});

function isOverlapping(button, slot) {
    var slt_top = slot.offset().top;
    var slt_lft = slot.offset().left;
    var slt_btm = slt_top + slot.height();
    var slt_rgt = slt_lft + slot.width();

    var btn_vrt = button.offset().top + (button.height() / 2);
    var btn_hzn = button.offset().left + (button.width() / 2);

    var filled = slot.attr('filled');
    var isFilled = filled == "false";

    var vertical = btn_vrt > slt_top && btn_vrt < slt_btm;
    var horizontal = btn_hzn > slt_lft && btn_hzn < slt_rgt;

    if (vertical && horizontal && isFilled) {
        button.css('visibility', 'hidden');
        slot.html('<span>' + button.text() + '</span>');
        slot.attr('filled', 'true');
        slot.attr('value', button.val());
    }
}

$('.btn-submit').click(function () {
    $('.slot').each(function (i, v) {
        console.log(i, v);
        console.log($(this).attr('value') == i + 1);
        if($(this).attr('value') != i + 1){
            location.href = 'feedback.html';
        }
    })
    parabensModal.show()
})

/* Accessivel */

console.log($('form'))
$('form').submit(function () {
    $('input').each(function (i, v) {
        var val = $(v).val();
        var res = respostas[i];
        if (val == res) {
            console.log(val)
        }
    })
})