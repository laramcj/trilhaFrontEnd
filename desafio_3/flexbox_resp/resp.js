function toggleHorizontalMenu(){
    if($(document).innerWidth() < 800) {
        //diminui os elementos, esconde se for necessário
        $("#btn_menu").show();
        $("#menu_list").addClass("hamburger_menu");
        $("#menu_list").removeClass("horizontal_menu");
        $("#menu_list").hide();
    } else {
        //mantem um elemento ou outro
        $("#btn_menu").hide();
        $("#menu_list").removeClass("hamburger_menu");
        $("#menu_list").addClass("horizontal_menu");
        $("#menu_list").show();
    }
} 
$(document).ready(function(){
    toggleHorizontalMenu();
    $("#btn_menu").click(function(){
        $("#menu_list").toggle();
        //deve mostrar o menu em forma de lista quando em tela menor
    })
});
$(window).resize(function(){
   toggleHorizontalMenu();
});