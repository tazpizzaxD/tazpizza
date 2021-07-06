$(document).ready(function() {
    obtenerRegistros();
});


function obtenerRegistros() {
    $('#fill tbody').html("");
    $.getJSON("../controller/product.php", function(registros) {
        $.each(registros, function(i, registro) {

            var newFila =
                "<tr>" +
                "<td class='filasTabla'>" + registro.id + "</td>" +
                "<td class='filasTabla'>" + registro.pizza + "</td>" +
                "<td class='filasTabla'>" + registro.tamaño + "</td>" +
                "<td class='filasTabla'>" + registro.ingredientes + "</td>" +
                "<td class='filasTabla'>" + registro.categoria + "</td>" +
                "<td class='filasTabla'>" + registro.descrpcion + "</td>" +
                "<td class='filasTabla'>" + registro.image + "</td>" +
                "<td class='filasTabla'><button class='btnTable scrollto'>Eliminar</button></td>" +
                "<td class='filasTabla'><button class='btnTable scrollto'>Actualizar</button></td>" +
                "</tr>";
            $(newFila).appendTo('#fill tbody');

        });
    });
}