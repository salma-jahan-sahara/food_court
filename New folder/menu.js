// const price__change
$(".price__change").click(function(){
    // alert($(this).attr("data-price"));
    var price = $(this).attr("data-price");
    $("#food-price_1").html(price);
});
