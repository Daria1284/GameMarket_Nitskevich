// Створюємо кнопку меню та змінну для відстеження стану меню
var menuButton = document.createElement('button');
menuButton.textContent = 'Меню';
menuButton.classList.add('menu-button');
var isMenuOpen = false;
var isGameOpen = false; // Додаємо змінну для відстеження стану кнопки "Гра"
var isOwnersOpen = false; // Додаємо змінну для відстеження стану кнопки "Власники"

// Створюємо елемент header
var header = document.createElement('header');

// Додаємо стилі для header
header.style.backgroundColor = '#f0f0f0'; // світло чорний колір

// Додаємо header до body
document.body.insertBefore(header, document.body.firstChild);

// Додаємо обробник події при кліку на кнопку меню
menuButton.addEventListener('click', function() {
    // Перевіряємо стан меню
    if (!isMenuOpen) {
        // Створюємо контейнер для кнопок "Гра" та "Ніцкевич Даря"
        var menuContainer = document.createElement('div');
        menuContainer.classList.add('menu-container');

        // Створюємо кнопку "Гра"
        var gameButton = document.createElement('button');
        gameButton.textContent = 'Ігри';
        gameButton.classList.add('game-button');

        // Додаємо обробник події при кліку на кнопку "Гра"
        gameButton.addEventListener('click', function() {
            if (!isGameOpen) {
                closeAllMenus(); // Закриваємо всі інші вкладки
                // Створюємо контейнер для вкладки "Ніцкевич Даря"
                var gameContainer = document.createElement('div');
                gameContainer.classList.add('game-container');

                // Створюємо кнопку "Ніцкевич Даря"
                var dariaButton = document.createElement('button');
                dariaButton.textContent = "Ніцкевич Дар'я";
                dariaButton.classList.add('daria-button');

                // Додаємо обробник події при кліку на кнопку "Ніцкевич Даря"
                dariaButton.addEventListener('click', function() {
                    // Відкриваємо посилання на гру
                    window.open('https://daria1284.github.io/Phaser2ndGame/');
                });

                // Додаємо кнопку "Ніцкевич Даря" до контейнера
                gameContainer.appendChild(dariaButton);

                // Додаємо контейнер вкладки "Ніцкевич Даря" до body
                document.body.appendChild(gameContainer);

                // Оновлюємо стан вкладки "Гра"
                isGameOpen = true;

                // Перевіряємо, чи відкрита вкладка "Власники" і при потребі закриваємо її
                if (isOwnersOpen) {
                    var ownersContainer = document.querySelector('.owners-container');
                    if (ownersContainer) {
                        ownersContainer.remove();
                        isOwnersOpen = false;
                    }
                }
            } else {
                // Видаляємо контейнер вкладки "Ніцкевич Даря", якщо вона вже відкрита
                var gameContainer = document.querySelector('.game-container');
                if (gameContainer) {
                    gameContainer.remove();
                }

                // Оновлюємо стан вкладки "Гра"
                isGameOpen = false;
            }
        });

        // Створюємо кнопку "Власники"
        var ownersButton = document.createElement('button');
        ownersButton.textContent = 'Власники';
        ownersButton.classList.add('owners-button');

        // Додаємо обробник події при кліку на кнопку "Власники"
        ownersButton.addEventListener('click', function() {
            if (!isOwnersOpen) {
                closeAllMenus(); // Закриваємо всі інші вкладки
                // Створюємо контейнер для власників
                var ownersContainer = document.createElement('div');
                ownersContainer.classList.add('owners-container');

                // Створюємо вміст для вкладки власників
                var ownersContent = document.createElement('p');
                ownersContent.textContent = 'Власники: Дар\'я Ніцкевич';
                ownersContent.classList.add('owners-content');

                // Додаємо вміст до контейнера
                ownersContainer.appendChild(ownersContent);

                // Додаємо контейнер до body
                document.body.appendChild(ownersContainer);

                // Оновлюємо стан вкладки "Власники"
                isOwnersOpen = true;

                // Перевіряємо, чи відкрита вкладка "Ігри" і при потребі закриваємо її
                if (isGameOpen) {
                    var gameContainer = document.querySelector('.game-container');
                    if (gameContainer) {
                        gameContainer.remove();
                        isGameOpen = false;
                    }
                }
            } else {
                // Видаляємо контейнер власників, якщо він вже відкритий
                var ownersContainer = document.querySelector('.owners-container');
                if (ownersContainer) {
                    ownersContainer.remove();
                }

                // Оновлюємо стан вкладки "Власники"
                isOwnersOpen = false;
            }
        });

        // Додаємо кнопку "Власники" до контейнера
        menuContainer.appendChild(ownersButton);

        // Додаємо кнопку "Ігри" до контейнера
        menuContainer.appendChild(gameButton);

        // Додаємо контейнер до body
        document.body.appendChild(menuContainer);

        // Встановлюємо стилі для контейнера, щоб кнопки з'явилися під кнопкою меню на відстані 1 см
        var menuButtonRect = menuButton.getBoundingClientRect(); // отримуємо розміри кнопки меню
        menuContainer.style.position = 'fixed'; // задаємо абсолютне позиціонування
        menuContainer.style.left = menuButtonRect.left + 'px'; // встановлюємо ліву позицію контейнера відносно кнопки меню
        menuContainer.style.top = (menuButtonRect.bottom + 100) + 'px'; // встановлюємо верхню позицію контейнера з відступом в 10 пікселів від нижньої границі кнопки меню

        // Встановлюємо ліву позицію кнопки "Власники" так само, як кнопки "Меню"
        ownersButton.style.left = menuButtonRect.left + 'px';

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

// Функція для закриття всіх вкладок
function closeAllMenus() {
    var menuContainer = document.querySelector('.menu-container');
    if (menuContainer) {
        menuContainer.remove();
    }
    var gameContainer = document.querySelector('.game-container');
    if (gameContainer) {
        gameContainer.remove();
    }
    var ownersContainer = document.querySelector('.owners-container');
    if (ownersContainer) {
        ownersContainer.remove();
    }

    // Оновлюємо стани всіх вкладок
    isMenuOpen = false;
    isGameOpen = false;
    isOwnersOpen = false;
}

// Створюємо кнопку "Ігри"
document.body.appendChild(menuButton);