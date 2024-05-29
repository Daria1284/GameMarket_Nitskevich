// //Перевірка підключеного файлу скриптів
// console.log('Перевірка підключеного файлу скриптів market.js')
// // Отримання елементу з ідентифікатором items
// let itemsDiv =document.getElementById("items"); 
//Визначення масиву товарів
let itemsArray = [
    {
        title: "Carpathians",
        author: "Присяжнюк Богдана",
        author_photo: "Присяжнюк.jpg",
        email: "23a_pbv@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "img-market/01_bohdana.png",
        game_github: "https://github.com/Prydana/Phaser2stGame",
        game_pages: "https://prydana.github.io/Phaser2stGame/",
        docs: "https://drive.google.com/drive/folders/1K--lAbvnwzUQ4BjN136Blvp46ErW0mkJ",
        forms: "https://forms.gle/HnBZ5pzJ4DLpa6E69",
        gamemarket_github: "https://github.com/Prydana/GameMarket_Prysiazhniuk",
        gamemarket_pages: "https://prydana.github.io/GameMarket_Prysiazhniuk/",
        market_pages: "https://prydana.github.io/GameMarket_Prysiazhniuk/market.html",
        stars: 5
    },
    {
        title: "Title",
        author: "Недзвецький Олег",
        author_photo: "Недзвецький.jpg",
        email: "23a_nom@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "img-market/2.png",
        game_github: "https://github.com/Viogoo/Phaser2stGame2",
        game_pages: "https://viogoo.github.io/Phaser2stGame2/",
        docs: "https://drive.google.com/drive/folders/1a-3VlIBE5SnalcPulY1mKWRTqvyydk5i?usp=sharing",
        forms: "https://forms.gle/bvgt8tydcyS6AXPA6",
        gamemarket_github: "https://github.com/Viogoo/Game_Market_Nedzvetskiy_Oleg",
        gamemarket_pages: "https://viogoo.github.io/Game_Market_Nedzvetskiy_Oleg/",
        market_pages: "https://viogoo.github.io/market/",
        stars: 4
    },
    {
        title: "Phaser 2nd Game",
        author: "Ніцкевич Дар'я",
        author_photo: "Ніцкевич.jpg",
        email: "23a_ndi@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "img-market/03.jpg",
        game_github: "https://github.com/Daria1284/Phaser2ndGame",
        game_pages: "https://daria1284.github.io/Phaser2ndGame/",
        docs: "https://drive.google.com/drive/folders/1sx_bP3YdCY99mFM02u-FVcmtGm8bfNc1?usp=drive_link",
        forms: "https://forms.gle/PSoFKF3f8JE8JDF18",
        gamemarket_github: "https://github.com/Daria1284/GameMarket_Nitskevich",
        gamemarket_pages: "https://daria1284.github.io/GameMarket_Nitskevich/",
        market_pages: "https://daria1284.github.io/GameMarket_Nitskevich/market.html",
        stars: 4
    },
    {
        title: "Game",
        author: "Соломонюк Богдан",
        author_photo: "Соломонюк.jpg",
        email: "23a_sbr@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "img-market/04.jpg",
        game_github: "https://github.com/23asbr/phaser2ndGame",
        game_pages: "https://23asbr.github.io/phaser2ndGame/",
        docs: "https://drive.google.com/drive/folders/1JcIFHoj8MY56cyNeD8yoQkIgYxHIFwl3?usp=drive_link",
        forms: "https://forms.gle/DbGSNNiXNbAfQx6x6",
        gamemarket_github: "https://github.com/23asbr/Game_Market_solomoniyk",
        gamemarket_pages: "https://23asbr.github.io/Game_Market_solomoniyk/",
        market_pages: "https://23asbr.github.io/Game_Market_solomoniyk/market.html",
        stars: 4
    },
    {
        title: "Comiks",
        author: "Філімончук Євгеній",
        author_photo: "Філімончук.jpg",
        email: "23a_fyev@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "img-market/05.jpg",
        game_github: "https://github.com/filimonchukevgeniy/Phaser2ndGame",
        game_pages: "https://filimonchukevgeniy.github.io/Phaser2ndGame/",
        docs: "https://drive.google.com/drive/folders/1gLzj_epUzeFt_KBhcfez33Xx4fcSrSJ9",
        forms: "https://forms.gle/gd2oE6EtLB3yFCa9A",
        gamemarket_github: "https://github.com/filimonchukevgeniy/GameMarket_Filimochuk",
        gamemarket_pages: "https://filimonchukevgeniy.github.io/GameMarket_Filimochuk/",
        market_pages: "https://filimonchukevgeniy.github.io/GameMarket_Filimochuk/market.html",
        stars: 4
    },
    {
        title: "Game",
        author: "Сікалюк Артем",
        author_photo: "Сікалюк.jpg",
        email: "23a_sai@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "img-market/06.jpg",
        game_github: "https://github.com/lokloter/Phaser2ndGame",
        game_pages: "https://lokloter.github.io/Phaser2ndGame/",
        docs: "https://drive.google.com/drive/folders/1CVaq2qHRHtju8V-IVYyI2a2bBJLlE-VH?usp=sharing",
        forms: "https://forms.gle/7oHYvp5hUw1oDwGZA",
        gamemarket_github: "https://github.com/lokloter/gamemarket",
        gamemarket_pages: "https://lokloter.github.io/gamemarket/",
        market_pages: "https://lokloter.github.io/market/",
        stars: 4
    },
    {
        title: "Title",
        author: "Якубець Денис",
        author_photo: "Якубець.jpg",
        email: "23a_yada@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "img-market/07.jpg",
        game_github: "https://github.com/D3nis1238/Phaser-2nd-Game",
        game_pages: "https://d3nis1238.github.io/Phaser-2nd-Game/?authuser=0",
        docs: "https://docs.google.com/document/d/1H_AWqM8u9rFfDKVAxynlz5wGyiIW2AzeI2gTvWWs7Wc/edit?usp=sharing",
        forms: "https://forms.gle/NtHkb7ErZAcexoPY7",
        gamemarket_github: "https://github.com/D3nis1238/GameMarket_Yakubets",
        gamemarket_pages: "https://d3nis1238.github.io/GameMarket_Yakubets/",
        market_pages: "https://d3nis1238.github.io/GameMarket_Yakubets/market.html?authuser=0",
        stars: 4
    },
    {
        title: "Phaser2ndGame",
        author: "Будішевський Єгор",
        author_photo: "Будішевський Єгор.jpg",
        email: "23a_byeyu@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "img-market/08.jpg",
        game_github: "https://github.com/EgorZTUkl/Platformer",
        game_pages: "https://egorztukl.github.io/Platformer/",
        docs: "https://drive.google.com/drive/folders/1Gme_cOgj7R14t3kaxbLxjPxgmTvhTKYq?usp=drive_link",
        forms: "https://forms.gle/ziZ41L7qHnzp6o7x6",
        gamemarket_github: "",
        gamemarket_pages: "",
        market_pages: "",
        stars: 3
    },
    {
        title: "Title",
        author: "Мединський Роман",
        author_photo: "Мединський.jpg",
        email: "23a_mrd@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "img-market/09.jpg",
        game_github: "https://github.com/MedynskyiRoman/Phaser2ndGame",
        game_pages: "https://medynskyiroman.github.io/Phaser2ndGame/",
        docs: "https://drive.google.com/drive/folders/1ujjej9ifF-2xqLKIc5X2vpohSn6ZenZ4?usp=sharing",
        forms: "https://forms.gle/MzKxFco9L798EjKi8?authuser=1",
        gamemarket_github: "https://github.com/MedynskyiRoman/GameMarket_Medynskyi",
        gamemarket_pages: "https://medynskyiroman.github.io/GameMarket_Medynskyi/",
        market_pages: "https://medynskyiroman.github.io/market-test1",
        stars: 4
    },
    {
        title: "Phaser2ndGame",
        author: "Михальський Нікіта",
        author_photo: "Михальський.jpg",
        email: "23a_mnv@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "img-market/10.jpg",
        game_github: "https://github.com/Cement-Official/Minorun",
        game_pages: "https://cement-official.github.io/Minorun/",
        docs: "https://docs.google.com/document/d/1lgWfQHAtTu1E_xi-3cKiAC_8ZR0TD4xTL6B5dMvqGY0/edit?usp=sharing",
        forms: "https://forms.gle/XVTQaam7Maj2HLCh8",
        gamemarket_github: "https://github.com/Cement-Official/GameMarket_Myhalskiy",
        gamemarket_pages: "https://cement-official.github.io/GameMarket_Myhalskiy/",
        market_pages: "https://cement-official.github.io/GameMarket_Myhalskiy/market.html?authuser=0",
        stars: 4
    },
    {
        title: "ЗОВ Пікселів",
        author: "Столяров Руслан",
        author_photo: "Столяров.jpg",
        email: "23a_srm@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "img-market/11.jpg",
        game_github: "https://github.com/Shxdxwbxrnzz/Phaser2ndGame",
        game_pages: "https://shxdxwbxrnzz.github.io/Phaser2ndGame/",
        docs: "https://drive.google.com/drive/folders/1hAhvz34e5KZ7pK-6kGDYw0V-MhZHmw3k?usp=sharing",
        forms: "https://docs.google.com/forms/d/e/1FAIpQLSfGf9QIp20gQ-Cl5FrVKXoFKkE8QcHToU52-BWm9EFHfomLUw/viewform?usp=sharing",
        gamemarket_github: "https://github.com/Shxdxwbxrnzz/GameMarket_Stolyarov",
        gamemarket_pages: "https://shxdxwbxrnzz.github.io/GameMarket_Stolyarov/",
        market_pages: "https://shxdxwbxrnzz.github.io/Market/market.html",
        stars: 4
    },
    {
        title: "",
        author: "Столярчук Дмитро",
        author_photo: "Столярчук.jpg",
        email: "23a_sdv@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "",
        game_github: "",
        game_pages: "",
        docs: "https://drive.google.com/drive/folders/12U9uaTrFbhzDPFx_wr8EnpO-ETNscTE5?usp=sharing",
        forms: "https://forms.gle/mbTievdu9FFLXpnV8",
        gamemarket_github: "",
        gamemarket_pages: "",
        market_pages: "",
        stars: 3
    },
    {
        title: "",
        author: "Ткач Кирил",
        author_photo: "Ткач.jpg",
        email: "23a_tkv@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "",
        game_github: "https://github.com/21kery21/MyFirstPygameGame",
        game_pages: "",
        docs: "https://drive.google.com/drive/folders/1fuUL8e5OCvSsQlp2i2UlqLIqwoI9QLOg?usp=sharing",
        forms: "https://forms.gle/uHDRhupAuBvuQrQT9",
        gamemarket_github: "",
        gamemarket_pages: "",
        market_pages: "https://21kery21.github.io/Market/",
        stars: 3
    },
    {
        title: "Title",
        author: "Хмєль",
        author_photo: "Хмєль.jpg",
        email: "23a_khiv@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "img-market/14.jpg",
        game_github: "https://github.com/khiv23/game1",
        game_pages: "https://khiv23.github.io/game1/",
        docs: "https://docs.google.com/document/d/1cJxpp8cg3h1lXFxGf03EDxdMv3SWk8C-PO5xYU-xYZg/edit",
        forms: "https://docs.google.com/forms/d/1iR5j3fyjTa7qKMMM2HUhlMLiP01NLBvM2yoLFQnbX8o/edit",
        gamemarket_github: "https://github.com/khiv23/GameMarket_Khmel",
        gamemarket_pages: "https://khiv23.github.io/GameMarket_Khmel/",
        market_pages: "https://khiv23.github.io/GameMarket_Khmel/market.html",
        stars: 4
    },
]
// Отримання елементу з індифікатором items
let itemsDiv = document.getElementById("items");
// Перевірка існування знайденого блоку 
if (itemsDiv) { 
    // Створення блоків по кількості елементів масиву
    itemsArray.forEach((item, index) => {
        // Виводимо на веб-сторінку елемент масиву в блок з класом item
        itemsDiv.innerHTML += `
    
        <div class="item">
        <div class="bober">
            <div class="item-title">${item.title}</div>
            <div class="item-title">${item.author}</div>
            <div class="item-title">${item.email}</div>
            <div class="item-title">${item.group}</div>
        </div>
        <div class="item-image">
            <img src="${item.image}"  class="item-image">
            <img src="${item.author_photo}"  class="item-image">
           
            
        </div>
        <div class="parts-pay">
            <div><a href = "${item.game_github}" target=_blank>Market Github</
            a><div>
            <div><a href = "${item.game_pages}" target=_blank>Market Pages</
            a><div>
            <div><a href = "${item.docs}" target=_blank>Docs</
            a><div>
            <div><a href = "${item.forms}" target=_blank>Forms</
            a><div>
            <div><a href = "${item.gamemarket_github}" target=_blank>Gamemarket_github</
            a><div>
            <div><a href = "${item.gamemarket_pages}" target=_blank>Gamemarket_pages</
            a><div>
            <div><a href = "${item.market_pages}" target=_blank>Market_pages</
            a><div>
            <div><a href = "${item.stars}" target=_blank>Stars</
            a><div>
            
            
            
          
        
    </div>`;
});
} else {
// Вивід повідомлення про не знайдений блок 
console.log('Блок товарів не знайдено');
}





























