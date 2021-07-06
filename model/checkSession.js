$(document).ready(function() {
    checkLogeo();
});

function checkLogeo() {
    $.ajax({
        type: "POST",
        url: "../controller/checkSession.php"
    }).done(function(data) {
        if (data == "false") {
            $('#closeLogeo').hide();
            $('#open').show();
            $('#optionAdmin').hide();
        } else {
            if (data == "Cliente") {
                $('#open').hide();
                $('#closeLogeo').show();
                $('#optionAdmin').hide();
            } else {
                if (data == "Administrador") {
                    $('#open').hide();
                    $('#closeLogeo').show();
                    $('#optionAdmin').show();
                }
            }
        }
    }).fail(function(data) {
        alert("error");
    });
}