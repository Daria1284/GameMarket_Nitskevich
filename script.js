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
  
        closeAllMenus(); // Закриваємо всі вкладки
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
    closeAllMenus(); // Закриваємо всі інші вкладки
    
    // Створюємо контейнер для нового простору з білим фоном
    var whiteSpace = document.createElement('div');
    whiteSpace.classList.add('white-space'); // Додаємо клас для стилізації

    // Додаємо стилі для контейнера з білим фоном
    whiteSpace.style.backgroundColor = '#ffffff'; // Білий колір фону
    whiteSpace.style.position = 'fixed'; // Абсолютне позиціонування
    whiteSpace.style.top = '0'; // Позиція зверху
    whiteSpace.style.left = '0'; // Позиція зліва
    whiteSpace.style.width = '100%'; // Ширина на всю ширину вікна
    whiteSpace.style.height = '100%'; // Висота на всю висоту вікна
    whiteSpace.style.zIndex = '9999'; // Збільшуємо z-index, щоб він був над усіма іншими елементами

    // Додаємо контейнер з білим фоном до body
    document.body.appendChild(whiteSpace);
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