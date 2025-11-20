import { v4 as uuidv4 } from 'uuid';
import { Task,Status } from "./models";

export default class {
    private tasks: Array<Task>;
    constructor() {

    }
    public createTask(task: Task): string {
        const id = uuidv4();
        task.id = id;
        const time = task.doDate.getTime() - new Date.getTime();
        const timeoutld = setTimeout(() => {
           task.status=Status.overdue;
        }, time);
        task.timeoutld=timeoutld;

        this.tasks.push(task);
        return id;
    }

    public getAll(): Array<Task> {
        return this.tasks;
    }

    public completeTask(id: string) {
        const index = this.tasks.findIndex(task => task.id = id)
        this.tasks[index].status = 1;
    }

}