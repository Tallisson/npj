/**
 * Created by Leo Maciel on 25/10/2016.
 */
$(document).ready(function () {
    //seleciona os atributos com o nome = add
    $('a[name=adicionar]').click(function (e) {
        //cancela o comportamento padrão do link
        e.preventDefault();
        //armazena o atributo href do link
        var id = $(this).attr('href');

        //largura e altura da tela
        var maskHeight = $(window).height();
        var maskWidth = $(window).width();
        console.log(maskHeight +","+maskWidth);
        //define largura e altura do div mask iguais as dimensões da tela
        $('#mask').css({'width':maskWidth, 'heigth':maskHeight});

        //efeito de transição

        $('#mask').fadeTo("fast",0.3);
        $('.window').fadeIn("fast");
        //armazena a largura e a altura da janela

        var winH = $(window).height();
        var winW = $(window).width();

        //centralizando tela
        $(id).css('top', winH/2-$(id).height()/2);
        $(id).css('left', winW/2-$(id).width()/2);

        //efeito transição
        $(id).fadeIn(1000);
    });

    $('.window .close').click(function (e) {
//cancela o comportamento padrão do link
        e.preventDefault();
        $('#mask, .window').hide();
    });

});
//se o botãoo fechar for clicado

