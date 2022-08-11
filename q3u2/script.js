$('button').button().draggable({
    cancel:false,
    stop:function () {
        var button = $(this);
        $('.slot').each(function (index, value) {
            isOverlapping(button, $(value));
        })
    }
});

// console.log($('.slot').offset());
// console.log($('.slot').offset().top + $('.slot').height());

function isOverlapping(button, slot){
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

    console.log(isFilled)

    if(vertical && horizontal && isFilled){
        button.css('visibility', 'hidden');
        slot.html('<span>' + button.text() + '</span>');
        slot.attr('filled', 'true');
    }
}