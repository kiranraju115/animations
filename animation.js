$('document').ready(function() {

    $('#outerdiv').mouseenter(function () {
        $('#div2').css('transform' ,'rotate(360deg)')
        $('#div1').css('transform' ,'rotateY(360deg)')
        $('#div3').css('transform' ,'rotateY(360deg)')
    })

  

    $('#outerdiv2').mouseenter(function() {
        $('#moto').css('font-size', '80px')
    })

    $('#outerdiv3').mouseenter(function() {
        $('.wordeffects').fadeIn(1000)
        $('.para1').fadeIn(2000)
        $('.para2').fadeIn(3000)
    })

    $('#lastdiv').mouseenter(function () {
         $('#ldiv1').css('transform' ,'rotateY(0deg)')
         $('#ldiv2').css('transform' ,'rotateY(0deg)')
         $('#ldiv3').css('transform' ,'rotateY(0deg)')
    })

})