// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)




//1 - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User ( id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//мой вариант
let us = new User ( 2, 'ew', 'w' , 'email', 'phone')
console.log(us)
let arr = [];
let pushf = (us) => {
    for (let i = 0; i < 10; i++) {
        arr.push(us);
    }
    return arr
}
pushf (us)
console.log(arr)
//второй вариант  вариант // створити пустий масив, наповнити його 10 об'єктами new User(....)
   let userArr = [
       new User(22, 'Olya', 'Polka', 'pol@gmail.com', 2131 ),
       new User(2, 'Anya', 'cushka', 'cushka@gmail.com', 2132),
       new User(56, 'Uker', 'rukav', 'rukav@gnail.com', 4533),
       new User(234, 'Uker', 'rukav', 'rukav@gnail.com', 4534),
       new User(23, 'Dker', 'rukav', 'rukav@gnail.com', 4535),
       new User(12, 'Rnder', 'rukav', 'rukav@gnail.com', 4536),
       new User(12, 'Nuer', 'rukav', 'rukav@gnail.com', 4537),
       new User(66, 'Uper', 'rukav', 'rukav@gnail.com', 4538),
       new User(5, 'Geer', 'rukav', 'rukav@gnail.com', 4539),
       new User(1, 'Utyu', 'rukav', 'rukav@gnail.com', 4530)
    ];
    console.log(userArr);
// 2 - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let c = userArr.filter((item)=> item.id % 2 === 0)
console.log(c)
// 3 - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let d = userArr.sort((a ,b) => (a.id - b.id ));
console.log(d)
// 4 - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname , email, phone, lorder) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = lorder;
    }
}
// 5 - створити пустий масив, наповнити його 10 об'єктами Client
let Clientt =[
    new Client( 1, 'luda', 'Ludovna', 'lud@gmail.com', 221,['stakan' , 'lopata', 'muska', 'utug'] ),
    new Client( 2, 'lobo', 'sdLob3ob', 'ldsdobob@gmail.com', 222,['stakan' , 'muska', 'utug']),
    new Client( 3, 'Udon' ,'Usdonov' , 'udkda@gmail.com' ,223, ['stakan' ,]),
    new Client( 4, 'sdlobsdfo', 'Lobob', 'lobfob@gmail.com', 224,['stakan' ,  'utug']),
    new Client( 53, 'Udon' ,'Udonov' , 'udka@gmail.com' ,225, ['stakan' ,'utug']),
    new Client( 12, 'lobo', 'Lobovb', 'hlobob@gmail.com', 226,['stakan' , 'lopata', 'muska', 'utug']),
    new Client( 22, 'Udvon' ,'Udonov' , 'udka@gmail.com' ,227, ['stakan' , 'lopata', 'utug']),
    new Client( 15, 'lqweobo', 'Lobosb', 'lobob@gmail.com', 228,[ 'lopata', 'muska', 'utug']),
    new Client( 66, 'Udon' ,'Udonov' , 'udka@gmail.com' ,229, ['stakan' , 'lopata', 'muska', 'utug']),
    new Client( 2346, 'lonbo', 'Lowbob', 'lobob@gmail.com', 220,['stakan' , 'muska', 'utug']),
    new Client( 334, 'Udodfn' ,'Udonov' , 'udhka@gmail.com' ,223, ['stakan' , 'lopata', 'muska', 'utug', 'utug'])

];
console.log(Clientt)
// 6 - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let w = Clientt.sort((a ,b) => (a.order.length - b.order.length ));
console.log(w)



// *****************************************************************************CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCWWWWWWWWWWWWWWWWWWWWWWWWWWWW********************************************************************
// *****************************************************************************CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCWWWWWWWWWWWWWWWWWWWWWWWWWWWW********************************************************************
// *****************************************************************************CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCWWWWWWWWWWWWWWWWWWWWWWWWWWWW********************************************************************
// *****************************************************************************CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCWWWWWWWWWWWWWWWWWWWWWWWWWWWW********************************************************************
// *****************************************************************************CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCWWWWWWWWWWWWWWWWWWWWWWWWWWWW********************************************************************
// *****************************************************************************CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCWWWWWWWWWWWWWWWWWWWWWWWWWWWW********************************************************************




