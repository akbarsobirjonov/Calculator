const app = document.getElementById('app');

function createCalculator() {
    const calculator = document.createElement('div');
    calculator.className = 'calculator';

    const display = document.createElement('input');
    display.id = 'result';
    display.type = 'text';
    display.readOnly = true;
    calculator.appendChild(display);

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-grid';

    const buttons = [
        'C', '←', '/', '*',
        '7', '8', '9', '-',
        '4', '5', '6', '+',
        '1', '2', '3', '=',
        '0', '.', ''
    ];

    buttons.forEach((char) => {
        if (char === '') return;

        const btn = document.createElement('button');
        btn.innerHTML = char;
        if (char === '=') btn.classList.add('equal');
        btn.onclick = () => handleClick(char);
        buttonContainer.appendChild(btn);
    });

    calculator.appendChild(buttonContainer);
    app.appendChild(calculator);
}

function handleClick(char) {
    const result = document.getElementById('result');

    switch (char) {
        case 'C':
            result.value = '';
            break;
        case '←':
            result.value = result.value.slice(0, -1);
            break;
        case '=':
            try {
                result.value = eval(result.value);
            } catch {
                result.value = 'Error';
            }
            break;
        default:
            result.value += char;
    }
}

createCalculator();
