// //Перевірка підключеного файлу скриптів
// console.log('Перевірка підключеного файлу скриптів market.js')
// // Отримання елементу з ідентифікатором items
// let itemsDiv =document.getElementById("items"); 
//Визначення масиву товарів
let itemsArray = [
    {
        firstName: "Ірина",
        lastName: "Глібко",
        age: "41",
        subject: "англ",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/01/hlibko-iryna-anatoliyevna.jpg",
        url: "https://lyceum.ztu.edu.ua/team/hlibko-iryna-anatoliyivna/",
        education: "Вища",
        rank:"«викладач-методист»"
    },
    {
        firstName: "Наталія",
        lastName: "Венцель",
        age: "41",
        subject: "директор",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
        education: "Вища",
        rank:"«викладач-методист»"
    },
    {
        firstName: "Наталія",
        lastName: "Зинюк",
        age: "41",
        subject: "хімія",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/zynyuk-nataliya-mykolayivna/",
        education: "Вища",
        rank:"«викладач-методист»"
    },
    {
        firstName: "Анжела",
        lastName: "Лознюк",
        age: "41",
        subject: "укр літ",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1-693x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/loznyuk-anzhela-leonidivna/",
        education: "Вища",
        rank:"«викладач-методист»"
    },
    {
        firstName: "Вікторія",
        lastName: "Нелипович",
        age: "45",
        subject: "Математика",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna.jpg",
        url: "https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
        education: "Вища",
        rank:"«викладач-методист»"
    },
    {
        firstName: "Олена",
        lastName: "Геча",
        age: "42",
        subject: "Історія",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna.jpg",
        url: "https://lyceum.ztu.edu.ua/team/hecha-o-a/",
        education: "Вища",
        rank:" «старший вчитель»"
    },
    
    {
    firstName: "Лариса",
    lastName: "Забелло",
    age: "47",
    subject: "Англійська мова",
    photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/zabello-larysa-oleksandrivna.jpg",
    url: "https://lyceum.ztu.edu.ua/team/zabello-l-o/",
    education: "Вища",
    rank:"«вчитель-методист»"
},

{
    firstName: "Василь",
    lastName: "Бабій",
    age: "56",
    subject: "Фізична культура",
    photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych.jpg",
    url: "https://lyceum.ztu.edu.ua/team/babiy-vasyl-dmytrovych/",
    education: "Вища",
    rank:"«спеціаліст першої категорії»"
},



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
//Отримання елементу з індифекатором items
let itemsDiv = document.getElementById("items");
//Перевірка існування знайденого блоку 
if (itemsDiv) { 
     //Створення блоків по кількості елементів масиву
itemsArray.forEach((item,index)=>{
    //Спеціальний апостроф - Англійська розкладка - біля кнопки 1 ~
    // console.log(item)
 // Виводимо на веб-сторінку елемент масиву в блок з класом item
 itemsDiv.innerHTML += 
 `
 <div class="item">
 <h2>Вчитель № ${index + 1} з ${itemsArray.length}</h2>
 <p>${item.lastName} ${item.firstName}</p>
 <p><img src="${item.photo}" alt="${item.lastName} ${item.firstName}" class="item-image"></p>
 <p>Вік: ${item.age} </p>
 <p>Предмет: ${item.subject} </p>
 <p>Освіта: ${item.education} </p>
 <p>Звання: ${item.rank} </p>
 <p><a href="${item.url}" target ="_blank" >Профіль</a></p>

 </div>
    `
})
{/* <h2>Товар №${index + 1} з ${itemsArray.length}</h2>
<p>${item}</p>
</div>`
}) */}

    //Додавання відформатованого HTML коду в блок 
    // itemsDiv.innerHTML += '<div class = "item"></div>' 
    // itemsDiv.innerHTML += '<div class = "item"></div>' 
    // itemsDiv.innerHTML += '<div class = "item"></div>' 
    // itemsDiv.innerHTML += '<div class = "item"></div>' 
    // for (let i =0; i<=100; i++){
    //     itemsDiv.innerHTML += '<div class = "item"></div>'
    // }

} else {
    //Вивід повідомлення про не знайдений блок 
    console.log('Блок товарів не знайдено')
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
displayTeachers(itemsArray);

function displayTeachers(teachers) {
    let sortedTeachers = teachers.slice(); // Клонування масиву
    itemsDiv.innerHTML = ''; // Очистити вміст контейнера

    sortedTeachers.forEach((teacher, index) => {
        itemsDiv.innerHTML +=
            `<div class="item">
                <h2>Вчитель № ${index + 1} з ${sortedTeachers.length}</h2>
                <p>${teacher.lastName} ${teacher.firstName}</p>
                <p><img src="${teacher.photo}" alt="${teacher.lastName} ${teacher.firstName}" class="item-image"></p>
                <p>Вік: ${teacher.age} </p>
                <p>Предмет: ${teacher.subject} </p>
                <p>Освіта: ${teacher.education} </p>
                <p>Звання: ${teacher.rank} </p>
                <p><a href="${teacher.url}" target="_blank">Профіль</a></p>
            </div>`;
    });
}

function sortByAge() {
    let sortedByAge = itemsArray.slice().sort((a, b) => parseInt(a.age) - parseInt(b.age));
    displayTeachers(sortedByAge);
}

function sortByLastName() {
    let sortedByLastName = itemsArray.slice().sort((a, b) => a.lastName.localeCompare(b.lastName));
    displayTeachers(sortedByLastName);
}

function sortBySubject() {
    let sortedBySubject = itemsArray.slice().sort((a, b) => a.subject.localeCompare(b.subject));
    displayTeachers(sortedBySubject);
}
