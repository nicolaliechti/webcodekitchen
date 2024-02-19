function convert() {

    let input = document.getElementById('inputValue').value;
    let result = toNumber(input);
    document.getElementById('result').textContent = 'Result: ' + result;
}
function toNumber(romanNumeral) {
    let total = 0;

    const romanNumeralMap = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};

    for (let i = 0; i < romanNumeral.length; i++) {
        const currentValue = romanNumeralMap[romanNumeral[i]];
        const nextValue = romanNumeralMap[romanNumeral[i + 1]];

        if (nextValue > currentValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
    }
    return total;
}
