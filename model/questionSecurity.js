$(document).ready(function() {
    clickButton();
});

function clickButton() {
    $('#start').click(sendEmail);
}

function getText() {
    getData($('#email').val(), $('#question').val(), $('#resp').val());
}

function getData(email, question, resp) {
    var parameter = { "email": email, "question": question, "resp": resp };
    $.ajax({
        type: "POST",
        url: "../controller/questionSecurity.php",
        data: parameter
    }).done(function(data) {
        if (data == "haydatos") {
            alert("sdkufhkjfhkdjg");
        }
    }).fail(function(data) {
        alert("error");
    });
}

function sendEmail(email) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "tazPizzaCentral@gmail.com",
        Password: "Sherlook12",
        To: "20171337@uthh.edu.mx",
        From: "tazPizzaCentral@gmail.com",
        Subject: "Correo de Recuperacion para acceder a la pagina Taz Pizza",
        Body: "Accede al siguente enlace recuperacion.tazpizza.com.mx",
    }).then(
        message => alert(message)
    );
}