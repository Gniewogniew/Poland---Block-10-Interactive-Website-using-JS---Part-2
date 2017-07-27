function attachEventHandlers (){
  $(".products").click(productsClickHandler);
  $(".items").click(basketClickHandler);
  $("#message-button").click(newsClickHandler);
  $("#message-input").keypress(inputTextClickHandler)
//  $(".products").click(translateProducts)
}

var productsClickHandler = function(event){
    if(event.target.nodeName == "BUTTON") {
    var productType = (event.target.dataset.product);   
    var value = $("#" + productType + "-quantity")[0].value;

       item = $("<li><button>Usuń</button></li>")
       item.append(event.target.dataset.product + " ");
       item.append(value);
       item.appendTo($(".items"));
    }
}

var basketClickHandler = function(event){
    if(event.target.nodeName =="BUTTON"){
    event.target.parentElement.remove();
    }
}

//  var translateProducts = function(event){
//      if(event.target.nodeName == "BUTTON"){
//      "apple" : "Jabłka",
//      }
//  }

var newsClickHandler = function(event){
    
    var message = (event.target);
    var inputText = (event.target.previousElementSibling).value;

    item = $("<p>" +   + "</p>")
    item.append(inputText);
    item.appendTo($("#message"));
    $("#message-input").val("");
}

var inputTextClickHandler = (function(event) {
        if (event.which == 13) {
            $("#message-button").click();

    }
});

$(attachEventHandlers)
