$(".Vacantes").css("color", "red")
    .slideUp(2000)
    .delay(2000)
    .slideDown(2000);

$("#btnOcultar").click(() => {
    $(".ocultartabla").toggle("fast");
});

$(".btnClaro").click(() => {
    
    $(".btn").removeClass("btnOscuro").addClass("btnClaro");
    $("body").css("background-color", "white")
    $("button").css({ "color": "black" });
    localStorage.setItem("tema", "claro")
});
$(".btnOscuro").click(() => {
    $(".btn").removeClass("btnClaro").addClass("btnOscuro");    
    $("body").css("background-color", "black")
    $("button").css({ "color": "white" });
    localStorage.setItem("tema", "oscuro")
});

$(()=>{
    const tema = localStorage.getItem("tema");
    if(tema === "oscuro"){
        $("body").css("background-color", "black");
        $("button").css({ "color": "white" });
    }
})
