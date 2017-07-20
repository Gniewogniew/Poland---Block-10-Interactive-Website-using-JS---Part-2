$('#ziemniak').click(function() {
  $('<li>').append("Ziemniak"+"<button class=delete>usuń</button>").prependTo('.items');
});

var $items = $(".items");
 $items.on("click","li","button", function (){
  $(this).remove();

/* Funkcja do wiadomości */
function wpis() {

    $("#input-msg").keypress(function(event) {
        if (event.which == 13) {
            $("#submit-btn").click();
        }
    });

    $("#submit-btn").click(function() {
        var message = $("#input-msg").val();
        $("#msg").append("<p>" + message + "</p>");
        $("#input-msg").val("");
    });
}
$(wpis);
