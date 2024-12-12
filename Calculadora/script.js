// Referência ao elemento display
const display = document.getElementById('display');

// Funcão para adicionar um valor ao display
function appendToDisplay(value) {
    display.value += value;
}

// Funcão para limpar o display
function clearDisplay() {
    display.value = '';
}

// Funcão para apagar o último caractere do display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Funcão para calcular o resultado
function calculateResult() {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (e) {
        display.value = 'Erro';
    }
}