const bar = document.getElementById('bar');
const close = document.getElementById('close');

const nav = document.getElementById('navbar');

const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form-container"),
formCloseBtn = document.querySelector(".form-close"),
 signinBtn = document.querySelector("#signin"),
 loginBtn = document.querySelector("#login"),
 pwShowHide = document.querySelectorAll(".pw_hide");


 formOpenBtn.addEventListener("click", () => home.classList.add("show"));
 formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

 pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password") {
            getPwInput.type = "text";
            icon.classList.replace("fa-eye-slash","fa-eye");
        }
        else{
            getPwInput.type = "password";
            icon.classList.replace("fa-eye","fa-eye-slash");
        }
    });
 });


 signinBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
 });

 loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
 });





if(bar)
{
    bar.addEventListener('click', () =>{
        nav.classList.add('active')
    })
}

if(close)
    {
        close.addEventListener('click', () =>{
            nav.classList.remove('active')
        })
    }