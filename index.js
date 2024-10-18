
function createForm() {
    const news = document.getElementById("form-div");
    const email = document.getElementById("email-div");
    const checkboxDiv = document.getElementById("checkbox-div");
    const button = document.getElementById("button-div");
    const form = document.createElement("form");
    form.setAttribute('method', 'post');
    const labelEmail = document.createElement("label");
    labelEmail.setAttribute("for", "email");
    labelEmail.setAttribute("class", "email");
    labelEmail.innerText = "Correo electrónico: ";
    const inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("id", "email");
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", "agree");
    const labelCheckbox = document.createElement("label");
    labelCheckbox.innerHTML = "<label>Acepto los <a href=''>términos y condiciones</a></label>";
    labelCheckbox.setAttribute("for", "agree");
    labelCheckbox.setAttribute("class", "agreement");
    const buttonSubmit = document.createElement("input");
    buttonSubmit.setAttribute("type", "submit");
    buttonSubmit.setAttribute("value", "Quiero subscribirme");
    buttonSubmit.setAttribute("class", "buttonStyle")
    email.appendChild(labelEmail);
    email.appendChild(inputEmail);
    checkboxDiv.appendChild(checkBox);
    checkboxDiv.appendChild(labelCheckbox);
    button.appendChild(buttonSubmit);
    news.appendChild(form);
}
createForm();















