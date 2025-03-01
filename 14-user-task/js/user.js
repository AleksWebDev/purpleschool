export default class User{

    taskList = [];

    constructor(tasks){
        this.taskList = tasks;
    }

    do(){
        this.taskList.forEach(item => {
            console.log(item.run())
        })
    }

}