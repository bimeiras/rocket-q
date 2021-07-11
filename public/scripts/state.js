// Script criado para adicionar/remover a classe ".inactive" quando a primeira pergunta for feita

export default function changeState() {
    const numberOfQuestions = document.querySelectorAll(".question");
    
    if (numberOfQuestions.length === 0) {
        document.querySelector(".questions").classList.add("inactive");
    } else {
        document.querySelector(".questions").classList.remove("inactive");
        document.querySelector(".empty-state").classList.add("inactive");
    }

}