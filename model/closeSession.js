$(document).ready(function() {
    close();
});

function close() {
    $('#closeLogeo').click(destroyLogeo);
}


function destroyLogeo() {
    $.ajax({
        type: "POST",
        url: "../controller/closeSession.php"
    }).done(function(data) {
        window.location.replace("index.html");
    }).fail(function(data) {
        alert("error");
    });
}