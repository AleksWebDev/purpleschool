import { taskList } from "./task.js";
import User from "./user.js";


window.addEventListener('DOMContentLoaded', function(){
    let user = new User(taskList);

    console.log(user.do())
})