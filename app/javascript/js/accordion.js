$(document).ready(function () {

    $('#acordion #parrafo').hide();
    $('#acordion #parrafo-2').hide();
    $('#acordion #parrafo-3').hide();

    $('#acordion').css({marginTop:"20px"})
    $('.display').css({ display: "block" });

    $('.ver').click(function () {
         $('#parrafo').toggle();
        
    });

    $('.ver-2').click(function () {
        $('#parrafo-2').toggle()
       
    });

    $('.ver-3').click(function () {
        $('#parrafo-3').toggle()
    });
});