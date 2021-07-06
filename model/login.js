$(document).ready(function() {
    start();
});

function start() {
    $('#start').click(getText);
}

function getText() {
    startSEssion($('#user').val(), $('#pass').val());
}

function startSEssion(user, pass) {
    var parameter = { "user": user, "pass": pass };
    $.ajax({
        type: "POST",
        url: "../controller/login.php",
        data: parameter
    }).done(function(data) {
        alert(data);
        if (data == "Administrador") {
            window.location.replace("admin.html");
        } else {
            if (data == "Cliente") {
                window.location.replace("index.html");
            } else {
                $("#warning").html("");
                $("#warning").append('<p>Usuario o Contraseña incorrectos</p>');
            }
        }
    }).fail(function(data) {
        alert("error");
    });
}