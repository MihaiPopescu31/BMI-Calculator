function calculateBMI() {
    // Preluăm valorile de la input-urile HTML
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    // Calculăm BMI-ul
    var bmi = weight / Math.pow(height, 2);

    // Generăm mesajul corespunzător
    var resultText = "";
    
    if (bmi < 18.5) {
        resultText = "Your BMI is " + bmi.toFixed(1) + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultText = "Your BMI is " + bmi.toFixed(1) + ", so you have a normal weight.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultText = "Your BMI is " + bmi.toFixed(1) + ", so you are overweight.";
    } else if (bmi >= 30 && bmi <= 34.9) {
        resultText = "Your BMI is " + bmi.toFixed(1) + ", so you are obese.";
    } else if (bmi >= 35) {
        resultText = "Your BMI is " + bmi.toFixed(1) + ", so you are extremely obese.";
    }

    // Afișăm rezultatul în div-ul #result
    document.getElementById('result').innerText = resultText;
}
