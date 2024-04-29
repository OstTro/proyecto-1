//accion ocultar
//$('h1').hide();

//realizar acciones cuando la pagina este cargada
/*$(()=>(acciones))

$(document).ready(()=>(acciones))
*/

/*$(()=>{
    $("#ocultarbtn").click(()=>{
        $("li").fadeOut();
    });

    $("#mostrarbtn").click(()=>{
        $("li").fadeIn();
    });

    $("#miBoton").click(()=>{
        alert("Has hecho click en el boton");
    });

})

$(()=>{
    $("#ocultar1btn").click(()=>{
        $("img").fadeOut();
    });

    $("#mostrar1btn").click(()=>{
        $("img").fadeIn();
    });
})*/

$(()=>{
    $('#ocultarbtn').click(()=>{
        $('li').fadeOut();
    })

    $('#mostrarbtn').click(()=>{
        $('li').fadeIn();
    })
    $('#miBoton').click(()=>{
        alert("haz dado click en el boton")
    })
    $('#ocultar').click(()=>{
        $('img').slideUp();
    })
    $('#mostrar').click(()=>{
        $('img').slideDown();
    })

    $('#card4').hide();
    $('#card5').hide();
    $('#card6').hide();

    $('#mas').click(()=>{
    $('#card4').slideDown();
    $('#card5').slideDown();
    $('#card6').slideDown();
    })
    $('#menos').click(()=>{
    $('#card4').slideUp();
    $('#card5').slideUp();
    $('#card6').slideUp();
    })

})
