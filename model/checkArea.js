$(document).ready(function() {
    checkA();
});

function checkA() {
    $.ajax({
        type: "POST",
        url: "php/checkArea.php"
    }).done(function(data) {
        if (data == "false") {
            $('.conta').hide();
            $('.finan').hide();
            $('.administra').hide();
            $('.carpin').hide();
            $(".adver").html("");
            $(".adver").append('<p>Inicie sesion para poder ver material</p>');
        } else {
            if (data == "Contabilidad") {
                $(".adver").html("");
                $('.conta').show();
                $('.finan').hide();
                $('.administra').hide();
                $('.carpin').hide();
            } else {
                if (data == "Adminstracion") {
                    $(".adver").html("");
                    $('.conta').hide();
                    $('.finan').hide();
                    $('.administra').show();
                    $('.carpin').hide();
                } else {
                    if (data == "Finanzas") {
                        $(".adver").html("");
                        $('.conta').hide();
                        $('.finan').show();
                        $('.administra').hide();
                        $('.carpin').hide();
                    } else {
                        if (data == "Carpinteria") {
                            $(".adver").html("");
                            $('.conta').hide();
                            $('.finan').hide();
                            $('.administra').hide();
                            $('.carpin').show();
                        }
                    }
                }
            }
        }
    }).fail(function(data) {
        alert("error");
    });
}