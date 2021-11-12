//**********************************************CLasswork
// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = (arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7]+arr[8]+arr[9]);
console.log(result);


// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function plusik(array){
//     let result = 0;
//     for (let i =0; i < array.length; i++){
//         result =
//     }
// }
// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book2 = {
    name: "Ford",
    number: 30,
    genre: 'philosophy'
};
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book1 = {
    name: "451",
    number : 180,
    genre: 'antiutopia',
    avtor: 'Ray'
}
// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let book = [
    {   name : 'Rich dad poor dad',
        page: 150,
        genre: 'econ',
        avtor: 'Robert'},
    {   name : 'qwerty',
        page: 230,
        genre: 'econ',
        avtor: 'Robert'},
    {   name : 'roadup',
        page: 1210,
        genre: 'econ',
        avtor: 'Robert'},
];
// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23;
let width = 10;
let s = width * height;
console.log(s);
// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
let v = Math.PI*Math.pow(dC/2,2)*heightC;
console.log(v);
// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = Math.pow(3,2);
let m = Math.pow(4,2);
let k =  n + m;
console.log(Math.sqrt(k));
//
