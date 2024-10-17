const news = document.getElementById("newsletter");
const form = document.createElement("form");
const labelEmail = document.createElement("label");

form.setAttribute('method','post');

labelEmail.setAttribute("for","email");
/* labelEmail.style.fontFamily = "Poppins"; cambiar fuente en css*/
labelEmail.innerText = "Correo electrónico: ";
const inputEmail = document.createElement("input");
inputEmail.setAttribute("type","email");
inputEmail.setAttribute("id", "email");
const checkBox =document.createElement("input");
checkBox.setAttribute("type", "checkbox");
checkBox.setAttribute("id","agree");
const labelCheckbox = document.createElement("label");
labelCheckbox.setAttribute("for","agree");
labelCheckbox.innerText= "Aceptar";


form.appendChild(labelEmail);
form.appendChild(inputEmail);
form.appendChild(checkBox);
form.appendChild(labelCheckbox);

news.appendChild(form);

