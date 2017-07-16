$('#jabłko').click(function() {
    $('<li">').append("JABŁKO" + "<button class=delete>usuń</button>").prependTo('.items');
});
$('#gruszka').click(function() {
    $('<li">').append("GRUSZKA" + "<button class=delete>usuń</button>").prependTo('.items');
});
$('#banan').click(function() {
    $('<li">').append("BANAN" + "<button class=delete>usuń</button>").prependTo('.items');
});
$('#kiwi').click(function() {
    $('<li">').append("KIWI" + "<button class=delete>usuń</button>").prependTo('.items');
});

var $items = $(".items");
$items.on("click", "li", "button", function() {
    $(this).remove();

});

/* Funkcja do wiadomości */
function msg() {

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
$(document).ready(msg);
