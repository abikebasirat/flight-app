
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const inputs = document.querySelectorAll('input');
const btnBlock = document.getElementsByClassName("btnBlock")


menuBtn.addEventListener("click", () =>{
    menu.classList.toggle("nav-toggle");

});


btnBlock[0].addEventListener('click', () => {
 alert("Booking Successfully");
inputs[0].value = "";
inputs[1].value = "";
inputs[2].value = "";
inputs[3].value = "";
inputs[4].value = "";
}
); 

