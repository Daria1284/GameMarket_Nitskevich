// //Перевірка підключеного файлу скриптів
// console.log('Перевірка підключеного файлу скриптів market.js')
// // Отримання елементу з ідентифікатором items
// let itemsDiv =document.getElementById("items"); 
//Визначення масиву товарів
let itemsArray = [
    {
        title: "Carpathianth",
        author: "Присяжнюк Богдана",
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
        stars: ""
      },
    {
        name: "Електричний тример 110",
        price: "4 497 ",
        discountPrice: "3 498",
        couponPrice: "3 396",
        photo: "https://static.dnipro-m.ua/origin/description/6566/design/m-110.jpg"
    },
    {
        name: "Електрична газонокосарка 32",
         price: "4 497",
        discountPrice: "3 297",
        couponPrice: "3 195",
        photo: "https://static.dnipro-m.ua/origin/description/6567/design/electric-mower-32.jpg"
    },
    {
        name: "Акумуляторний обприскувач 12 N",
        price: "2 190 ",
        discountPrice: "1 698",
        couponPrice: "1 596",
        photo: "https://hotline.ua/img/tx/449/4492289865.jpg"
    }  ,
   


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
            <div class="item-title">${item.stars}</div>
            
            
          
        
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