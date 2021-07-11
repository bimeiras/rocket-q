import changeState from "./state.js";
import Modal from "./modal.js";

changeState();

// Modal - Excluir Pergunta
const modal = Modal();

const deleteButtons = document.querySelectorAll(".delete-button");

deleteButtons.forEach(function(button) {
    button.addEventListener("click", function(){
        modal.open();
    });
});

document.querySelector(".cancel-button").addEventListener("click", function() {
        modal.close();
});

// Marcar como lida
const checkedButtons = document.querySelectorAll(".check-button");
const checkedQuestion = document.querySelectorAll(".question");

checkedButtons.forEach(function(button, index) {
    button.addEventListener("click", function() {
        checkedQuestion[index].classList.add("read-question");
        checkedQuestion[index].lastElementChild.firstElementChild.innerHTML = "Pergunta Lida";
    });
});
    