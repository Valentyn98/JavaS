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
