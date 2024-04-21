// Знаходимо елемент #header
var header = document.getElementById('header');

// Створюємо кнопку
var gameButton = document.createElement('button');
gameButton.textContent = 'Гра';

// Додаємо клас для стилізації
gameButton.classList.add('game-button');

// Додаємо обробник події при кліку на кнопку
gameButton.addEventListener('click', function() {
    // Відкриваємо посилання на гру
    window.open('https://daria1284.github.io/Phaser2ndGame/');
});

// Додаємо кнопку до #header
header.appendChild(gameButton);
