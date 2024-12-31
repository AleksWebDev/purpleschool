
//Уникализировать массив объектов с помощью Set

//Я не совсем понял как правильно сделать с помощью map и find
// поэтому сделал с filter и findIndex

let arr = [
    {id:1 , name: 'Vasy'},
    {id:2, name: 'Petya'},
    {id:3, name: 'Vladimir'},
    {id:2, name: 'Sasha'},
    {id:4, name: 'Vova'},
    {id:1, name: 'Vasy'}
]


let newArr = new Set([...arr].filter((item, index, array) => {
    return index === array.findIndex((el) => el.id === item.id);
}))

newArr.add({id: 5, name: 'Dima'})

console.log(newArr);