class Task{
    constructor(task){
        this.task = task;
    }

    run(){
        return this.task;
    }
}




const taskList = [
    new Task('Сделать работу на улучшением производительности'),
    new Task('Переписать легаси код с использованием новых методов из ES6'),
    new Task('Отдых'),
    new Task('Приготовить вкусный обед')
]


export {taskList}