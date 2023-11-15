function getZodiacSign(day, month) {
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Овен";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Телец";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Близнецы";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Рак";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Лев";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Дева";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Весы";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Скорпион";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Стрелец";
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Козерог";
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Водолей";
    return "Рыбы";
}

let result_zodiac = document.getElementById("result");
// Получаем ввод от пользователя
let day = prompt("Введите день рождения:");
let month = prompt("Введите месяц рождения (в числовом формате):");

// Преобразуем введенные значения в числа
day = parseInt(day);
month = parseInt(month);

// Проверяем корректность ввода
if (isNaN(day) || isNaN(month) || day < 1 || day > 31 || month < 1 || month > 12) {
    console.log("Некорректная дата рождения.");
} else {
    // Получаем знак зодиака и выводим результат
    var zodiacSign = getZodiacSign(day, month);
    console.log("Ваш знак зодиака: " + zodiacSign);
}
resultDiv.textContent = "Ваш знак зодиака: " + zodiacSign;
