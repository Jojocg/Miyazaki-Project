function createForm() {
    const news = document.getElementById("form-div");
    const firstnameDiv = document.getElementById("firstname-div");
    const emailDiv = document.getElementById("email-div");
    const checkboxDiv = document.getElementById("checkbox-div");
    const buttonDiv = document.getElementById("button-div");
    const form = document.createElement("form");
    /* form.setAttribute('method', 'post'); */
    form.setAttribute("id", "formStyle")
    form.setAttribute("onsubmit", "event.preventDefault();")

    const labelName = document.createElement("label");
    labelName.setAttribute("for", "firstname");
    labelName.setAttribute("class", "firstname");
    labelName.innerText = "Nombre: ";
    const inputName = document.createElement("input");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("id", "firstname");
    inputName.setAttribute("class", "inputForm");

    const labelEmail = document.createElement("label");
    labelEmail.setAttribute("for", "email");
    labelEmail.setAttribute("class", "email");
    labelEmail.innerText = "Correo electrónico: ";
    const inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("id", "email");
    inputEmail.setAttribute("class", "inputForm");

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

    firstnameDiv.appendChild(labelName);
    firstnameDiv.appendChild(inputName);
    emailDiv.appendChild(labelEmail);
    emailDiv.appendChild(inputEmail);
    checkboxDiv.appendChild(checkBox);
    checkboxDiv.appendChild(labelCheckbox);
    buttonDiv.appendChild(buttonSubmit);
    form.appendChild(firstnameDiv);
    form.appendChild(emailDiv);
    form.appendChild(checkboxDiv);
    form.appendChild(buttonDiv);
    news.appendChild(form);

    function resetInput() {
        const inputsForm = document.getElementsByClassName("inputForm");
        for (let i = 0; i < inputsForm.length; i++) {
            inputsForm[i].value = "";
        }
        checkBox.checked = false;
    }
    buttonSubmit.addEventListener("click", resetInput);
}
createForm();

function cookiesWindow() {
    setTimeout(function () {
        document.getElementById('cookieConsent').style.display = 'block';
    }, 2000);
    setTimeout(function () {
        document.getElementById("blur-background").style.display = "block";
    }, 2000);

    document.getElementById('acceptCookies').onclick = function () {
        document.getElementById('cookieConsent').style.display = 'none';
        document.getElementById("blur-background").style.display = "none";
    };

    document.getElementById('rejectCookies').onclick = function () {
        document.getElementById('cookieConsent').style.display = 'none';
        document.getElementById("blur-background").style.display = "none";
    };
    
}
cookiesWindow();


function activate(e) {
    const slider = document.querySelector(".slider");
    const items = document.querySelectorAll(".item_carrousel");
    e.target.matches(".next") && slider.append(items[0]);
    e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
}

document.addEventListener("click", activate, false);















