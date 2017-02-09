$(document).ready(function(){

    $('.product__quanity-minus').on('click', function(){
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
    });
    $('.product__quanity-plus').on('click', function(){
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
    });
    $('.product__quanity-plus').on('mousedown', function(event){
        event.preventDefault();
    });
    $('.product__quanity-minus').on('mousedown', function(event){
        event.preventDefault();
    });
    $('.product__quanity-value').on('keydown', function(event){
        event.preventDefault();
    });

})