// //Виведення елементів відсортованого масиву
// itemsArray.sort().forEach((item,index) =>{
//     console.log(index + '-й елемент:',item)
// })
// //Сортування масиву
// itemsArray = itemsArray.sort()
// // Виведення в консоль масиву
// console.log(itemsArray)
// //Виведення в консоль елементів масиву
// for(let i = 0; i<itemsArray.length; i++){
//     console.log(itemsArray[i])
// }
// //Виведення в коносль номерів та значень елементів масиву
// for(let i = 0; i < itemsArray.length; i++){
//     console.log(i +'-й елемент: ', itemsArray[i])
// }
// Початковий показ вчителів
// displayTeachers(itemsArray);

// function displayTeachers(teachers) {
//     let sortedTeachers = teachers.slice(); // Клонування масиву
//     itemsDiv.innerHTML = ''; // Очистити вміст контейнера

//     sortedTeachers.forEach((teacher, index) => {
//         itemsDiv.innerHTML +=
//             `<div class="item">
//                 <h2>Вчитель № ${index + 1} з ${sortedTeachers.length}</h2>
//                 <p>${teacher.lastName} ${teacher.firstName}</p>
//                 <p><img src="${teacher.photo}" alt="${teacher.lastName} ${teacher.firstName}" class="item-image"></p>
//                 <p>Вік: ${teacher.age} </p>
//                 <p>Предмет: ${teacher.subject} </p>
//                 <p>Освіта: ${teacher.education} </p>
//                 <p>Звання: ${teacher.rank} </p>
//                 <p><a href="${teacher.url}" target="_blank">Профіль</a></p>
//             </div>`;
//     });
// }

// function sortByAge() {
//     let sortedByAge = itemsArray.slice().sort((a, b) => parseInt(a.age) - parseInt(b.age));
//     displayTeachers(sortedByAge);
// }

// function sortByLastName() {
//     let sortedByLastName = itemsArray.slice().sort((a, b) => a.lastName.localeCompare(b.lastName));
//     displayTeachers(sortedByLastName);
// }

// function sortBySubject() {
//     let sortedBySubject = itemsArray.slice().sort((a, b) => a.subject.localeCompare(b.subject));
//     displayTeachers(sortedBySubject);
// }



{/* <div class="prise">
        <div><a href = "${item.docs}" target=_blank>Market Github</
        a><div>
        <div class="prise bonus">
            <div>ціна за купоном</div>
            <div><span>${item.couponPrice}</span><sup>грн</sup></div>
        </div> */}