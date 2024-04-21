// Створюємо кнопку меню
var menuButton = document.createElement('button');
menuButton.textContent = 'Меню';
menuButton.classList.add('menu-button');

// Додаємо обробник події при кліку на кнопку меню
menuButton.addEventListener('click', function() {
    // Створюємо контейнер для кнопки "Гра" та додаткового вмісту меню
    var menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    // Створюємо кнопку "Гра"
    var gameButton = document.createElement('button');
    gameButton.textContent = 'Гра';
    gameButton.classList.add('game-button');

    // Додаємо обробник події при кліку на кнопку "Гра"
    gameButton.addEventListener('click', function() {
        // Відкриваємо посилання на гру
        window.open('https://daria1284.github.io/Phaser2ndGame/');
    });

    // Додаємо кнопку "Гра" до контейнера
    menuContainer.appendChild(gameButton);

    // Додаємо контейнер до body
    document.body.appendChild(menuContainer);
});

// Додаємо кнопку меню до body
document.body.appendChild(menuButton);
