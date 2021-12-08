$('#navIt').ready(function(){
    $("img").click(function(){
        //deve mostrar o menu em forma de lista quando em tela menor
        $("ul").toggle('slow');
    })
});
$(window).resize(function(){
    if($('#navIt').innerWidth() < 600) {
        //diminui os elementos, esconde se for necessário
        $(this).addClass('drop');
    } else {
        //mantem um elemento ou outro
        $(this).removeClass('drop');
    }
});