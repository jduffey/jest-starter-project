import { fizzbuzz } from './src/modules/fizzbuzz.js';

document.getElementById('submit').onclick = () => {
    const input = document.getElementById('fizzbuzz-input').value;

    let result;
    try {
        result = fizzbuzz(Number(input));
    } catch (error) {
        result = `ERROR: ${error.message}`;
    }

    document.getElementById('result').innerText = result;
}