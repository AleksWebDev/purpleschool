
//Уникализировать массив объектов с помощью Set



let arr = [
    {id:1 , name: 'Vasy'},
    {id:2, name: 'Petya'},
    {id:3, name: 'Vladimir'},
    {id:2, name: 'Sasha'},
    {id:4, name: 'Vova'},
    {id:1, name: 'Vasy'}
]


//1 способ решиния с помощью метода fiilter/findIndex

let newArr = new Set([...arr].filter((item, index, array) => {
    return index === array.findIndex((el) => el.id === item.id);
}))

newArr.add({id: 5, name: 'Dima'})

console.log(newArr);



//2 способ решения с помощью метода map/find
const set = new Set([...arr].map((item, index, array) => {
      return  array.find((el) => el.id === item.id);
}))

console.log(set.add({id: 6, name : 'Aleksey'}));