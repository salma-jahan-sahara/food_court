// const price__change
$(".price__change").click(function(){
    var id = $(this).attr("id").match(/(\d+)/g)[0];
    var price = $(this).attr("data-price");
    $("#food-price_"+id).html(price);

    var selector = '[id="food-size_' + id + '"]';
    $(selector).removeClass("btn_select");

    selector = '[id="food-size_' + id + '"][data-price="' + price + '"]';
    $(selector).addClass("btn_select");

    $(selector).blur();
});
