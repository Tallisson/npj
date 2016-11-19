/**
 * Created by Leo Maciel on 16/10/2016.
 */
//escondendo divs que devem ficar ocultas
$(document).ready(function () {
    $("div.categoria-menu-oculto").css("display","table");
    $("div.categoria-menu-oculto").hide();
});
$(document).ready(function () {
    $("form#formulario-busca").css("display","inline");
    $("form#formulario-busca").hide();
});

//função de botões em modo de tela reduzida
$(document).ready( function () {
    $("button#mostrar").click(function () {
        $("div.categoria-menu-oculto").toggle();
    });
});
$(document).ready(function () {
    $("button#bt-buscar-modo").click(function () {
        $("button#bt-buscar-modo").hide();
        $("form#formulario-busca").show();
    });

})


