function attachEventHandlers (){
  $(".product button").click("click",(function(event){



var $productType = $(".product button:target");
    $productType.on("click", function(){
    $(this).data("product");
});

var $inputQuantity = $("input").val(-"quantity");
       $inputQuantity.on("click", function(){
        $(this).val();

       });

       item=$("<li></li>")
  item.append($(this).data("product"));
  item.append($(this).val());

  item.appendTo($(".items"));

}));


}
$(attachEventHandlers)



 

