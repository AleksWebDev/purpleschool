

//К примеру на сайт приходят заявки на регистрацию 
//Мы должны хранить эти заявки в виде массива с объектами
//Что бы предоставитьтт доступ к сайту мы должны проваледировать все поступившие заявки
//И уже потом предоставлять доступ к ресурсам сайта тем пользователям, которым исполнилось 14 лет и больше


const users = [
    {name: 'Aleksandr', dateBirth: '1995-09-15'},
    {name: 'Aleksey', dateBirth: '1998-05-01'},
    {name: 'Dmitriy', dateBirth: '2014-11-04'},
    {name: 'Konstantin', dateBirth: '2016-09-22'},
    {name: 'Nikolay', dateBirth: '2007-03-02'},

]


//Привет Сергей!
// Я понял замечание 
// Но мне не хватает понимания как правильно реализовать валидация возраста с учетом месяца и дня рождения 
// Было бы очень классно - если бы вы сделали подсказку как правильно реализоватть такую валидацию 


const validateAge = (users) => {

    for(let birth in users){

        const differece =  Date.now() - new Date(users[birth].dateBirth).getTime();
        const diff = Math.abs(new Date(differece).getUTCFullYear() - 1970);

        if(diff >= 14){
            users[birth].access = true;
        }
    }

    return users;
}
const res = validateAge(users);
console.log(res);

