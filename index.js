let inputField = document.getElementById('input-field');
let keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', () => {
        let keyValue = key.innerText;

        if (keyValue === 'Backspace') {
            inputField.value = inputField.value.slice(0, -1);
        } else if (keyValue === 'CapsLock') {
            inputField.value = inputField.value.toUpperCase();
        } else {
            inputField.value += keyValue;
        }
    });
});