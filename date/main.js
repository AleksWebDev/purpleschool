

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


const validateAge = (users) => {

    const now = Number(new Date().getFullYear());

    for(let person in users){

        let personDate = Number(new Date(users[person].dateBirth).getFullYear());
        
        if((now - personDate) >= 14){
            users[person].acess = true;

            console.log(`Acess granted for ${users[person].name}`);
            
        }


    }

    return users;

}
const res = validateAge(users);
console.log(res);