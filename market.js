// //Перевірка підключеного файлу скриптів
// console.log('Перевірка підключеного файлу скриптів market.js')
// // Отримання елементу з ідентифікатором items
// let itemsDiv =document.getElementById("items"); 
//Визначення масиву товарів
let itemsArray = [
    {
        name: "Мотокоса 43",
        
        price: "5499 ",
        discountPrice: "4497 ",
        couponPrice: "4395",
        
        photo: "https://hotline.ua/img/tx/319/3193450945.jpg"
    },
    {
        name: "Електричний тример 110",
        price: "4497 ",
        discountPrice: "3498",
        couponPrice: "3396",
        photo: "https://static.dnipro-m.ua/origin/description/6566/design/m-110.jpg"
    },
    {
        name: "Електрична газонокосарка 32",
         price: "4497",
        discountPrice: "3297",
        couponPrice: "3195",
        photo: "https://static.dnipro-m.ua/origin/description/6567/design/electric-mower-32.jpg"
    },
    {
        name: "Акумуляторний оприскувач 12 N",
        price: "2190 ",
        discountPrice: "1698",
        couponPrice: "1596",
        photo: "https://hotline.ua/img/tx/449/4492289865.jpg"
    }  ,
   

//     {
//         firstName: "Марія",
//         lastName: "Гетьманська",
//         age: "41",
//         subject: "психологія",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hetmanska-mariya-oleksandrivna-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/hetmanska-m-o/",
//         education: "Вища",
//         rank:"«викладач-методист»"
//     },
//     {
//         firstName: "Марія",
//         lastName: "Медведєва",
//         age: "41",
//         subject: "географія",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/medvedyeva-mariya-vasylivna-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/medvedyeva-mariya-vasylivna/",
//         education: "Вища",
//         rank:"«викладач-методист»"
//     },
//     {
//         firstName: "Тарас",
//         lastName: "Савінков",
//         age: "41",
//         subject: "англ",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/savinkov-taras-yevhenovych-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/savinkov-taras-yevhenovych/",
//         education: "Вища",
//         rank:"«викладач-методист»"
//     },
//     {
//         firstName: "Ірина",
//         lastName: "Боровська-Карандюк",
//         age: "41",
//         subject: "укр",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/borovska-karandyuk-iryna-anatoliyivna-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/borovska-karandyuk-iryna-anatoliyivna/",
//         education: "Вища",
//         rank:"«викладач-методист»"
//     },
//     {
//         firstName: "Ірина",
//         lastName: "Глібко",
//         age: "41",
//         subject: "англ",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/01/hlibko-iryna-anatoliyevna.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/hlibko-iryna-anatoliyivna/",
//         education: "Вища",
//         rank:"«викладач-методист»"
//     },
//     {
//         firstName: "Наталія",
//         lastName: "Венцель",
//         age: "41",
//         subject: "директор",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
//         education: "Вища",
//         rank:"«викладач-методист»"
//     },
//     {
//         firstName: "Наталія",
//         lastName: "Зинюк",
//         age: "41",
//         subject: "хімія",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/zynyuk-nataliya-mykolayivna/",
//         education: "Вища",
//         rank:"«викладач-методист»"
//     },
//     {
//         firstName: "Анжела",
//         lastName: "Лознюк",
//         age: "41",
//         subject: "укр літ",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1-693x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/loznyuk-anzhela-leonidivna/",
//         education: "Вища",
//         rank:"«викладач-методист»"
//     },
//     {
//         firstName: "Вікторія",
//         lastName: "Нелипович",
//         age: "45",
//         subject: "Математика",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
//         education: "Вища",
//         rank:"«викладач-методист»"
//     },
//     {
//         firstName: "Олена",
//         lastName: "Геча",
//         age: "42",
//         subject: "Історія",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/hecha-o-a/",
//         education: "Вища",
//         rank:" «старший вчитель»"
//     },
    
//     {
//     firstName: "Лариса",
//     lastName: "Забелло",
//     age: "47",
//     subject: "Англійська мова",
//     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/zabello-larysa-oleksandrivna.jpg",
//     url: "https://lyceum.ztu.edu.ua/team/zabello-l-o/",
//     education: "Вища",
//     rank:"«вчитель-методист»"
// },

// {
//     firstName: "Василь",
//     lastName: "Бабій",
//     age: "56",
//     subject: "Фізична культура",
//     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych.jpg",
//     url: "https://lyceum.ztu.edu.ua/team/babiy-vasyl-dmytrovych/",
//     education: "Вища",
//     rank:"«спеціаліст першої категорії»"
// },



//     'Газоноосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N',
//     'Газоноосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N',
//     'Газоноосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N',
    
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
            <div class="item-title">${item.name}</div>
        </div>
        <div class="item-image">
        <img src="${item.photo}"  class="item-image">
           
            
        </div>
        <div class="parts-pay">
            <div><img src="img-market/mono-lapka.png" alt="">6</div>
            <div><img src="img-market/pb.png" alt="">8</div>
        </div>
        <div class="prise">
            <div><span>${item.price}</span><sup>грн</sup></div>
            <div><span>${item.discountPrice}</span><sup>грн</sup></div>
        </div>
        <div class="prise bonus">
            <div>ціна за купоном</div>
            <div><span>${item.couponPrice}</span><sup>грн</sup></div>
        </div>
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
