$(document).ready(function() {
    checkLogeoAdmin();
});

function checkLogeoAdmin() {
    $.ajax({
        type: "POST",
        url: "../controller/checkSession.php"
    }).done(function(data) {
        if (data != "Administrador") {
            window.location.replace("index.html");
        }
    }).fail(function(data) {
        alert("error");
    });
}