$(document).ready(function() {
    getValue();
});

function getValue() {
    $('.form-submit').click(getText);
}

function getText() {
    event.preventDefault();
    if ($('#name').val() == "" || $('#lnf').val() == "" || $('#lnm').val() == "" || $('#gender').val() == "" || $('#phone').val() == "" || $('#email').val() == "" || $('#pass').val() == "" || $('#question').val() == "" || $('#resp').val() == "" || !$('#terminos').prop('checked')) {
        $("#warning").html("");
        $("#warning").append('<p>Campos vacios o no ha aceptado los terminos y condiciones</p>');
    } else {
        if ($('#pass').val() == $('#pass2').val()) {
            if ($('#pass').val().length >= 5) {
                verifityEmail($('#email').val());
            } else {
                $("#warning").html("");
                $("#warning").append('<p>Longitud de contraseña invalido</p>');
            }
        } else {
            $("#warning").html("");
            $("#warning").append('<p>No coinciden las contraseñas</p>');
        }
    }
}

function startSEssion(name, lnf, lnm, gender, phone, email, pass, question, resp) {
    var parameter = { "name": name, "lnf": lnf, "lnm": lnm, "gender": gender, "phone": phone, "email": email, "pass": pass, "question": question, "resp": resp };
    alert(name + lnf + lnm + gender + phone + email + pass + question + resp);
    $.ajax({
        type: "POST",
        url: "../controller/addUser.php",
        data: parameter
    }).done(function(data) {
        if (data == "save") {
            window.location.replace("index.html");
        }
    }).fail(function(data) {
        alert("error");
    })
}

function verifityEmail(email) {
    var result = "";
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://mailcheck.p.rapidapi.com/?domain=" + email,
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "01644e9aabmsh3142736d9611b68p1c82f1jsn835625911622",
            "x-rapidapi-host": "mailcheck.p.rapidapi.com"
        }
    };
    $.ajax(settings).done(function(response) {
        if (response.valid == true) {
            startSEssion($('#name').val(), $('#lnf').val(), $('#lnm').val(), $('#gender').val(), $('#phone').val(), $('#email').val(), $('#pass').val(), $('#question').val(), $('#resp').val());
        } else {
            $("#warning").html("");
            $("#warning").append('<p>Correo invalido</p>');
        }
    });
}