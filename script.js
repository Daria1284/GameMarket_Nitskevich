// Створюємо кнопку меню та змінну для відстеження стану меню
var menuButton = document.createElement('button');
menuButton.textContent = 'Меню';
menuButton.classList.add('menu-button');
var isMenuOpen = false;

// Додаємо обробник події при кліку на кнопку меню
menuButton.addEventListener('click', function() {
    // Перевіряємо стан меню
    if (!isMenuOpen) {
        // Створюємо контейнер для кнопок "Гра" та "Ніцкевич Даря"
        var menuContainer = document.createElement('div');
        menuContainer.classList.add('menu-container');

        // Створюємо кнопку "Гра"
        var gameButton = document.createElement('button');
        gameButton.textContent = 'Гра';
        gameButton.classList.add('game-button');

        // Додаємо обробник події при кліку на кнопку "Гра"
        gameButton.addEventListener('click', function() {
            // Створюємо кнопку "Ніцкевич Даря"
            var dariaButton = document.createElement('button');
            dariaButton.textContent = 'Ніцкевич Даря';
            dariaButton.classList.add('daria-button');

            // Додаємо обробник події при кліку на кнопку "Ніцкевич Даря"
            dariaButton.addEventListener('click', function() {
                // Відкриваємо посилання на гру
                window.open('https://daria1284.github.io/Phaser2ndGame/');
            });

            // Додаємо кнопку "Ніцкевич Даря" до контейнера
            menuContainer.appendChild(dariaButton);
        });

        // Додаємо кнопку "Гра" до контейнера
        menuContainer.appendChild(gameButton);

        // Додаємо контейнер до body
        document.body.appendChild(menuContainer);

        // Встановлюємо стилі для контейнера, щоб кнопки з'явилися під кнопкою меню на відстані 2 см
        var menuButtonRect = menuButton.getBoundingClientRect(); // отримуємо розміри кнопки меню
        menuContainer.style.position = 'absolute'; // задаємо абсолютне позиціонування
        menuContainer.style.left = menuButtonRect.left + 'px'; // встановлюємо ліву позицію контейнера відносно кнопки меню
        menuContainer.style.top = (menuButtonRect.bottom + 20) + 'px'; // встановлюємо верхню позицію контейнера з відступом в 20 пікселів від нижньої границі кнопки меню
        
        // Оновлюємо стан меню
        isMenuOpen = true;
    } else {
        // Видаляємо контейнер меню, якщо він вже відкритий
        var menuContainer = document.querySelector('.menu-container');
        if (menuContainer) {
            menuContainer.remove();
        }
        
        // Оновлюємо стан меню
        isMenuOpen = false;
    }
});

// Додаємо кнопку меню до body
document.body.appendChild(menuButton);
