// Script criado para abrir a modal quando a opção "Excluir pergunta" for acionada e fechar quando "Cancelar" foi acionada

export default function Modal() {
    function open() {
        document.querySelector(".modal").classList.remove("inactive");
    }

    function close() {
        document.querySelector(".modal").classList.add("inactive");
    }

    return {
        open,
        close
    }
}