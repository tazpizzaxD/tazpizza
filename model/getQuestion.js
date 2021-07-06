$(document).ready(function() {
    obtenerRegistros();
});


function obtenerRegistros() {
    $("#question option").remove();
    $("#question").append('<option value="labelQuestion">Selecciona una pregunta se seguridad</option>');
    $.getJSON("../controller/question.php", function(registros) {
        $.each(registros, function(i, registro) {
            $("#question").append('<option value="' + registro.id + '">' + registro.pregunta + '</option>');
        });
    });
}