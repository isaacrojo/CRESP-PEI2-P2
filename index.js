var form = document.getElementById("login_form");
var inputUsername = document.getElementById("username");
var inputPassword = document.getElementById("password");
var formButton = document.getElementById("button_login");

//var formLabels = document.getElementsByClassName("form-label");
//var formInput = document.getElementsByClassName("form-input");

var correctUsername = "admin";
var correctPassword = "123";

var showErrorMessage = function (message) {
    //console.log(message);
    // alert(message);  //esto es demasiado pro, usar solo para cosas importantes 

    var messageContainer = document.getElementById("message_danger"); //contenedor
    var messageText = document.getElementById("message_danger_text"); //texto

    // Mostrar el mensaje (hacer que el contenedor sea visible)
    if (messageContainer.className.indexOf("visible") === -1) {
        messageContainer.className += " visible";
    }
    // Cambiar el texto del mensaje
    messageText.textContent = message;

}

var showFieldError = function () {
    var formLabels = document.getElementsById("field");
    //var formInput = document.getElementsByClassName("form-input");

    if (formLabels.className.indexOf("turn-red") ===-1 ) {
        formLabels.className += " turn-red";
        //formInput.className += " turn-red";
    }
}


var disableFormButton = function () {
    //darle estilo de deshabilitado
    //desahabilitar el boton
    if (formButton.className.indexOf("disabled") === -1) {
        formButton.className += " disabled";
    }
    formButton.disabled = true;
}

var enableFormButton = function () {
    // Quitarle estilo de deshabilitado
    formButton.className.replace("disabled", "");
    // Habilitar el botón
    formButton.disabled = false;
}

var setFormButtonText = function (text) {
    formButton.textContent = text;
}

var validateAndSend = function (e) {
    console.log("e", e); //para que no nos mande hasta arriba, no recargue
    //prevenir la funcionalidad default de un form (submit manual)
    e.preventDefault();
    console.log("validateAndSend");
    var username = inputUsername.value;
    var password = inputPassword.value;
    console.log("username", username);
    console.log("password", password);

    //revisar que campos no esten null
    if (username === "" || password === "" || formLabels.className.indexOf("turn-red") === -1 || formInput.className.indexOf("turn-red") === -1 ) {

        //marcarlo de color rojo junto con su label
        showFieldError();        
        showErrorMessage("Por favor introduce los datos requeridos.");

          
        return;
    }

    // Simula inicio de sesion con delay (caso de fail)
    // setTimeout(funcion, delay);

    disableFormButton();
    setFormButtonText("Logging in...")
    setTimeout(function () {
        if (username !== correctUsername || password !== correctPassword) {
            showErrorMessage("Datos incorrectos, por favor intentalo de nuevo");
            enableFormButton();
            setFormButtonText("Login");
            return;
        } else {
            //quitar mensaje de error
            //redireccionar a otra pagina Google.com  
            //window.location = hace uso de otra api para redireccionar

            window.location.href = "http://www.google.com";

        }
    }, 1500);// 1.5 segundos de delay artificial

}

form.addEventListener("submit", validateAndSend);

//P2 Field Errors
//Cuando uno de los campos requeridos no haya sido introducido, 
//marcarlo de color rojo junto con su label. 
//Si no se definen ambos campos, marcar ambos con rojo.

