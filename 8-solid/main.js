/* 
Принцип открытости/закрытости Мейера основывается на идее, что разработанная изначально реализация класса в дальнейшем не модифицируется 
(разве что исправляются ошибки), а любые изменения производятся через создание нового класса, который обычно наследуется от изначального. 
Согласно определению Мейера реализация интерфейса может быть унаследована и переиспользована, но интерфейс может и измениться в новой реализации.
*/

class Billing {

    amount = 8;

    constructor(hour){
        this.hour = hour;
    }

    calculateTotal(){
        return this.amount += this.hour;
    }

}

class HourBilling extends Billing{

    amount = 10;

    constructor(hour){
        super(hour)
    }

    calculateTotal(){
        return this.amount += this.hour;
    }

}


class ItemBilling extends Billing{

    amount = 8;

    constructor(item){
        super();
        this.item = item;
    }

    calculateTotal(){
        return this.amount * this.item;
    }
}

const hourBilling = new HourBilling(19);
console.log(hourBilling.calculateTotal());

const itemBilling = new ItemBilling(20);
console.log(itemBilling.calculateTotal())