// -v Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -v- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -v- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -v- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -v- changeYear (newValue) - змінює рік випуску на значення newValue
// -v- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Cars (model, producer, year, kph, volume ){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.kph = kph;
    this.volume = volume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.kph}`)
    }
    this.info = function () {
        for (let key in this){
            if (typeof this[key] !== 'function'){
                console.log(`${key} ${this[key]}`)
            }
        }
    }
    this.increaseMaxSpeed = function (newSpeed){
        if (this.kph !== newSpeed){
            this.kph = newSpeed;
        }
    }
    this.changeYear = function (newValue){
        if(this.year !== newValue){
            this.year = newValue;
        }
    }
    this.addDriver = function (driver){
        this.driver = driver ;
    }
}

let auto = new Cars ( 'rol', 'rolrol', 2021, 69, 3)
auto.drive()
auto.increaseMaxSpeed (99)
auto.changeYear (1950)
auto.addDriver ('Petya')
auto.info()



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -v- drive () - яка виводить в консоль ``їдемо зі швидкістю ${максимальна швидкість}`
// -v- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -v- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -v- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Carss {
    constructor(model, producer, year, kph, volume ) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.kph = kph;
        this.volume = volume;
    }
    drive (){
        console.log(`їдемо зі швидкістю ${this.kph}`)
    }
    info (){
        for (let key1 in this){
                console.log(`${key1} ${this[key1]}`)
        }
    }
    increaseMaxSpeed (newSpeed){
        if(this.kph !== newSpeed ){
            this.kph = newSpeed;
        }
    }
    changeYear (newValue){
        if(this.year !== newValue ){
            this.year = newValue;
        }
    }
    addDriver (driver){
        this.driver = driver;
    }
}
let vod = new Carss ('Tesla', 'Mask',2021,238,650);

vod.drive();
vod.increaseMaxSpeed (222);
vod.changeYear (22)
vod.addDriver ( 'Max')
vod.info ();

// v-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


function Popailushki (name, years, foot) {
    this.name = name;
    this.years = years;
    this.foot = foot;
}
 let popelisk = [
     new Popailushki('Olegh', 56, 43),
     new Popailushki('Tolik', 46, 42),
     new Popailushki('Nikolya', 56, 41),
     new Popailushki('Yevgen', 33, 14),
     new Popailushki('Andry', 59, 40),
     new Popailushki('Olegh', 56, 41),
     new Popailushki('julia', 76, 43),
     new Popailushki('Olegh', 56, 43),
     new Popailushki('Olegh', 66, 23),
     new Popailushki('Vitka', 56, 43),
 ]
console.log(popelisk);

function Prince (name, years, tyflya) {
    this.name = name;
    this.years = years;
    this.tyflya = tyflya;
}
 let blackp = new Prince ('Vitya',20,43)
 let loveordie = (popelisk, blackp) =>{
    for ( let person of popelisk){
        if (person.foot === blackp.tyflya){
            console.log(`tvoya princeska ${person.name}`)
        }
    }
 }
loveordie (popelisk, blackp)

let prinsessi = popelisk.find((item)=>item.foot === blackp.tyflya);
console.log(prinsessi)
    // ***********************************************************AD********AD************ADDD***********************************************************
// ***********************************************************AD********AD************ADDD***********************************************************
// ***********************************************************AD********AD************ADDD***********************************************************
// ***********************************************************AD********AD************ADDD***********************************************************
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
function Infous (id,name,username,email,adr ,phone,website) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.adr = adr;
    this.phone = phone;
    this.website = website;
}
    class Adr {
        constructor(street, suite, city, zipcode, geo) {
            this.street = street;
            this.suite = suite;
            this.city = city;
            this.zipcode = zipcode;
            this.geo = geo;
        }
    }
        class Gg {
            constructor(lat,lng) {
                this.lat = lat;
                this.lng = lng;
            }
        }
        class Company {
            constructor(name,catchPhrase,bs) {
                this.name = name;
                this.catchPhrase = catchPhrase;
                this.bs = bs;
            }
        }

let geog = new Gg ('-37.3159','81.1496')
let adr = new Adr ('Kulas Light','Apt. 556','Gwenborough','92998-3874',geog)
let comp = new Company ('Romaguera-Crona','Multi-layered client-server neural-net')
let infouser = new Infous (1,'Leanne Graham','Bret','Sincere@april.biz',adr,'1-770-736-8031 x56442','hildegard.org',comp)

console.log(infouser)
// {
//v     id: 1,
//v         name: 'Leanne Graham',
//v     username: 'Bret',
//v     email: 'Sincere@april.biz',
// v    address: {
// v    street: 'Kulas Light',
// v        suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }