// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
// - створити функцію яка обчислює та повертає площу кола
// - створити функцію яка обчислює та повертає площу циліндру
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.



//   1  - створити функцію яка обчислює та повертає площу прямокутника висотою 20
let a = 20;
let b = 10;
let plosg = (a,b) => {console.log(a*b);} // Ббільш скорочений варіант ---- a*b; -__--- не спрацював
plosg(a,b)
// 2 - створити функцію яка обчислює та повертає площу кола
let p = Math.PI;
let r = Math.pow(5,2)
let rc = (p,r) => {console.log(p*r);}
rc(p,r)
// 3 - створити функцію яка обчислює та повертає площу циліндру
let ra = 10;
let he = 20;
let pc = (p,ra,he)=>{
let cul = p * 2 * ra * he;
console.log(cul);
// return cul;
}
pc(p,ra,he)
// 4 - створити функцію яка приймає масив та виводить кожен його елемент
let arr = [1,2,3,4,5, 'asda',!!'1231']
let farr = (arr ) =>{
 for( const key of arr){
  console.log(key);
 }
}
farr(arr );
// 5 - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let text = "wasdas"
let pt = (text) =>{
 document.write(`<p>${text}</p>`)
}
pt(text);
// 6 - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ui = () =>{
 // document.write(`<ul>`)
 // document.write(`<li>${text}</li>`)
 // document.write(`</ul>`)
//2 варіант
 document.write(`<ul>`)
 for (let i = 0; i < 3; i++){
  document.write(`<li>${text}</li>`)
 }
 document.write(`</ul>`)
}
ui(text)
// 7 - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let limit = 3;
let uo = (text,limit) =>{
 document.write(`<ul>`)
 for (let i = 0; i <limit ; i++){
  document.write(`<li>${text}</li>`)
 }
 document.write(`</ul>`)
}
uo(text,limit)
// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrp = [1,2,3,4,5, 'asda',!!'1231']
let prel = () =>{
 document.write(`<ul>`)
 for (const mas of arrp){
  document.write(`<li>${arrp}</li>`)
 }
 document.write(`</ul>`)
}
prel ()
// 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let masik = [{id: 'lolo',name: 'valy', age:22 },{id: 'lolo',name: 'valy', age:22 },{id: 'lolo',name: 'valy', age:22 }];
let last  =()=>{
for ( let i = 0; i < masik.length; i++){
 document.write(`<div>${masik[i].id} ${masik[i].name} ${masik[i].age} </div>`)
}
}
last  ()

// ****************************************cw**********************************?

//  1 - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let fmin = (n1,n2,n3) => {
 for( let i = 0; i < 1; i ++){
  if ( n1 < n2 && n1 < n3  ){
   document.write(`<div> ${n1}</div>`);
  }else if ( n2 < n1 && n2 < n3 ){
   document.write(`<div> ${n2}</div>`);
  }else if ( n3 < n1 && n3 < n2){
   document.write(`<div> ${n3}</div>`);
  }else {
   document.write(`<div> ${'!! 404'}</div>`);
  }
 }
}
fmin  (1,2,3)
// 2 - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let fmax = (n1,n2,n3) => {
 for( let i = 0; i < 1; i ++){
  if ( n1 > n2 && n1 > n3  ){
   document.write(`<div> ${n1}</div>`);
  }else if ( n2 > n1 && n2 > n3 ){
   document.write(`<div> ${n2}</div>`);
  }else if ( n3 > n1 && n3 > n2){
   document.write(`<div> ${n3}</div>`);
  }else {
   document.write(`<div> ${'!! 404'}</div>`);
  }
 }
}
fmax  (1,2,3)
// 3- створити функцію яка повертає найбільше число з масиву
let arrm = [1,2,3,4,5];
let farrma = (wiy) => {
 let  o = wiy[0]
 for (let max of wiy){
  if (max> o){
   o = max;
  }
 }
 document.write(`${o}`)
}
farrma (arrm)
// 4 - створити функцію яка повертає найменьше число з масиву
let arrm1 = [1,2,3,4,5];
let farrmi = (tyty) => {
 let mi = tyty[0];
 for ( let min of tyty ){
  if ( min < mi){
   mi = min;
  }
 }
 document.write(`<div>${mi}</div>`)
}
farrmi (arrm1)
// 5 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arrm2 = [1,2,3,4,5];
let j=0;
let fmar = () =>{
 for (let i = 0; i < arrm2.length; i++){
  j = j + arrm2[i];
 }
 console.log(j);
}
fmar  ()
// 6 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arrm3 = [1,2,3,4,5];
let s = 0;
let ser = (arrm3) => {
 for (let i = 0; i < arrm3.length; i++){

 s += arrm3[i]/arrm3.length;
 }
 console.log(s)
}
ser (arrm3)
//// 7 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let mamasik4 = [22,12,5,11,2];
let mima = (mamasik4) =>{
  let maxc = mamasik4[0];
  let minc =mamasik4[0];
 for ( const chislo of mamasik4){
  if (chislo > maxc ){
   maxc = chislo;
  } else if ( chislo < minc){
   minc = chislo;
  }
 }
 console.log(maxc)
return minc;
}
mima(mamasik4)
// 8 - створити функцію яка заповнює масив рандомними числами
let arrpp= () => {
 let arr4 = [];
 for (let i = 0; i < 10; i++) {
  arr4.push(Math.floor(Math.random() * 10));

 }
 console.log(arr4)
}
arrpp()
// 9 - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let arr5 = [];
let liimit = 10;
let arp= (limit) => {
 for (let i = 0; i < 10; i++) {
  arr5.push(Math.floor(Math.random() * 10));

 }
 console.log(arr5)
}
arp(liimit)
let m1 = [1,2,3,4,5,6,7];
let rev = [];
// 10 - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let reverse = () =>{
 for (let i = m1.length-1; i >= 0; i--){
  rev.push(m1[i])
 }
 console.log(rev)
}
reverse  ()

//**********************************************ADD************************ADD***********************ADD******************************************************************
// - Дано натуральное число n. Выведите все числа от 1 до n.
let n = 20;
// let natural = (n) =>{
//  for ( let i = 1; i <= n; i++){
//        console.log(i);
//  }
// }
// natural (n)
let m = 0;
let frec = (m,n) =>{
 m++;
 if ( m <= n){
  console.log(m)
  frec (m,n);
 }

}
frec (m,n);


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let aa = 20;
let bb = 10;
let map = (aa,bb) => {
if (bb < aa){
 for (let i = bb; i <= aa; i++){
  console.log(i)
 }
}else if (aa < bb){
 for ( let i = bb; i >= aa; i--){
  console.log(i)
 }
}
}
map(aa,bb)



// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
let swap = (arrr,i) => {
 let temp;
 temp = arrr[i];
 arrr[i] = arrr[i + 1];
 arrr[i + 1] = temp;

}
console.log(arrr[i])
swap  ([9,8,0,4], 0)

let swap = (arr,i) => {
for (let i = 0; i < arr.length; i++){
 let qq;
 qq= arr[i];
 arr[i] = arr[i+1];
 arr[i+1]=qq;

}

}
console.log(arr[i])
swap  ([9,8,0,4], 0)






// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]