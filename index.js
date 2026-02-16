// template_9qfegp7
// service_g2qmk8h
// TZWCI_r1BDhk2FyiY

function contact(event){
    event.preventDefault();
const loading = document.querySelector(".modal__overlay--loading");
const success = document.querySelector(".modal__overlay--success");
loading.classList += " modal__overlay--visible"
    emailjs
    .sendForm(
        "service_g2qmk8h",
         "template_9qfegp7",
event.target,
"TZWCI_r1BDhk2FyiY"
    )
    .then(() => {
        loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible"
    }).catch(() => {
loading.classList.remove("modal__overlay--visible");
alert("Email service is currently unavailable. Please contact me directly at ykarfaridis@gmail.com")
    });
}
