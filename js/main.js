
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
