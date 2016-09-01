// Función para comprobar que la entrada es un número hexadecimal válido----------------------------------------------------

function compruebaNumero() {
    var numero = document.getElementById("numero").value;
    numero = numero.replace("0x", "");
    numero = numero.replace("#", "");
    if (!numero || !/^[0-9a-fA-F]+$/.test(numero) || numero.trim() == "") {
        $("#alertas").css("display", "none");
        $("#alertas").html("<img src='img/Error.png' width='64'><div><h3>El número introducido no es válido.</h3></div>");
        $("#resultado").html("");
        $("#alertas").fadeIn(3000, function(){
            setTimeout(function(){
                $("#alertas").fadeOut(1000, function(){
                    $("#alertas").html("");
                });
            }, 3000);
        });
        return false;
    }
    if (numero && /^[0-9a-fA-F]+$/.test(numero)) {
        $("#alertas, #resultado").css("display", "none");
        $("#resultado").css("text-shadow", "")
        $("#alertas").html("<img src='img/correcto.png' width='64'><div><h3>El número decimal resultante es... :<br>(*redoble de tambor*)</h3></div>");
        $("#alertas").slideDown(3000, function(){
            $("#resultado").html("<h2>" + parseInt(numero, 16) + "</h2>");
            $("#resultado").show(2000);
            setTimeout(function(){
                $("#alertas").slideUp(3000, function(){
                    $("#alertas").html("");
                    $("#resultado").css("text-shadow", "-2px 2px 5px black");
                });
            }, 3000);
        });
        return true;
    }
}
