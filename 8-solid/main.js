/* 
Принцип открытости/закрытости Мейера основывается на идее, что разработанная изначально реализация класса в дальнейшем не модифицируется 
(разве что исправляются ошибки), а любые изменения производятся через создание нового класса, который обычно наследуется от изначального. 
Согласно определению Мейера реализация интерфейса может быть унаследована и переиспользована, но интерфейс может и измениться в новой реализации.
*/

class Billing{
    amount = 0;
    constructor(hour){
        this.hour = hour;
    }

    set(val){
        this.amount = val;
    }

    get(){
        return this.amount;
    }
};

class FixedBilling extends Billing{
    constructor(hour){
        super(hour)
    }
};

class HourBilling extends Billing{
    constructor(hour){
        super(hour);
    }
};

class ItemBilling extends Billing{
    constructor(item){
        this.item = item;
    }
};









