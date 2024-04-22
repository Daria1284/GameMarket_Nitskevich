// Створюємо кнопку меню та змінну для відстеження стану меню
var menuButton = document.createElement('button');
menuButton.textContent = 'Меню';
menuButton.classList.add('menu-button');
var isMenuOpen = false;
var isGameOpen = false; // Додаємо змінну для відстеження стану кнопки "Гра"
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
                menuContainer.appendChild(dariaButton);

                // Встановлюємо стилі для кнопки "Ніцкевич Даря", щоб вона з'явилась під кнопкою "Гра"
                dariaButton.style.position = 'fixed';
                dariaButton.style.left = gameButton.offsetLeft + 'px';
                dariaButton.style.top = gameButton.offsetTop + gameButton.offsetHeight + 20 + 'px'; // встановлюємо верхню позицію кнопки "Ніцкевич Даря" з відступом в 20 пікселів від нижньої границі кнопки "Гра"

                // Оновлюємо стан кнопки "Гра"
                isGameOpen = true;
            } else {
                // Видаляємо кнопку "Ніцкевич Даря", якщо вона вже відкрита
                var dariaButton = document.querySelector('.daria-button');
                if (dariaButton) {
                    dariaButton.remove();
                }

                // Оновлюємо стан кнопки "Гра"
                isGameOpen = false;
            }
        });

        // Створюємо кнопку "Власники"
        var ownersButton = document.createElement('button');
        ownersButton.textContent = 'Власники';
        ownersButton.classList.add('owners-button');

        // Додаємо обробник події при кліку на кнопку "Власники"
        ownersButton.addEventListener('click', function() {
            // Відкриваємо посилання на власників
            window.open('https://daria1284.github.io/');
        });

        // Додаємо кнопку "Ігри" до контейнера
        menuContainer.appendChild(gameButton);

        // Додаємо кнопку "Власники" до контейнера
        menuContainer.appendChild(ownersButton);

        // Додаємо контейнер до body
        document.body.appendChild(menuContainer);

        // Встановлюємо стилі для контейнера, щоб кнопки з'явилися під кнопкою меню на відстані 1 см
        var menuButtonRect = menuButton.getBoundingClientRect(); // отримуємо розміри кнопки меню
        menuContainer.style.position = 'absolute'; // задаємо абсолютне позиціонування
        menuContainer.style.left = menuButtonRect.left + 'px'; // встановлюємо ліву позицію контейнера відносно кнопки меню
        menuContainer.style.top = (menuButtonRect.bottom + 10) + 'px'; // встановлюємо верхню позицію контейнера з відступом в 10 пікселів від нижньої границі кнопки меню

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

// Додаємо кнопку меню до body
document.body.appendChild(menuButton);
