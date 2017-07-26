function attachEventHandlers (){
  $(".products").click("click",(function(event){

if (event.target.nodeName == "BUTTON"){
console.log("Clicked", event.target.textContent);

var productType = ("event.target.dataset.product");
   
var value = $("#" + productType + "-quantity")[0].value;

       item=$("<li></li>"+"<button>Delete</button>")
  item.append("event.target.dataset.product");
  item.append("value");

  item.appendTo($(".items"));

};
})) 
}

$(attachEventHandlers)
